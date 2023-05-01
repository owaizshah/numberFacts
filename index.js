const factsEl = document.querySelector(".facts");
const inputEl = document.querySelector(".input-num");

const callFacts = async function () {
  try {
    const res = await fetch(`http://numbersapi.com/${inputEl.value}?json`);

    if (res.status == 200) {
      const { text } = await res.json();
      console.log(text);
      factsEl.textContent = text;
    }
  } catch (err) {
    console.error(err);
  }
};

inputEl.addEventListener("input", callFacts);
