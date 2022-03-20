


const quotes = [
    {
        quote: "The real world is much smaller than the imaginary.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "An artist is somebody who produces things that people don't need to have.",
        author: "Andy Warhol",
    },
    {
        quote: "People always call it luck when you've acted more sensibly than they have.",
        author: "Anne Tyler",
    },
    {
        quote: "War is a series of catastrophes that results in a victory.",
        author: "Georges Clemenceau",
    },
    {
        quote: "In silence man can most readily preserve his integrity.",
        author: "Meister Eckhart",
    },
    {
        quote: "Leisure is the mother of philosophy.",
        author: "Thomas Hobbes",
    },
    {
        quote: "As soon as you trust yourself, you will know how to live.",
        author: "Johann Wolfgang von Goethe",
    },
    {
        quote: "He that is down needs fear no fall, He that is low no pride.",
        author: "John Bunyan",
    },
    {
        quote: "Patience is the best remedy for every trouble.",
        author: "Titus Maccius Plautus",
    },
    {
        quote: "The covers of this book are too far apart.",
        author: "Ambrose Bierce",
    },

];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


Math.floor(Math.random * 10);


// console.log(quotes[Math.floor(Math.random() * quotes.length)]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// 10이 하드코딩이 되어 있다. 그 말은 딱 10개의 명언들을 가지고 있을 때만 동작한다.
// Array의 길이를 알아내자. .length


quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;