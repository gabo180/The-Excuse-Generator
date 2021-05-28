/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
};

let excuseGenerator = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "took", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car", "my computer"];
  let when = [
    "before the class",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndx = Math.floor(Math.random() * 4); //can use arrey.length like Math.floor(Math.random() * who.length)
  let actionIndx = Math.floor(Math.random() * 4);
  let whatIndx = Math.floor(Math.random() * 4);
  let whenIndx = Math.floor(Math.random() * 4);

  return (
    who[whoIndx] +
    " " +
    action[actionIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx]
  );
};
