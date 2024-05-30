# Proyecto Node.js: Gestión de Riesgos Oncológicos

## Descripción

Este es un proyecto desarrollado en Node.js (versión 20.5.0) que permite la gestión de riesgos oncológicos asociados a pacientes. El sistema soporta la creación, consulta, actualización y eliminación de registros de riesgos oncológicos. La base de datos utilizada es MongoDB, y su configuración se realiza a través de un archivo `.env`.

## Requerimientos Funcionales

- **RF-09**: El sistema debe permitir la creación de registros de riesgos oncológicos asociados a los pacientes, incluyendo detalles como tipo de riesgo, factores de riesgo, resultados de pruebas, etc.
- **RF-10**: El sistema debe permitir la consulta de registros de riesgos oncológicos asociados a los pacientes.
- **RF-11**: El sistema debe permitir la actualización de registros de riesgos oncológicos.
- **RF-12**: El sistema debe permitir la eliminación de registros de riesgos oncológicos.

## Configuración del Entorno

1. Clona este repositorio:
`git clone <URL_DEL_REPOSITORIO>`
`cd <NOMBRE_DEL_REPOSITORIO>`

2. Instala las dependencias:
`npm install`

3. Configura las variables de entorno en un archivo .env en la raíz del proyecto. Ejemplo de configuración:

`URL_CONNECT=mongodb://<usuario>:<password>@<host>:<puerto>/<nombre_base_de_datos>`
`PORT=3000`

## Dependencias uasadas en el proyecto

- body-parser (^1.20.2)
- dotenv (^16.4.5)
- express (^4.19.2)
- mongoose (^8.4.0)
- nodemon (^3.1.2)

## Como ejecutar el proyecto

- Desarrollo: `npm run dev`
- Producción: `npm run start`


## Rutas de acceso

### Ruta Paciente 

-   Listar todos los pacientes: http://localhost:${PORT}/patients/  ->GET
-   Buscar paciente por id: http://localhost:${PORT}/patients/byID ->POST
    Datos:{patientID: 'Id del cliente'}
-   Crear paciente: http://localhost:${PORT}/patients  ->POST
    Datos:{code: '', name '', description: '', risk: ''}

### Ruta Riesgos Oncológicos 

-   Listar todos los pacientes: http://localhost:${PORT}/patients/  ->GET
-   Buscar paciente por id: http://localhost:${PORT}/patients/byID ->POST
-   Crear paciente: http://localhost:${PORT}/risks  ->POST
