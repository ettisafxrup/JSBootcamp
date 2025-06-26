// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName
//   },
// }
// // Values
// console.log(person.firstName)

const myObj = {
  patro: "Tahsin",
  patri: "Madhobi",
  marriage: function () {
    return this.patro + " weds " + this.patri
  },
}

console.log(myObj.marriage())
