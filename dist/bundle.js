/******/ (() => { // webpackBootstrap
var tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
var item = "";
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
btn1.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы выбрали товар 1!");
    item = "1";
    tg.MainButton.show();
  }
});
btn2.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы выбрали товар 2!");
    item = "2";
    tg.MainButton.show();
  }
});
btn3.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы выбрали товар 3!");
    item = "3";
    tg.MainButton.show();
  }
});
btn4.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы выбрали товар 4!");
    item = "4";
    tg.MainButton.show();
  }
});
btn5.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы выбрали товар 5!");
    item = "5";
    tg.MainButton.show();
  }
});
btn6.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы выбрали товар 6!");
    item = "6";
    tg.MainButton.show();
  }
});
Telegram.WebApp.onEvent("mainButtonClicked", function () {
  tg.sendData(item);
});
var usercard = document.getElementById("usercard");
var p = document.createElement("p");
p.innerText = "".concat(tg.initDataUnsafe.user.first_name, "\n").concat(tg.initDataUnsafe.user.last_name);
usercard.appendChild(p);
/******/ })()
;