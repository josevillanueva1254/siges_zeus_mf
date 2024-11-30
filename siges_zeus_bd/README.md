/siges_zeus_bd
|-- docker-compose.yml
|-- primary/
|   |-- postgresql.conf
|   |-- pg_hba.conf
|   |-- setup_primary.sh
|   |-- init.sql
|-- replica/
|   |-- postgresql.conf
|   |-- pg_hba.conf
|   |-- setup_replica.sh


Comandos
0.verificar permisos a este archivo:
 chmod +x replica/setup_replica.sh

1.Levantar el Entorno con Docker Compose Ejecuta este comando para iniciar los contenedores:
    El nodo principal creará el esquema, la tabla, e insertará datos iniciales.
    El nodo réplica se configurará automáticamente en modo standby.
     docker-compose up -d
2.Verificar que la Replicación Funciona
    docker ps
Conéctate al nodo réplica y verifica que los datos de la tabla replica se hayan replicado correctamente:
    docker exec -it postgres_replica psql -U admin -d sigeszeus -c "SELECT * FROM replica_prueba.replica;"

3.Si todo está funcionando, deberías ver los datos insertados:
 id | nombre  | apellido
----+---------+---------
  1 | Juan    | Pérez
  2 | Ana     | López
  3 | Carlos  | Gómez
4.Verificar el Estado de la Replicación Desde el nodo principal, puedes verificar que la réplica está activa:
docker exec -it postgres_primary psql -U admin -c "SELECT * FROM pg_stat_replication;"

5.Notas Finales
5.1.Credenciales y Puertos:
    Usuario: admin
    Contraseña: admin123
    Puerto principal: 5432
    Puerto réplica: 5433
5.2.Limpieza del Entorno: Para eliminar todo, incluyendo datos persistentes, ejecuta:
    docker-compose down -v
5.3.Validar si se elimino todo correctamente
    docker ps -a
5.4.Customización: Puedes modificar los datos iniciales en init.sql o agregar más réplicas en docker-compose.yml.

Con este script completo, al levantar el entorno ya tendrás configurada la replicación en línea y podrás verificar que está funcionando correctamente con datos reales

Utiles:
1. Verifica Contenedores Detenidos
Ejecuta el siguiente comando para listar todos los contenedores, incluidos los detenidos:
    docker ps -a

2. abrir shell para linux y ver los volumenes en docker:
    docker run -it --rm --privileged --pid=host debian nsenter -t 1 -m -u -i -n sh
3. Si encuentras archivos residuales, elimínalos:

    rm -rf /var/lib/docker/volumes/siges_zeus_bd_primary_data/_data/*
4. Sal del contenedor:
    exit

Si Prefieres Tener Bash Instalado
Si prefieres trabajar con bash, instala bash dentro de la imagen Debian temporal:

Corre el contenedor con acceso root:
 
    docker run -it --rm debian sh
Dentro del contenedor, instala bash:
 
    apt update && apt install -y bash
Sal del contenedor y usa el comando inicial con bash.


Forzar la Eliminación del Volumen 
Elimina el Volumen Directamente: Desde tu terminal en el host, elimina el volumen completo asociado al contenedor:
    docker volume rm siges_zeus_bd_primary_data
Si el volumen no se elimina correctamente, intenta forzar la limpieza de recursos huérfanos:
    docker system prune --volumes -f
Recrea el Entorno: Vuelve a levantar los contenedores para que Docker cree un volumen limpio:
    docker-compose up -d


****************VALIDAR DESPLIEGUE********************


Pasos para Usar el Nuevo Código
Detén y elimina el entorno actual:

    docker-compose down -v

Asegúrate de que los archivos están en las rutas correctas y con permisos adecuados:

    chmod 644 primary/pg_hba.conf primary/postgresql.conf primary/init.sql
    chmod 644 replica/pg_hba.conf replica/postgresql.conf
    chmod +x replica/setup_replica.sh

Levanta el entorno nuevamente:
    docker-compose up -d

Verifica el estado de los contenedores:
    docker ps

Revisa los logs del nodo réplica para confirmar la configuración:

    docker logs postgres_replica

Prueba la replicación: Inserta datos en el nodo principal y verifica que se reflejan en la réplica:

    docker exec -it postgres_primary psql -U admin -d sigeszeus -c "INSERT INTO replica_prueba.replica (nombre, apellido) VALUES ('Prueba', 'Replicada');"
    docker exec -it postgres_replica psql -U admin -d sigeszeus -c "SELECT * FROM replica_prueba.replica;"

Resultado Esperado
La réplica se configurará automáticamente sin pedir contraseñas gracias al archivo .pgpass.
La replicación debería funcionar correctamente, reflejando los datos insertados en el nodo principal.

******************************************************

Pasos para Cambiar a Replicación Asíncrona
> Actualiza el Archivo postgresql.conf: Asegúrate de guardar los cambios en el archivo primary/postgresql.conf.
>Reinicia el Nodo Principal: Aplica los cambios reiniciando el contenedor:

    docker-compose restart primary

> Verifica el Estado de la Replicación: Comprueba que la réplica sigue funcionando y que ahora está en modo async:

    docker exec -it postgres_primary psql -U admin -c "SELECT * FROM pg_stat_replication;"
En la columna sync_state, deberías ver async.

**********************************************
Verifica que PostgreSQL esté en ejecución en el nodo principal:

bash
Copiar código
docker exec -it postgres_primary pg_isready -U admin -d sigeszeus
Valida que el usuario y la base de datos estén configurados correctamente:

bash
Copiar código
docker exec -it postgres_primary psql -U postgres -c "SELECT rolname FROM pg_roles;"
docker exec -it postgres_primary psql -U postgres -c "SELECT datname FROM pg_database;
******************************************


**** VALIDAR REPLICACION ******

Siguiente Paso: Validar los Datos
Para confirmar que los datos están replicados correctamente en la base de datos primaria y las réplicas:

1. Consultar la Base de Datos Principal
Ejecuta el siguiente comando para consultar los datos en la base de datos principal (postgres_primary):

    docker exec -it postgres_primary psql -U admin -d sigeszeus -c "SELECT * FROM replica_prueba.replica;"
Debes ver algo como:

plaintext
Copiar código
 id | nombre | apellido
----+--------+----------
  1 | Juan   | Pérez
  2 | Ana    | López
  3 | Carlos | Gómez
(3 rows)
2. Consultar la Base de Datos Réplica
Ejecuta un comando similar en la réplica (postgres_replica) para verificar la replicación:

    docker exec -it postgres_replica psql -U admin -d sigeszeus -c "SELECT * FROM replica_prueba.replica;"
Deberías obtener los mismos resultados que en la base de datos principal. Si ves los datos, la replicación está funcionando correctamente.


*******************************