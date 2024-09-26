# Ejercicios de Angular

Realiza los siguientes ejercicios en tu proyecto Angular para practicar diversos conceptos. Cada ejercicio está diseñado para ayudarte a reforzar habilidades específicas.

## Ejercicio 1: Crear un Componente Simple

**Objetivo:** Crear un componente simple que muestre un mensaje de bienvenida.

**Instrucciones:**

1. **Generación del Componente:**
   - Utiliza Angular CLI para generar un nuevo componente llamado `HelloWorld`.

2. **Implementación:**
   - En el archivo de plantilla (`hello-world.component.html`), agrega un párrafo con el texto "¡Hola, mundo! Bienvenido a Angular".

3. **Integración:**
   - Asegúrate de que el componente esté incluido en el módulo principal (`app.module.ts`).
   - Verifica que el componente se muestre correctamente en la aplicación.

## Ejercicio 2: Binding de Datos

**Objetivo:** Implementar el binding de datos para mostrar y actualizar un mensaje en la vista.

**Instrucciones:**

1. **Generación del Componente:**
   - Crea un componente llamado `MessageComponent` usando Angular CLI.

2. **Implementación:**
   - En el archivo de clase (`message.component.ts`), define una propiedad llamada `message` de tipo string e inicialízala con un valor predeterminado.
   - En el archivo de plantilla (`message.component.html`), muestra el valor de la propiedad `message` en un elemento HTML.
   - Agrega un input de texto para permitir al usuario actualizar el valor de `message` mediante el two-way data binding.

## Ejercicio 3: Uso de Servicios

**Objetivo:** Crear un servicio para gestionar y compartir datos entre componentes.

**Instrucciones:**

1. **Generación del Servicio:**
   - Genera un servicio llamado `DataService` usando Angular CLI.

2. **Implementación del Servicio:**
   - En el archivo del servicio (`data.service.ts`), define un método que retorne un mensaje simple y una propiedad para guardar y recuperar datos.

3. **Uso del Servicio:**
   - Crea dos componentes: `SenderComponent` y `ReceiverComponent`.
   - En `SenderComponent`, utiliza el servicio para enviar un mensaje al `ReceiverComponent`.
   - En `ReceiverComponent`, utiliza el servicio para recibir y mostrar el mensaje enviado.

## Ejercicio 4: Rutas y Navegación

**Objetivo:** Implementar un sistema de navegación entre diferentes vistas utilizando rutas.

**Instrucciones:**

1. **Generación de Componentes:**
   - Crea dos componentes: `HomeComponent` y `AboutComponent`.

2. **Configuración de Rutas:**
   - Configura las rutas en el archivo de enrutamiento (`app-routing.module.ts`) para que `HomeComponent` sea la vista por defecto y `AboutComponent` sea accesible mediante la ruta `/about`.

3. **Implementación de Navegación:**
   - En el componente principal (`app.component.html`), agrega enlaces para navegar entre `HomeComponent` y `AboutComponent`.
   - Asegúrate de que el contenido del componente correspondiente se muestre al navegar entre las vistas.

## Ejercicio 5: Formularios Reactivos

**Objetivo:** Crear un formulario reactivo para capturar y validar datos del usuario.

**Instrucciones:**

1. **Generación del Componente:**
   - Genera un nuevo componente llamado `UserFormComponent` usando Angular CLI.

2. **Implementación del Formulario:**
   - En el archivo de clase (`user-form.component.ts`), utiliza el `FormBuilder` para crear un formulario reactivo con los campos: nombre, correo electrónico y edad.
   - Configura validaciones básicas para cada campo (por ejemplo, nombre requerido, correo electrónico válido).

3. **Implementación en la Vista:**
   - En el archivo de plantilla (`user-form.component.html`), muestra el formulario y proporciona mensajes de error en caso de que las validaciones no se cumplan.

---

Realiza estos ejercicios y asegúrate de probar tu aplicación para confirmar que cada funcionalidad esté trabajando como se espera. ¡Buena suerte!

</details>

