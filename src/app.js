const feedDisplay = document.querySelector('#feed');
console.log("start");

fetch('http://localhost:8000/results')
    .then(response => response.json())
    .then(data => {
        data.forEach(article => {
            const articleItem = `<div><h3>` + article.title + `</h3><p>` + `<a href=` + article.url + ` target="_blank">` + article.url + `</a>` + `</p></div>`;
            feedDisplay.insertAdjacentHTML("beforeend", articleItem);
        })
    })