const apiKey = "c5c0315e267a13d428c0f2aa4558ab9c"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none"
  } else {
    // Transformar a resposta em JSON antes de acessar `data`
    var data = await response.json()

    // Verificar o tipo de clima e atualizar o ícone
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png"
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png"
    }

    // Atualizar os elementos da interface com os dados
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h"

    // Exibir as informações do clima e esconder o erro
    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
  }
}

// Adicionar o evento de clique no botão de busca
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value)
})