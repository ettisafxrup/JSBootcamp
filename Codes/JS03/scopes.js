// ! Scopes
// ^ 1. Global Scope ✅
// ^ 2. Block Scope ✅
// ^ 3. Function Scope ✅

// Global Scope
// const course = "Javascript"
// console.log(course)

// function test() {
//   console.log("from inside of the function")
//   console.log(course)
// }

// {
//   console.log("from inside of the block")
//   console.log(course)
// }

// test()

// Block Scope

// if (true) {
//   let bagha = "Haloom"
//   console.log(bagha)
// }

// function testFunction() {
//   let mini = "Meow"
//   console.log(mini)
// }

// testFunction()

// ! (Let & Const) vs Var

// if (true) {
//   var x = 5
// }

// console.log(x)

// function test() {
//   {
//     {
//       {
//         {
//           {
//             {
//               {
//                 {
//                   {
//                     {
//                       var x = 5
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }

//   console.log(x)
// var ব্লক স্কোপ কাটায় উঠতে পারে,
// }

// test()
// console.log(x)
// var কিন্তু ফাংশনের বাহিরে যাইতে পারে না

// function dipBhai() {
//   {
//     {
//       {
//         {
//           {
//             {
//               {
//                 x = 10
//               }
//             }
//           }
//         }
//       }
//     }
//   }

//   console.log("Inside of function", x)
// }

// dipBhai()
// console.log("After Calling Fucntion", x)

let calc

function test(amount) {
  calc = amount + 200
}

test(1000)
console.log(calc)
