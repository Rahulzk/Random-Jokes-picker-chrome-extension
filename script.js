fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(jokeData =>{
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById('jokeElements');
    jokeElement.innerHTML = jokeText;
})
// fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=c3f58b8be2741673f827745d446085d4')
// .then(data => {
//      console.log(JSON.parse(data));
//     // const jokeElement = document.getElementById('jokeElements');
//     // jokeElement.innerHTML = data.wheather[0].id;
// })
// // .then(jokeData =>{
//     // const jokeText = jokeData.attachments[0].text;
    
// // }
