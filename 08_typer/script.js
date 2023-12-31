const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");
const words = ["Love", "Jhakaas", "mast", "dhinchak", "Weird"];

async function type(word, i = 0) {
  typedTextSpan.textContent += word[i];

  if (i === word.length - 1) {
    return;
  }
  setTimeout(() => type(word, i + 1), 70);
}

async function erase() {
  let word = typedTextSpan.textContent;
  if (word.length === 0) return;

  typedTextSpan.textContent = word.substring(0, word.length - 1);

  setTimeout(() => erase(), 70);
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startType(i) {
  await type(words[i]);
  await waitForMs(1000);
  await erase();
  if (i === words.length - 1) return;
  setTimeout(() => startType(i + 1), 1000);
}

startType(0);
