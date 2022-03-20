const clock = document.querySelector("#clock");

function getClock(){
    // const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    // clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    
    const date = new Date();
    // getHours()는 number이기 때문에, padStart를 쓸 수 없다. number -> text 변환법
    const hours = date.getHours().toString().padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");  // String() 범위 조심
    const seconds = date.getSeconds().toString().padStart(2,"0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`
}


// website가 load되자마자 getClock()을 실행하면, 
// 새로고침을 해도 1초의 텀없이 바로 실행된다. 
getClock();


// 매초마다 업데이트 시켜줄 것
setInterval(getClock, 1000);




