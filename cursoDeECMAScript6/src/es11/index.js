// const button = document.getElementById("btn");

// button.addEventListener("click", async () => {
//   //Dynamic Import
//   const module = await import("./file.js");
//   module.hello();
// });


const aBigNumber = 9007199254740911n;

const anotherBigNumber = BigInt(9007199254740911n);

console.log(aBigNumber);
console.log(anotherBigNumber);

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve 1"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 2"));

//With .allSettled() waits for every promise to finished doesn't matter if one is resolve or reject
Promise.allSettled([promise1, promise2, promise3])
  .then(response => console.log(response));

//Global this
console.log(globalThis);
//console.log(window);

// Nullish coalescing operator (??). Checks if the value is null
const fooo = null ?? 'default string';
console.log(fooo);

//Optional chaining (?) Search if the value has a value if it doesn't have one it changes to undefined. This prevents my application tobe broken
const user = {};

console.log(user?.profile?.email);
if (user?.profile?.email) {
  console.log("email");
}else{
  console.log("fail");
}