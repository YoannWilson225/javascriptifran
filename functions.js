// Variables
// Constantes et les variables
// constlastName, firsname, FIRSTNAME le camelkase

/**
 * Boolean
 * String
 * Number
 * Object
 * undefined
 * Array
 */



// Opérations logiques

// let student1 = {
//   lastName: 'John',
//   firsname: 'Doe',
//   isPresent: true,
//   age:17,
//   notes: [15, 20, 14, 9, 16],
//   moyenne:0,
// }

// let student2 = {
//   lastName: 'Tom',
//   firsname: 'Doe',
//   isPresent: false,
//   age:20,
//   notes: [10, 20, 15, 10, 12],
//   moyenne:0,
// }

// let calcMoyenne = function(notes) {
//   return notes.reduce(function(preveiousValue, currentValue){
//     return preveiousValue + currentValue
//   }, 0) / student1.notes.length

// }



// let allStudentArePresent,
// atLeastOneStudentPresent; alertMessage = '';
// allStudentArePresent = student1.isPresent && student2.isPresent;
// atLeastOneStudentPresent = student1.isPresent || student2.isPresent;


// let student1IsAdmited = student1.age >= 18 && student2.age <= 25;

// // var ternaire = condition ? vrai : faux;
// alertMessage = student1.isPresent ? `${student1.lastName} est present `:`${student1.lastName} est absent`;
// alert(alertMessage);


// alertMessage = student1.age >= 21 ? `${student.lastName} a ${student1.age} donc il est majeur`:`${student2.lastName} a ${student2.age} donc il est mineur`

// console.log(alertMessage);
// console.log(allStudentArePresent);
// console.log(atLeastOneStudentPresent);

/// true && true = true
/// true && false = false
/// false && false = true
/// true || true = true
/// true || false = true
/// false || false = false

/// function

// somme();
// console.log(somme(5, 3));
// function somme(number1, number2) {
//   let result = number1+number2;
//   return `la somme de ${number1} et ${number2} est égale à ${result}`;
// }

// let produit = function(number1, number2) {
//   return number1 * number2
// }

// console.log(produit(3, 5))


// /// Tbaleau

// student1.notes.forEach(function(note){
//   console.log(note)
// })

// student1.notes = student1.notes.map(function(note){
//   return note + 1
// })

// student1.moyenne = calcMoyenne(student1.notes)
// student2.moyenne = calcMoyenne(student2.notes)


// console.log(student1)

// for (var i=0; i<student1.notes.length; i++){
//   sommes = sommes + student1.notes[i]
// }

// console.table(studen);


// const palindrome = (str)=>{
//   const isPalindrome =str.split('').reverse().join('');
//   console.log(str===isPalindrome)
// }

// palindrome("ana");

// (function(str){
//   let reversed = '';
//   for(let x of str)
//   {
//     reversed = x + reversed;
//   }
//   console.log(str===reversed);
// })("ehui")





/// Calculette

// function calculette(number1, operation, number2) {
//   let result = number1.operation.number2;
//   return result;
// }

// calculette();

// let operation = {
//   somme:function(){number1+number2},
//   soustraction:function(){number1-number2},


//   _uftf
//   produit:function(){number1*number2},
//   division:function(){number1/number2}
// }




// console.log(calculette(15, operation.somme, 25));


// let number = 0;

//    function impaire (number) {
//      let verify = number % 2

//      if (verify == 0) {
//        console.log(true);
//      } else {
//       console.log(false);
//     }

//     return verify;

//    }

//    console.log(impaire(7));


//    /// EXO 3

//    let porCent = {
//     number:0,
//     pourcentage:0
//   };

//   function calcul(number, pourcentage) {
//     let resultant = (number*pourcentage)/100;

//     return resultant
//   }

//   console.log(calcul(100, 50));



//   let Array = ['pomme', 'banane', 'haricot', 'orange'];

//   let trie =  Array.sort();

//   function rangement(Array) {
//     let result = trie.reverse().join(", ");

//     return result;
//   }

//   console.log(rangement(Array));




  /// Exo 1

  // function isTableEnterEqual(ourTable) {
  //   /**
  //    * on verfie d'abord que le type du paramètre
  //    * passé est bien un objet afin d'éviter les erreurs
  //    * lors de l'exécution
  //    */

  //   if(!Array.isArray(ourTable) || (ourTable.length === 0)){
  //     return false;
  //   }

  //   const doublons = ourTable.filter(function(entry){
  //     return entry !== ourTable[0]
  //   });

  //   if (doublons.length > 0){
  //     return false;
  //   }

  //   // for (let i=0; i < ourTable.length; i++) {

  //   // }

  //   return true
  // }


  // // console.log(isTableEnterEqual([15, 12]))

  // console.log(isTableEnterEqual('[10, 10]'))

  let input = 0;
  function myFonction (input) {
    return;
  }

  console.log(myFonction(123))
