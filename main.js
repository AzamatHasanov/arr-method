// let numbers = ["alma", "banan", "portağal"];

// numbers.forEach((element, index) => {
//   console.log(`i: ${index} ${element}`);
// });

let fruitss = ["Alma", "Banan", "Portağal", "Üzüm", "Alma"];
let list = document.getElementById("list");

fruitss.forEach((fruitss) => {
  let li = document.createElement("li");
  li.textContent = fruitss;
  list.appendChild(li);
});
