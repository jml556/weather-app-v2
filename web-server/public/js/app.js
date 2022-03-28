const submitBtn = document.querySelector('button')
const weatherForm = document.querySelector('form')
const messageOne = document.querySelector('.message-1')
const messageTwo = document.querySelector('.message-2')

weatherForm.addEventListener('submit', (e) => {
  const search = document.querySelector('#input').value
  e.preventDefault()
  getData(search)
})

async function getData(value) {
  try {
    messageOne.textContent = 'loading...'
    const res = await fetch(`/weather?address=${value}`);
    const data = await res.json()
    const text = `It currently feels like ${data.res.feelslike} and the temperature is ${data.res.temperature} degrees`
    messageOne.textContent = data.place
    messageTwo.textContent = text


  } catch (e) {
    console.log(e)

  }
}

