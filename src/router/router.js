import { createRouter, createWebHashHistory } from 'vue-router'
import authGuard from './guards/auth-guard'

//Components
//import AboutPage from '@/modules/pokemon/pages/AboutPage.vue'
//import ListPage from '@/modules/pokemon/pages/ListPage.vue'
//import PokemonPage from '@/modules/pokemon/pages/PokemonPage.vue'
//import NoPageFound from '@/modules/shared/pages/NoPageFound.vue'

const routes = [

    //MAIN LAYOUT
    {
        //Path de redireccion al home
        path: '/',
        redirect: '/home',
    },

    {
        path: '/home',
        name: 'home',
        component: () => {
            //lazyload del componente
            return import(/* webpackChunkName: "HomePage"*/ '@/modules/shared/pages/HomePage.vue')
        }
    },

    //POKEMON LAYOUT
    {
        path: '/pokemon',
        name: 'pokemon',
        beforeEnter: [authGuard],

        component: () => {
            //lazyload del componente
            return import(/* webpackChunkName: "ListPage"*/ '@/modules/pokemon/layouts/PokemonLayout.vue')
        },
        children: [

            {
                path: 'home',
                name: 'pokemon-home',
                beforeEnter: [authGuard],
                component: () => {
                    //lazyload del componente
                    return import(/* webpackChunkName: "ListPage"*/ '@/modules/pokemon/pages/ListPage.vue')
                }
            },
            {
                path: 'pokemonid/:id',
                name: "pokemon-id",
                beforeEnter: [authGuard],
                component: () => {
                    //lazyload del componente
                    return import(/* webpackChunkName: "PokemonPage"*/ '@/modules/pokemon/pages/PokemonPage.vue')
                },
                //TOMAR SEGMENTOS DE URL COMO PROPS PARA EL COMPONENTE. Ejemplo pokemonId
                props: (route) => {
                    console.log(route)
                    const id = Number(route.params.id) //Parceamos a number

                    return {

                        //debe de estar definida la prop en el componente
                        //validamos que es un numero y retornamos
                        //lo que retornamos sera enviado al componente como una prop
                        pokemonId: isNaN(id) ? -1 : id

                    }
                }
            },
            {
                path: 'about',
                name: 'pokemon-about',
                beforeEnter: [authGuard],
                component: () => {
                    //lazyload del componente
                    return import(/* webpackChunkName: "AboutPage"*/ '@/modules/pokemon/pages/AboutPage.vue')
                }
            },
            {
                //Path de redireccion al pokemon home
                path: '',
                redirect: { name: "pokemon-about" },
            },
        ],
    },

    //DBZ LAYOUT
    {
        path: '/dbz',
        name: 'dbz',
        component: () => {
            //lazyload del componente
            return import(/* webpackChunkName: "DbzLayout"*/ '@/modules/dbz/layouts/DbzLayout.vue')
        },
        children: [

            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => {
                    //lazyload del componente
                    return import(/* webpackChunkName: "dbz-CharactersPage"*/ '@/modules/dbz/pages/CharactersPage.vue')
                }
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => {
                    //lazyload del componente
                    return import(/* webpackChunkName: "dbz-AboutPage"*/ '@/modules/dbz/pages/AboutPage.vue')
                }
            },
            {
                //Path de redireccion al pokemon home
                path: '',
                redirect: { name: "dbz-about" },
            },
        ],
    },

    //404 RUTE
    {
        path: '/:patchMatch(.*)*',
        component: () => {
            //lazyload del componente
            return import(/* webpackChunkName: "NoFoundPage"*/ '@/modules/shared/pages/NoPageFound.vue')
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})


//Guard Global - Sincrono

// router.beforeEach((to, from, next) => {
//     console.log({ to, from, next })

//     //Validamos
//     const random = Math.random() * 100
//     if (random > 50) {
//         console.log("pasa", random)
//         next()
//     } else {
//         console.log("No pasa", random)
//         next({ name: "dbz-about" })
//     }

// })


//Guard Global - Asincrono

// const canAccess = () => {
//     return new Promise(resolve => {
//         const random = Math.random() * 100
//         if (random > 50) {
//             console.log("pasa", random)
//             resolve(true)
//         } else {
//             console.log("No pasa", random)
//             resolve(false)
//         }
//     })
// }

// router.beforeEach(async (to, from, next) => {

//     const authorized = await canAccess();
//     console.log(authorized)

//     if (authorized) {
//         next();
//     }
//     else {
//         next({ name: "dbz-about" })
//     }

// })

export default router