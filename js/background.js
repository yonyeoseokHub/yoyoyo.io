const images = ["0.jpg", "1.jpg", "2.jpg"];

const chooseImage = images[Math.floor(Math.random() * images.length)];

console.log(chooseImage);

// JS에서 뭔가를 만들어서 그걸 html에 추가하는 것은 해본적이 없다. 
// 즉, 항상 html에서 먼저 작성하고 JS에서 사용해서, html을 다뤄왔다. 

const bgImage = document.createElement("img");
// console.log(bgImage);
bgImage.src = `img/${chooseImage}`;
console.log(bgImage);


//appendChild()는 body에 html을 추가할 거다. 
document.body.appendChild(bgImage);