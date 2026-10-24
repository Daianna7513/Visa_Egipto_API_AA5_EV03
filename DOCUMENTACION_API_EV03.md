# DOCUMENTACIÓN DE SERVICIOS WEB – VISA A EGIPTO

**Evidencia:** GA7-220501096-AA5-EV03  
**Programa:** Tecnólogo en Análisis y Desarrollo de Software – SENA  
**Proyecto formativo:** Visa a Egipto

## 1. Introducción
La API del proyecto Visa a Egipto permite registrar usuarios, autenticar sus credenciales y gestionar solicitudes de visa. Fue desarrollada con Node.js, Express y MongoDB, utilizando Mongoose para el manejo de los datos.

## 2. Tecnologías utilizadas
- Node.js: entorno de ejecución de JavaScript.
- Express: creación de servicios web.
- MongoDB: almacenamiento de información.
- Mongoose: conexión y gestión de modelos.
- bcryptjs: protección y verificación de contraseñas.
- Postman: pruebas de los servicios.
- Git y GitHub: control de versiones.

**Dirección local:** http://localhost:3000  
**Formato de intercambio:** JSON

## 3. Documentación de los servicios

### 3.1. Registro de usuarios
**Método:** POST  
**Ruta:** /registro  
**Objetivo:** Registrar nuevos usuarios en el sistema.

**Ejemplo de solicitud:**
```json
{
  "usuario": "usuarioPrueba",
  "contrasena": "Clave12345"
}
```

**Respuestas:**
- 201: Usuario registrado satisfactoriamente.
- 400: Datos de registro inválidos.
- 409: El usuario ya se encuentra registrado.
- 500: Error interno al registrar el usuario.

La contraseña se almacena protegida mediante bcryptjs.

### 3.2. Inicio de sesión
**Método:** POST  
**Ruta:** /login  
**Objetivo:** Verificar las credenciales del usuario.

**Ejemplo de solicitud:**
```json
{
  "usuario": "usuarioPrueba",
  "contrasena": "Clave12345"
}
```

**Respuestas:**
- 200: Autenticación satisfactoria.
- 400: Debe ingresar usuario y contraseña.
- 401: Error en la autenticación.
- 500: Error interno del servidor.

### 3.3. Crear una solicitud de visa
**Método:** POST  
**Ruta:** /solicitudes  
**Objetivo:** Registrar una nueva solicitud de visa.

**Ejemplo de solicitud:**
```json
{
  "nombreCompleto": "Maria Perez",
  "correoElectronico": "maria@example.com",
  "tipoVisa": "Turismo"
}
```

**Respuestas:**
- 201: Solicitud de visa registrada satisfactoriamente.
- 400: Todos los campos son obligatorios.
- 500: Error al registrar la solicitud de visa.

### 3.4. Consultar todas las solicitudes
**Método:** GET  
**Ruta:** /solicitudes  
**Objetivo:** Obtener el listado de solicitudes almacenadas.

**Respuestas:**
- 200: Solicitudes consultadas satisfactoriamente. Incluye total y listado de solicitudes.
- 500: Error al consultar las solicitudes de visa.

### 3.5. Consultar una solicitud por identificador
**Método:** GET  
**Ruta:** /solicitudes/:id  
**Objetivo:** Consultar una solicitud específica mediante su identificador.

**Respuestas:**
- 200: Solicitud consultada satisfactoriamente.
- 400: El identificador de la solicitud no es válido.
- 404: No se encontró la solicitud de visa.
- 500: Error interno al consultar la solicitud.

### 3.6. Actualizar una solicitud
**Método:** PUT  
**Ruta:** /solicitudes/:id  
**Objetivo:** Modificar los datos y el estado de una solicitud.

**Ejemplo de solicitud:**
```json
{
  "nombreCompleto": "Maria Perez",
  "correoElectronico": "maria@example.com",
  "tipoVisa": "Turismo",
  "estado": "En revisión"
}
```

**Estados contemplados:** Pendiente, En revisión, Aprobada y Rechazada.

**Respuestas:**
- 200: Solicitud de visa actualizada satisfactoriamente.
- 400: Identificador o datos inválidos.
- 404: Solicitud no encontrada.
- 500: Error al actualizar la solicitud de visa.

### 3.7. Eliminar una solicitud
**Método:** DELETE  
**Ruta:** /solicitudes/:id  
**Objetivo:** Eliminar una solicitud mediante su identificador.

**Respuestas:**
- 200: Solicitud de visa eliminada satisfactoriamente.
- 400: El identificador de la solicitud no es válido.
- 404: No se encontró la solicitud de visa.
- 500: Error al eliminar la solicitud de visa.

## 4. Ejecución local del proyecto
1. Tener instalados Node.js y MongoDB.
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecutar `npm install` para instalar las dependencias.
4. Comprobar que MongoDB esté en funcionamiento.
5. Ejecutar `node index.js`.
6. Utilizar Postman para enviar solicitudes a `http://localhost:3000`.

## 5. Control de versiones
El proyecto utiliza Git y GitHub para registrar y conservar las versiones del código fuente. El enlace al repositorio correspondiente a esta evidencia se incluye en el archivo de entrega.

## 6. Conclusión
El desarrollo de la API de Visa a Egipto permite aplicar los conocimientos adquiridos en la construcción de servicios web mediante operaciones de registro, autenticación y gestión de solicitudes. La documentación facilita comprender el funcionamiento de cada servicio, sus entradas y sus posibles respuestas, contribuyendo al mantenimiento y evolución del proyecto.
