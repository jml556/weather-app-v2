async function getData() {
  try {
    const res = await fetch("http://localhost:3000/weather?address=towson");
    const data = await res.json()
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}

getData()
