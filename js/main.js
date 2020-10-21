async function getJoke(){
    let atbilde = await fetch("https://api.chucknorris.io/jokes/random")
    let joksJson = await atbilde.json()

    let paragrafs = document.getElementById('joke')
    paragrafs.innerHTML = joksJson.value
}