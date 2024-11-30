#!/bin/bash
set -e

echo "Configurando la réplica de PostgreSQL..."

# Validar conexión con el nodo principal
until pg_isready -h postgres_primary -p 5432 -U admin; do
  echo "Esperando a que el nodo principal esté disponible..."
  sleep 2
done

# Configura el archivo .pgpass para la autenticación automática
PGPASS_FILE="/var/lib/postgresql/.pgpass"
echo "postgres_primary:5432:*:admin:admin123" > $PGPASS_FILE
chmod 600 $PGPASS_FILE
chown postgres:postgres $PGPASS_FILE

# Realiza la copia base desde el nodo principal
echo "Iniciando copia base desde el nodo principal..."
pg_basebackup -h postgres_primary -D /var/lib/postgresql/data -U admin -Fp -Xs -P -R || {
  echo "Error: Falló la copia base. Verifica la conexión con el nodo principal."
  exit 1
}

# Configura el uso de slots de replicación (opcional)
echo "primary_slot_name = 'replica_slot'" >> /var/lib/postgresql/data/postgresql.auto.conf

# Ajusta permisos del directorio de datos
echo "Ajustando permisos del directorio de datos..."
chown -R postgres:postgres /var/lib/postgresql/data
chmod 700 /var/lib/postgresql/data

# Crea el archivo standby.signal para activar el modo réplica
echo "Activando el modo réplica..."
touch /var/lib/postgresql/data/standby.signal
chown postgres:postgres /var/lib/postgresql/data/standby.signal

echo "Replica configurada correctamente."
