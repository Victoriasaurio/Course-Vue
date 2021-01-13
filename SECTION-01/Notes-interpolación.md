### Interpolación en vue.
Es necesario utlizar {{}}, para indicar que vamor a interpolar algo. Por ejemplo: para la interpolación de un mensaje basta con definirlo {{ mensaje }} y para interpolar un método o función debemos ponerlo como {{ mostrarMensaje() }}.

Para poder hacer referencia a un mensaje dentro de una función debemos utilizar 'this.mensaje'.

*****
'el:' hace referencia al elemnto del DOM ql que se hace referencia pueder ser un ID o una CLASE. Si es una clase se hace referencia 'el: '.vue'' nombre de la clase. O puede ser 'el: '#vue'' nombre del ID.

### Enlace de datos de propiedad.
Enlace utilizando la directiva sobre la propiedad: **v-bind**
:src="src" - También es correcto.

### Ganchos de ciclos de vida.
()[]

v-on:click - Evento
v-on:keyup - Evento - Saber si alguien presionó una tecla.

$ - Hace referencia a algo que no creamos sino que es propio de Vue.

*****
### Computed Properties.
Actualizadas automáticamente siempre que se modifiquen automáticamente.

### Enlace de datos doble.
v-model - Podemos ver los cambios reflejados en tiempo real.

### Enlace de datos.
Va del modelo a la vista. JavaScript a HTML.
O de la vista al modelo. Por ejemplo un input.