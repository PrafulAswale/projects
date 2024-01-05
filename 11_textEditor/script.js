let inputText = document.getElementById("input-field");
let outputText = document.getElementById("output-field");
let btns = document.querySelectorAll(".btns-container");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    outputText.innerText = inputText.value;
    switch (e.target.className) {
      case "btn uppercase":
        outputText.classList.remove("capitalize");
        outputText.classList.remove("lowercase");
        outputText.classList.add("uppercase");
        break;
      case "btn lowercase":
        outputText.classList.remove("capitalize");
        outputText.classList.remove("uppercase");
        outputText.classList.add("lowercase");
        break;
      case "btn capitalize":
        outputText.classList.remove("uppercase");
        outputText.classList.remove("lowercase");
        outputText.classList.add("capitalize");
        break;
      case "btn bold":
        outputText.classList.add("bold");
        break;
      case "btn italic":
        outputText.classList.add("italic");
        break;
      case "btn underline":
        outputText.classList.add("underline");
        break;

      default:
        break;
    }
  });
});
