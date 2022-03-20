const API_KEY = "bfaaa39a57e8958a9ec9cb3730224721";

// JS가 GeolocationPosition object를 준다. -> 유저의 유치를 알려준다. 
function onGeoOk(position){
    // console.log(position)
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => { // url을 클릭할 필요없이, JS가 대신 클릭해줬다. 
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
    // console.log(data.name, data.weather[0].main)
        city.innerText = data.name;
        weather.innerText =  `${data.weather[0].main} / ${data.main.temp}`;

        // fetch는 promise이고, promise는 당장 뭔가 일어나지 않고 시간이 걸린 뒤에 일어난다는 의미
    // 서버가 응답하는데 5분이 걸린다고 가정하면, 그럼 서버의 응답을 기다려야한다. 
    // 그때, then을 사용해야 한다. 
    }); 
}

function onGeoError(){
     alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// getCurrentPosition()은 두개의 인자를 갖는다.
// 첫째는 모든게 잘 되었을 때 실행 될 함수
// 둘째는 에러가 발생했을 때, 실행 될 함수 


// 두번째 할 일은 위도와 경도를 장소로 바꿔줄 서비스를 이용해야 한다. 
// openweathermap.org 사이트로 이동하자. 