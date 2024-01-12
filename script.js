const heightEl = document.getElementById("height")
const weightEl = document.getElementById("weight")
const btnEl = document.getElementById("btn")
const bmiEl = document.getElementById("bmi")
const conditionEl = document.getElementById("condition")

function computeBMI()
{
  const height = heightEl.value/100
  const bmi = weightEl.value / (height * height)
  bmiEl.innerText = bmi.toFixed(2)

  if (bmi < 18.5) {conditionEl.innerText = "Underweight"}

  else if (bmi < 24.9) {conditionEl.innerText = "Normal"}
  else if (bmi < 29.9) {conditionEl.innerText = "Overweight"}
  else conditionEl.innerText = "Obesity"
  
  
}