#!/bin/bash
set -e

echo "Configurando el nodo principal de PostgreSQL..."

# Asegurar que el directorio de datos esté inicializado
if [ ! -f /var/lib/postgresql/data/PG_VERSION ]; then
  echo "Directorio de datos vacío. Inicializando con initdb..."
  initdb -D /var/lib/postgresql/data
  echo "Directorio de datos inicializado."
else
  echo "El directorio de datos ya está inicializado."
fi

# Ajustar permisos del directorio de datos
echo "Ajustando permisos del directorio de datos..."
chown -R postgres:postgres /var/lib/postgresql/data
chmod 700 /var/lib/postgresql/data

# Configurar PostgreSQL para la replicación
echo "Configurando PostgreSQL para la replicación..."
cat >> /var/lib/postgresql/data/postgresql.auto.conf <<EOF
wal_level = replica
max_wal_senders = 5
wal_keep_size = 64MB
max_replication_slots = 5
EOF

# Iniciar PostgreSQL temporalmente para configuraciones avanzadas
echo "Iniciando PostgreSQL temporalmente para configuraciones avanzadas..."
pg_ctl -D /var/lib/postgresql/data -l /var/lib/postgresql/data/postgresql.log start

# Crear el usuario si no existe
echo "Validando la existencia del usuario 'admin'..."
psql -U postgres -tc "SELECT 1 FROM pg_roles WHERE rolname = 'admin';" | grep -q 1 || psql -U postgres -c "CREATE ROLE admin LOGIN PASSWORD 'admin123'; ALTER ROLE admin CREATEDB; ALTER ROLE admin REPLICATION;"
echo "Usuario 'admin' configurado."

# Crear la base de datos si no existe
echo "Validando la existencia de la base de datos 'sigeszeus'..."
psql -U postgres -tc "SELECT 1 FROM pg_database WHERE datname = 'sigeszeus';" | grep -q 1 || psql -U postgres -c "CREATE DATABASE sigeszeus OWNER admin;"
echo "Base de datos 'sigeszeus' configurada."

# Crear el slot de replicación
echo "Creando el slot de replicación 'replica_slot'..."
psql -U postgres -c "SELECT * FROM pg_create_physical_replication_slot('replica_slot');" || {
  echo "Advertencia: No se pudo crear el slot de replicación. Es posible que ya exista."
}

# Detener PostgreSQL después de configurarlo
echo "Deteniendo PostgreSQL después de la configuración inicial..."
pg_ctl -D /var/lib/postgresql/data stop

echo "Nodo principal configurado correctamente."
