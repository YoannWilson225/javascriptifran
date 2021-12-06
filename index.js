/// Variables
/// Constantes et les variables
/// ES6 const firstname, lastname, FIRSTNAME
/**
 * ES5 var firstName, lastname, age, weight, height
 * brithOfDate
 */
/// DATA TYPES
/**
 * Boolean
 * String
 * Number
 * Object
 * undefined
 * Array
*/


/// OPERATIONS DE BASE
/**
 * Addition
 */

// let a, b, c;
// a = 30;
// b = 15;

// c = a + b
// c = a - b
// c = a * b
// c = c / a
// c = a%b

// console.table(c)

/// Chaines de caractères
// let lastName = 'John', firstName = 'Doe';

// let fullName = `${lastName} ${firstName}`;
// fullName = lastName + ' ' + firstName

/// STructures de controls
/**
 * if () {}
 *
 * if {} else {}
 *
 * if {} else if() {} else {}
 *
 * switch () {
 *  case
 * }
 *
 */

// let age = 10
/**
 * > Superieur a
 * < inferieur a
 * >= superieur ou egale
 * <= inferieur ou egale
 * ==
 *
if (age >= 15) {
  alert('vous avez le droit')
} else if (age < 20) {

} else {

}

switch (age) {
  case 10:
    alert('vous etes trop jeune')
    break
  case 15:
    alert('vous etes trop jeune')
    break;
  default:
      alert('vous etes trop jeune')
      break;
}
*/

// console.log(fullName)

/// Boucles
/**
 * for ()
 */
// let notes = [10, 15, 17, 9, 18];

// for (var i = 1; i < 10; i++) {
//   console.log(i)
// }
// let boucle = 0;
// while (boucle < 20) {
//   console.log(boucle);
//   boucle = boucle + 5;
// }


// let age = 20;

// if (age == '20') {
// console.log('ok tu est majeur')
// } else {
//   console.log('vous etes mineur')
// }
// let calcMoyenne = function(notes) {
//   return notes.reduce(function(previousvalue, currentValue){
//     return previousvalue + currentValue
//   }, 0) / notes.length
// }
// let student1 = {
//   lastName: 'John',
//   firstName: 'Doe',
//   isPresent: false,
//   age: 17,
//   notes: [10, 15, 14, 17, 9],
//   moyenne: 0,
// }

// let student2 = {
//   lastName: 'Aline',
//   firstName: 'Doe',
//   isPresent: false,
//   age: 20,
//   notes: [18, 15, 14, 17, 9],
//   moyenne: 0,
// }
// let allStudentArePresent, atLeastOneStudentIsPresent, alertMessage = '';
// /// Operations logic
// allStudentArePresent = student1.isPresent && student2.isPresent;
// atLeastOneStudentIsPresent = student1.isPresent || student2.isPresent;

// let student1IsAdmited = student1.age >= 18 && student1.age <= 25;

/// true && true = true
/// true && false = false
/// false && true = false
/// false && false = false
/// true || true = true
/// true || false = true
/// false || false = false
// console.log(allStudentArePresent, atLeastOneStudentIsPresent, student1IsAdmited)


/// Operations ternaires
// var ternaire = condition ? vrai : faux;
// alertMessage = student1.isPresent ? `${student1.lastName} est present` : `${student1.lastName} est absent`

// alertMessage = student1.age >= 21 ? `${student1.lastName} a ${student1.age} ans donc il est majeur` : `${student1.lastName} a ${student1.age} ans donc il est mineur`;
// console.log(alertMessage)

// console.log(somme(5, 3))
/// Activation du mode Strict
/// Functions
// function somme(number1, number2) {
//   const result = number1 + number2;
//   return result;
// }

// let produit = function(number1, number2) {
//   return number1 * number2
// }

// console.log(produit(3,5))
/// Operations sur les tableaux
// let result = student1.notes.splice(2, 1, 17)
// console.log(student1.notes)
// student1.moyenne = calcMoyenne(student1.notes)
// student2.moyenne = calcMoyenne(student2.notes)

// let fullName = ['john', 'Doe']
// console.log(fullName.join(' '))

// // console.table(student1);
// let word = 'ana';
// let tableau = word.split('')
// console.log(tableau);
// function verifyPalindrome(word) {
//   let wordInverse = word.split('').reverse().join('');
//   const result = word === wordInverse;
//   return result ? `${word} est un palindrome` : `${word} n'est pas un palindrome`
// }
// function calculette(number1, operateur, number2) {
//   let result = 0;
//   /// Faire l'operation en fonction de l'operateur
//   switch(operateur) {
//     case '+':
//       result = number1 + number2;
//       break;
//     case '-':
//       result = number1 - number2;
//       break;
//     case '*':
//       result = number1 * number2;
//       break;
//     case '/':
//       result = number1 / number2;
//       break;
//   }

//   return result;
// }



/// FONCTIONS FLECHES

/// OBJECTS

// function Car() {
//   this.color;
//   this.marque;
// }

// let carInstance = new Car();
// carInstance.color = 'red'
// carInstance.marque = 'MERCEDES'

// let carBlue = new Car();
// carBlue.color = 'blue'
// carBlue.marque = 'BMW'
// carBlue.decapotable = true

// console.log(carInstance)
// console.log(carBlue)

// let car = {
//   color: null,
//   marque: null,
// }


// let carInstance = car;
// carInstance.color = 'red'
// carInstance.marque = 'MERCEDES'
// let carBlue = car;
// carBlue.color = 'blue'
// carBlue.marque = 'BMW'

// class Car {
//   color;
//   marque;

//   constructor(color, marque) {
//     this.color = color;
//     this.marque = marque;
//   }
// }

// class Bus extends Car {
//   recever;

//   constructor(recever) {
//     super('green', 'SOTRA');
//     this.recever = recever;
//   }
// }

// let carInstance = new Car('red', 'MERCEDES');
// let carBlue = new Car('blue', 'BMW');
// let bus = new Bus('John');
// console.log(carInstance)
// console.log(carBlue)
// console.log(bus)

/// OBJECTS METHODES
// class Player {
//   points;

//   constructor() {
//     this.points = 1000;
//   }

//   attaque() {
//     this.points += 10;
//   }

//   defense() {
//     this.points -= 10;
//   }
// }

// let player = new Player();
// player.attaque();
// player.attaque();
// console.log(player)


/// DOM
// let container = document.getElementById('app')
// let childItem = document.createElement('div')
// childItem.setAttribute('class', 'container')
// childItem.setAttribute('id', 'notre-id')
// childItem.style.width = '500px'
// childItem.style.height = '500px'
// childItem.style.backgroundColor = 'red'
// console.log(container.appendChild(childItem));


// function js_click(){
//   let modif = document.getElementById('title');
//   modif.style.color = 'red';
//   modif.style.position ='absolute';
//   modif.style.transform = 'rotate(90deg)'
// }


// function getFormValues(event) {
//   event = window.event
//   event.preventDefault();

//   let firstNameElement = document.getElementById('firstname');
//   let lastNameElement = document.getElementById('lastname');

//   if (firstNameElement.value == '' || lastNameElement.value == '') {
//     alert('Please fill all inputs')
//     return;
//   }


  // const slug = createSlug(`${lastNameElement.value} ${firstNameElement.value}`)



//   const trElement = document.createElement('tr')
//   // trElement.setAttribute('data-slug', slug)
//   let tdElement = document.createElement('td')
//   let tdElement2 = document.createElement('td')
//   let tdElement3 = document.createElement('td')
//   let deleteButton = document.createElement('button')
//   deleteButton.setAttribute('type', 'button')
//   deleteButton.innerText = 'Delete'
//   trElement.append(tdElement3);
//   tdElement3.append(deleteButton);
//   deleteButton.addEventListener('click', function (e) {
//     e.target.parentNode.parentNode.remove()
//   })
//   tdElement.innerText = firstNameElement.value;
//   trElement.append(tdElement);
//   tdElement2.innerText = lastNameElement.value;
//   trElement.append(tdElement2);

//   addRowToTable('table_data', trElement);

//   firstNameElement.value='';
//   lastNameElement.value='';
// }


// function createSlug() {
//   data = data.trim().replaceAll('', '-').toLowerCase();
//   return data
// }


// function addRowToTable(table_data, rowToAdd) {
//   const table = document.getElementById('table_data');
//   const tableBody = table.querySelector('tbody');
//   tableBody.append(rowToAdd)
// }






// var lg = document.getElementById('login-form');
// var sg = document.getElementById('signup-form')
// var users = [];


// if (sg) {
//         document.getElementById('signup-form').addEventListener('submit', (e) => {
//         let name = document.getElementById ("name").value;
//         let email = document.getElementById("email").value;
//         let password = document.getElementById("password").value;
//         let confirm_password = document.getElementById("confirm_password").value;
//         createUser(name,email,password,confirm_password);
//         e.preventDefault();
//     });
// }

// if (lg) {
//         document.getElementById('login-form').addEventListener('submit', (e) => {
//         let email = document.getElementById("email").value;
//         let password = document.getElementById("password").value;
//         loginUser(email,password);
//         e.preventDefault();
//     })
// }

// function createUser(name, email ,password) {
//     var user={
//         name:name,
//         email:email,
//         password:password,
//     }
//     users.push(user);
//     localStorage.setItem('users' , JSON.stringify(users));
//     sg.reset()

//     if (user) {
//         window.location.href = "verif.html"
//     }

// }

// function loginUser(email,password) {
//     users = JSON.parse(localStorage.getItem('users'));
//     const user = users.filter( data => data.email === email && data.password === password);
//     console.log(user);
//     if (user.length === 1) {
//         window.location.href = "Application/Accueil.html"
//     }
//     else{
//         document.getElementById('error').style.display = 'block';
//     }
// }


// function deviner() {
//   let nbrRandom = Math.floor(Math.random() * 100);
//   let message;

//   do {
//     message = prompt("Devine un nombre entre 1 et 99");
//     console.log(message, nbrRandom);

//     if (nbrRandom > message) {
//       console.log("trop petit");
//     } else if (nbrRandom < message) {
//       console.log("trop grand");
//     }
//   }while (message != nbrRandom);
// }

// deviner();



/**
 * Exercice de maison
 */


// Declarer le nombre aléatoire compris entre 1 et 99

let nbrRandom = Math.floor(Math.random() * 100);


let count = 0;
let box1 = document.querySelector('.box-form');
let box2 = document.querySelector('.box-tryagain');
let btn = document.querySelector(".btn");
let show = document.querySelector('.show');
let again = document.querySelector('.again');

btn.onclick = ()=> {
count++;
show.innerHTML = count;
}

// Fonction qui permettra a l'utilisateur de deviner le nombre
function deviner(event) {
  event = window.event
  event.preventDefault();

  let guess = document.getElementById('nbrdevine');
  console.log(nbrRandom, guess.value);

  if (guess.value === '') {
    alert('Le champ est vide entrer un nombre compris entre 1 et 99')
    return;
  }

  if (guess.value > 99 || guess.value < 0 || guess.value == 0) {
    alert("Le nombre rentré ne fait pas partie de l'intervalle donné !");
    return;
  }

  if (nbrRandom < guess.value) {
    alert("Le nombre rentré est supérieur");
  } else if (nbrRandom > guess.value) {
    alert("Le nombre rentré est inférieur");
  }

  if (nbrRandom == guess.value) {
    btn.addEventListener('click', (e) => {
      box1.style.display = 'none';
      box2.style.display = 'block';
    })
  }
}

function tryAgain() {
  again.addEventListener('click', (e) => {
    box1.style.display = 'block';
    box2.style.display = 'none';
  })
}



