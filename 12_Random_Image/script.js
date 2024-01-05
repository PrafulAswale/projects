const baseURL = "https://source.unsplash.com/all/300x300";

// this url gives an image. Use this and NO API calls
let imgContent = document.querySelector(".content");
let imgTag = document.createElement("img");
imgTag.setAttribute("src", baseURL);
imgContent.appendChild(imgTag);

let btn = document.querySelector("button").addEventListener("click", () => {
  window.location.reload();
});
