const button2 = document.querySelector('#buttonforBen')
const kilotextbox = document.querySelector('#benput')

button.addEventListener('click', () => {
  //button2.style.color = 'green';
  //document.body.style.backgroundColor='yellow';
  alert(kilotextbox.value + " pounds is ~" + (kilotextbox.value*0.453592) + " kilos!")
})