const url = 'https://api.thecatapi.com/v1/images/search';
let getbtn = document .querySelector('.btn');

function randomCat(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if(xhr.readyState === 4){
            const data = JSON.parse(this.responseText)
            console.log(data)
        }
    }
}
randomCat();
