const url = 'https://api.thecatapi.com/v1/images/search';
let getbtn = document .querySelector('.btn');
let imgTag = document.createElement("img");
let content = document.querySelector(".container");
content.classList.add("cats");
imgTag.classList.add("random_cats");

function randomCat() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText);
      console.log(data);
      imgTag.setAttribute("src", data[0].url);
      content.appendChild(imgTag);
    }
  };
  xhr.send();
}
// randomCat();

getbtn.addEventListener("click", randomCat);
