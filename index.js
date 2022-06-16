let choice = document.getElementById("choice");
let computer = document.getElementById("computer");
let result = document.getElementById("result");

let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

deneme = window.prompt("Please enter your choice!");

if(deneme == "Rock" || deneme == "Paper" || deneme == "Scissors"){
  choice.innerHTML = deneme;

  let num = Math.random();
  num = num * 3;
  num = Math.floor(num);

  if(num == 0){
    computer.innerHTML = rock;
    if (choice.innerHTML == "Rock" && computer.innerHTML == "Scissors" ||
    choice.innerHTML == "Paper" && computer.innerHTML == "Rock" ||
    choice.innerHTML == "Scissors" && computer.innerHTML == "Paper")
    {
      setTimeout(() => {  result.innerHTML = "You Win"; }, 2000);
      setTimeout(() => {  location.reload(); }, 4000);
    }
    else if(choice.innerHTML == computer.innerHTML){
      setTimeout(() => {  result.innerHTML = "Tie"; }, 2000);
      setTimeout(() => {  location.reload(); }, 4000);
    }
    else {
      setTimeout(() => {  result.innerHTML = "Computer Win"; }, 2000);
      setTimeout(() => {  location.reload(); }, 4000);
    }
  }
  else if(num == 1){
    computer.innerHTML = paper;
    if (choice.innerHTML == "Rock" && computer.innerHTML == "Scissors" ||
    choice.innerHTML == "Paper" && computer.innerHTML == "Rock" ||
    choice.innerHTML == "Scissors" && computer.innerHTML == "Paper")
    {
      setTimeout(() => {  result.innerHTML = "You Win"; }, 2000);
      setTimeout(() => {  location.reload(); }, 4000);
    }
    else if(choice.innerHTML == computer.innerHTML){
      setTimeout(() => {  result.innerHTML = "Tie"; }, 2000);
      setTimeout(() => {  location.reload(); }, 4000);
    }
    else {
      setTimeout(() => {  result.innerHTML = "Computer Win"; }, 2000);
      setTimeout(() => {  location.reload(); }, 4000);
    }
  }
  else{
    computer.innerHTML = scissors;
    if (choice.innerHTML == "Rock" && computer.innerHTML == "Scissors" ||
    choice.innerHTML == "Paper" && computer.innerHTML == "Rock" ||
    choice.innerHTML == "Scissors" && computer.innerHTML == "Paper")
    {
      setTimeout(() => {  result.innerHTML = "You Win"; }, 2000);
      setTimeout(() => {  location.reload(); }, 4000);
    }
    else if(choice.innerHTML == computer.innerHTML){
      setTimeout(() => {  result.innerHTML = "Tie"; }, 2000);
      setTimeout(() => {  location.reload(); }, 4000);
    }
    else {
      setTimeout(() => {  result.innerHTML = "Computer Win"; }, 2000);
      setTimeout(() => {  location.reload(); }, 4000);
    }
  }
}
else {
  alert("Please enter correct!")
  location.reload();
}



