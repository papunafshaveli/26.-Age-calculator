"use strict";

const checkButton = document.querySelector("#ageGenerator");

const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

const resultYear = document.querySelector(".years-number");
const resultMonth = document.querySelector(".months-number");
const resultDay = document.querySelector(".days-number");

const allInputs = document.getElementsByTagName("input");
const allEms = document.getElementsByTagName("em");
const allLabels = document.getElementsByTagName("label");

const firstEm = document.querySelector(".one");
const secondEm = document.querySelector(".two");
const thirdEm = document.querySelector(".three");

checkButton.addEventListener("mousedown", ageCalculate);

function ageCalculate() {
  for (let i = 0; i < allInputs.length; i++) {
    allLabels[i].style.color = "hsl(0, 1%, 44%)";
    allEms[i].textContent = "";
  }
  const today = new Date();
  const userDate = new Date(
    Number(yearInput.value),
    Number(monthInput.value) - 1,
    Number(dayInput.value)
  );

  const timeDifference = today - userDate;

  const yearsDiff = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
  const monthsDiff = Math.floor(
    (timeDifference % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.44 * 24 * 60 * 60 * 1000)
  );
  const daysDiff = Math.floor(
    (timeDifference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );

  resultYear.textContent = yearsDiff;
  resultMonth.textContent = monthsDiff;
  resultDay.textContent = daysDiff;

  errorMessages();

  function errorMessages() {
    for (let i = 0; i < allInputs.length; i++) {
      if (allInputs[i].value == "") {
        allLabels[i].style.color = "hsl(0, 100%, 67%)";
        allEms[i].textContent = "The field is required";
        resultYear.textContent = "- -";
        resultMonth.textContent = "- -";
        resultDay.textContent = "- -";
      }
    }

    if (Number(dayInput.value) > 31 || Number(dayInput.value) < 0) {
      firstEm.textContent = "Must be a valid day";
      allLabels[0].style.color = "hsl(0, 100%, 67%)";
      resultYear.textContent = "- -";
      resultMonth.textContent = "- -";
      resultDay.textContent = "- -";
    }

    if (Number(monthInput.value) > 12 || Number(monthInput.value) < 0) {
      secondEm.textContent = "Must be a valid month";
      allLabels[1].style.color = "hsl(0, 100%, 67%)";
      resultYear.textContent = "- -";
      resultMonth.textContent = "- -";
      resultDay.textContent = "- -";
    }

    if (Number(yearInput.value) > 2500 || Number(yearInput.value) < 1500) {
      thirdEm.textContent = "Must be a valid year";
      allLabels[2].style.color = "hsl(0, 100%, 67%)";
      resultYear.textContent = "- -";
      resultMonth.textContent = "- -";
      resultDay.textContent = "- -";
    }
  }
}
