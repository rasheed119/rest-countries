var container = document.createElement("div");
container.setAttribute("class","container");


var row = document.createElement("div");
row.classList.add("row");


container.append(row);
document.body.append(container);




async function foo(){
  let result =await fetch("https://restcountries.com/v2/all");
  let result1 = await result.json();
  for(var i = 0; i < result1.length ; i++)
{
    row.innerHTML +=
    `<div class = "col-md-4 col-sm-12">
    <div class="card text-center mb-3">
  <div class="card-header">
    ${result1[i].name}
  </div>
  <div class="card-body">
  <img src="${result1[i].flag}" class="card-img-top mb-3" alt="..." width="100" height="150">
    <p class="card-text">Capital : ${result1[i].capital}</p>
    <p class="card-text">Region : ${result1[i].region}</p>
    <p class="card-text">Country Code : ${result1[i].alpha3Code}</p>
    <button class="btn btn-primary" onclick="getdata(${result1[i].latlng[0]},${result1[i].latlng[1]})">Click for Weather</button>
  </div>
  </div>
    `;
  }
}


async function getdata(lat,long) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c180f058337d29443bce4c8fbd3a54f6`);
    const data = await response.json();
    const temperature = data.main.temp;
    alert(`The temperature is ${temperature}°C`);
  } catch (error) {
    console.error(error);
    alert("Failed to retrieve weather data");
  }
}
foo();