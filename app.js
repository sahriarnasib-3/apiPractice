// // // const obj1 = { video: 1 };
// // // const obj2 = { video: 1 };
// // // console.log(obj1 === obj2);

// // const getGrirlFriend=(name= "chokina")=>"name"
// const demoObj = { name: "nasib", age: 20 };
// const demoArray = [20, 44];
// const obj1 = {
//   pro1: demoObj,
//   pro2: demoArray,
//   pro3: function () {
//     return this.pro4;
//   },
//   pro4: "hello nasib",
//   pro5: "hello",
// };
// const result = obj1.pro3();
// console.log(result);
// const text = "sahriar";
// const newText = `${obj1.pro5} ${obj1.pro1.name} how are you your age: ${obj1.pro2[0]}`;
// console.log(newText);

// const getNmbr = () => {
//   return 89;
// };

// console.log(getNmbr());

// const getValue = (data) => {
//   return data / 17;
// };

// console.log(getValue(34));

// const getSumValue = (nmbr1, nmbr2) => {
//   const sumResult1 = nmbr1 + 7;
//   const sumResult2 = nmbr2 + 7;
//   const result = sumResult1 + sumResult2;
//   return result;
// };

// console.log(getSumValue(1, 1));

// const numbers = [14, 40, 30, 12, 23, 45, 54, 556];
// const usingMap = numbers.map((number) => number / 7);
// console.log(usingMap);

// const obj = { name: "nasib", age: 20, roll: 1167 };
// const [newName, newAge, newRoll] = obj;
// console.log(newName);
// const array = [23, 45, 56, 4, 534, 34];

// const {1:balance} = array;
// console.log(balance);
document.getElementById("load-data").addEventListener("click", function () {
  const url = `https://jsonplaceholder.typicode.com/photos`;
  fetch(url)
    .then((response) => response.json())
    .then((datas) => workWithData(datas));
});
const workWithData = (datas) => {
  const section = document.getElementById("first-section");
  const dataContainer = document.getElementById("data-container");
  datas.forEach((data) => {
    console.log(data);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = ` <div class="card h-100">
    <img src="${data.thumbnailUrl}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        ${data.title}
      </p>
    </div>
  </div>`;
    dataContainer.appendChild(div);
  });
};
