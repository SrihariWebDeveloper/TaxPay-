function calculateTax(){
  const grossIncome = parseFloat(document.getElementById('gross-annual').value);
  const extraIncome = parseFloat(document.getElementById('extra-income').value || 0);
  const deductions = parseFloat(document.getElementById('deduction').value || 0);
  const ageGroup = document.getElementById('age').value;
  
  const taxableIncome = grossIncome + extraIncome - deductions;
  if (ageGroup == 1) {
    const taxRate = 0.3;
    const taxAmount = taxableIncome * taxRate;
    let rateTax = document.getElementById('value-deduction').innerHTML = taxAmount;
  } else if (ageGroup == 2) {
    const taxRate = 0.4;
    const taxAmount = taxableIncome * taxRate;
    let rateTax = document.getElementById('value-deduction').innerHTML = taxAmount;
  } else if (ageGroup == 3) {
    const taxRate = 0.1;
    const taxAmount = taxableIncome * taxRate;
    let rateTax = document.getElementById('value-deduction').innerHTML = taxAmount;
  }
  let pop = document.getElementById('popup').style.display = 'block';
  
  numberValid();
}
let popup = document.getElementById('popup');
let closeBtn = document.getElementById('close');
closeBtn.onclick = function() {
  popup.style.display = 'none'
} 

//validations

const grossIncome = document.getElementById('gross-annual');
const extraIncome = document.getElementById('extra-income');
const deductions = document.getElementById('deduction');
const ageGroup = document.getElementById('age');

let required = document.getElementById('warning');
let required2 = document.getElementById('warning2');
let required3 = document.getElementById('warning3');
let required4 = document.getElementById('warning4');

function numberValid(){
  if (grossIncome.value == '') {
    required.style.display = 'block';
    popup.style.display = 'none'
  }else if(extraIncome.value == ''){
    required2.style.display = 'block';
    popup.style.display = 'none'
  }else if (ageGroup.value == '') {
    required3.style.display = 'block';
    popup.style.display = 'none'
  }else if (deductions.value == '' ) {
    required4.style.display = 'block';
    popup.style.display = 'none'
  }else{
    required.style.display = 'none';
    required2.style.display = 'none';
    required3.style.display = 'none';
    required4.style.display = 'none';
  }
}