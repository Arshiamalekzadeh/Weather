function openNav() {
  const sideBar = document.getElementById("mySidebar");
  if (!sideBar.style) return
  sideBar.style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}
const apikey = "c4afbb627e323d7d1dce1d957fb40a57";
const defult = `https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=${apikey}&units=metric`;
const timedfult = `https://api.ipgeolocation.io/timezone?apiKey=885894ae95de45e499969ea15fbf1745&location=tehran`;
const form = document.querySelector("form");
const input = document.querySelector("#mySidebar input");
fetch(defult).then(response => response.json()).then(data => {
  const {
    name,
    sys,
    weather,
    main,
    wind
  } = data;
  document.querySelector(".icon").src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
  document.querySelector("#name").innerHTML = `${name}`;
  document.querySelector(".texxt").innerHTML = `${weather[0].description}`;
  document.querySelector("#Humidity").innerHTML = `${main.humidity}%`;
  document.querySelector("#max-temp").innerHTML = `${main.temp_max}&#176;`;
  document.querySelector("#min-temp").innerHTML = `${main.temp_min}&#176;`;
  document.querySelector("#pressure").innerHTML = `${main.pressure}`;
  document.querySelector("#Windspeed").innerHTML = `${wind.speed}`;
  fetch(timedfult).then(response => response.json().then(data => {
    const {
      date,
      time_12
    } = data;
    document.getElementById("date").innerHTML = `${date}`;
    document.getElementById("time").innerHTML = `${time_12}`;
  }))
})
form.addEventListener("submit", e => {
  e.preventDefault();
  let userinput = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${userinput}&appid=${apikey}&units=metric`;
  const urll = `https://api.ipgeolocation.io/timezone?apiKey=885894ae95de45e499969ea15fbf1745&location=${userinput}`;
  fetch(url).then(response => response.json())
    .then(data => {
      const {
        name,
        sys,
        weather,
        main,
        wind
      } = data;
      document.querySelector(".icon").src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
      document.querySelector("#name").innerHTML = `${name}`;
      document.querySelector(".texxt").innerHTML = `${weather[0].description}`;
      document.querySelector("#Humidity").innerHTML = `${main.humidity}%`;
      document.querySelector("#max-temp").innerHTML = `${main.temp_max}&#176;`;
      document.querySelector("#min-temp").innerHTML = `${main.temp_min}&#176;`;
      document.querySelector("#pressure").innerHTML = `${main.pressure}`;
      document.querySelector("#Windspeed").innerHTML = `${wind.speed}`;
      document.body.style.background = `url(https://source.unsplash.com/1600x900/?${userinput})`
    })
  fetch(urll).then(response => response.json().then(data => {
    const {
      date,
      time_12
    } = data;
    document.getElementById("date").innerHTML = `${date}`;
    document.getElementById("time").innerHTML = `${time_12}`;
  }))
})
const list = document.querySelector("#btn1");
list.addEventListener("click", function () {
  const view = document.querySelector("#view");
  view.classList.remove("show-weather");
  view.classList.add("show-weather-c");
  document.querySelector(".info-show").style.marginBotton = "10px";
})
const listt = document.querySelector("#btn2");
listt.addEventListener("click", function () {
  const view = document.querySelector("#view");
  view.classList.remove(".show-weather-c");
  view.classList.add("show-weather");
})