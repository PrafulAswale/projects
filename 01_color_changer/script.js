let allColor = document.querySelectorAll('div');
console.log(allColor);

const colorClicked = (e) => {
  document.body.setAttribute("id", e.target.id);
  console.log(e.target.id);
};

allColor.forEach((div) => {
  div.addEventListener("click", colorClicked);
});
