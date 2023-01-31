/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getArrayMutations(arr, perms = [], len = arr.length) {
  if (len === 1) perms.push(arr.slice(0));

  for (let i = 0; i < len; i++) {
    getArrayMutations(arr, perms, len - 1);

    len % 2 // parity dependent adjacent elements swap
      ? ([arr[0], arr[len - 1]] = [arr[len - 1], arr[0]])
      : ([arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]);
  }

  return perms;
}

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  console.log(getArrayPermutations(pronoun, adj));
};
