
//Guard para validar si el usuario está autenticado. Se puede usar en distintas rutas y no de forma global.


// const authGuard = async (to, from, next) => {

//     console.log("Auth guard")

//     const authorized = await canAccess() //Peticion asincrona
//     console.log(authorized)

//     if (authorized) {
//         next();
//     }
//     else {
//         next({ name: "dbz-about" })
//     }
// }

// const canAccess = () => {
//     //Devuelve una promesa
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

const authGuard = async (to, from, next) => {

    return new Promise(() => {

        const random = Math.random() * 100
        if (random > 50) {
            console.log("pasa", random)
            next();
        } else {
            console.log("Bloqueado por el Auth Guard", random)
            next({ name: "dbz-about" })
        }

    })

}


export default authGuard