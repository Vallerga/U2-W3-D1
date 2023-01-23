const name1 = document.querySelector("#name1");
const surname = document.getElementById("surname");
const age = document.getElementById("age");
const button = document.getElementById("button");
let nodeToAttach = document.querySelector("tbody");

// const readValue = (ev) => console.log(name1.value);
// const addRow = (par1, par2, par3) => {
//   console.log(name1.value);
//     const newRow2 = document.createElement("tr");
//     const tr = document.createElement("tr");
//     const td1 = document.createElement("td");
//     td1.innerText = name1.value;
//     const td2 = document.createElement("td");
//     td2.innerText = surname.value;
//     const td3 = document.createElement("td");
//     td3.innerText = age.value;
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     newRow2.appendChild(tr);
//     let AddRowTbody = document.querySelector("tbody");
//     AddRowTbody.appendChild(newRow2);
// };

const Usertable = function () {
  this.name = "";
  this.surname = "";
  this.age = "";
};

let newUser = new Usertable();

const addRow = (par1, par2, par3) => {
    newUser.name = par1;
    newUser.surname = par2;
    newUser.age = par3;
    console.log(newUser);
  const newRow2 = document.createElement("tr");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.innerText = newUser.name.value;
  const td2 = document.createElement("td");
  td2.innerText = newUser.surname.value;
  const td3 = document.createElement("td");
  td3.innerText = newUser.age.value;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  newRow2.appendChild(tr);
  let AddRowTbody = document.querySelector("tbody");
  AddRowTbody.appendChild(newRow2);
};
