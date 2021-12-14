let numeroDeAlunos = 10;

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
   //console.log(contador)

   if(contador == 0){
       console.log("O número atual é zero")
   }else if(contador % 2 == 0){
       console.log("O número " + contador + " é Par")
   }else{
       console.log(`O número ${contador} é Impar`)
   }
    
}
   

//Outras formas de fazer o mesmo código 

// let numeroDeAlunos = 10;

// let contador = 0;

// while(contador <= numeroDeAlunos) {
//     //console.log(contador)

//     if(contador == ){
//         console.log("O número atual  é zero")
//         }else if(contador % 2 == 0){
//             console.log("o número " + contador + " é Par")
//         }else{
//             console.log(`O número ${contador} é Impar`)
//         }
//         contador++;
// }


// Verificando outra função para "for"

// let nomeDeAluno = ["Marcel", "Franklin", "Rita", "Afrânio"]

// for (let nome of nomeDeAluno) {
//     console.log(`Esta pessoa se chama ${nome}`)
// }