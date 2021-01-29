import InicioComponent from './components/inicioComponent.vue'
//import UsuariosComponent from './components/usuarios.vue'
import InfoUsuario from './components/infoUsuario.vue'

// lazy loading - Se carga UsuariosComponent cuando se necesite.
const UsuariosComponent = resolve => {
    require.ensure(['./components/usuarios.vue'], () => {
       resolve(require('./components/usuarios.vue')) 
    })
}

export const rutas = [
    { 
        path: '',
        component: InicioComponent
    },
    { 
        path: '/usuarios',
        component: UsuariosComponent,
        name: 'usuario' 
    },
    { 
        path: ':id', 
        component: InfoUsuario, 
        name: 'infoUsuario' 
    },
    { 
        path: '/users', 
        redirect: '/usuarios' // Redireccionamiento 
    },
    { 
        path: '*', 
        redirect: '/' // Redireccionamiento cuando el usuario escriba cualquier cosa.
    }
]

/*  Forma de utilizar las sub-rutas poniendo la información en la misma pantalla.
    { 
        path: '/usuarios',
        component: UsuariosComponent, children: [ // Sub-ruta
            { path: ':id', component: InfoUsuario, name: 'infoUsuario' }
        ]
    }
*/