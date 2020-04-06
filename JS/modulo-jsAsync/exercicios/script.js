// // Exerciício01
// function checaIdade(idade) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (idade >= 18) {
//                 resolve()
//             } else {
//                 reject()
//             }
//         }, 2000)
//     });

// }

// checaIdade(25)
//     .then(function () {
//         console.log("Maior que 18")
//     })
//     .catch(function () {
//         console.log("Menor que 18")
//     });

// Exercício02
axios.get('https://api.github.com/users/brunochj')
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.warn(error)
    });
