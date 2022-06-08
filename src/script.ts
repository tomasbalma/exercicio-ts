const q = (el: string) => document.querySelector(el);

const yearInput = q("#yearInput") as HTMLInputElement;
const verifyButton = q("#verifyButton") as HTMLButtonElement;

const mCheckbox = q("#mCheckbox") as HTMLInputElement;
const fCheckbox = q("#fCheckbox") as HTMLInputElement;

const hiddenImage = q(".hiddenImage") as HTMLElement;

const res = q("#res") as HTMLElement;

verifyButton.addEventListener("click", () => {
  const date = new Date();

  let bornYear = date.getFullYear() - Number(yearInput.value);

  let younger: string[];
  let adult: string[];
  let older: string[];

  if (mCheckbox.checked && !fCheckbox.checked) {
    younger = ["um homem jovem. 👶", "images/boy1.jpg"];
    adult = ["um homem adulto. 👨", "images/adultm.jpg"];
    older = ["um homem idoso. 👴", "images/grandpa.webp"];
  } else if (fCheckbox.checked && !mCheckbox.checked) {
    younger = ["uma mulher jovem. 👶", "images/girl1.jpg"];
    adult = ["uma mulher adulta. 👩", "images/adultw.webp"];
    older = ["uma mulher idosa. 👵", "images/grandma.jpg"];
  } else {
    window.alert("Error 419");
    return;
  }

  if (Number(yearInput.value) > date.getFullYear()) {
    alert("Error 420");
    return;
  } else if (Number(yearInput.value) < 1900) {
    alert("Error 421");
    return;
  }

  let boy1 = document.createElement("img");
  let adultm = document.createElement("img");
  let grandpa = document.createElement("img");

  let girl1 = document.createElement("img");
  let adultw = document.createElement("img");
  let grandma = document.createElement("img");

  boy1.src = "images/boy1.jpg";
  adultm.src = "images/adultm.jpg";
  grandpa.src = "images/grandpa.webp";

  girl1.src = "images/girl1.jpg";
  adultw.src = "images/adultw.webp";
  grandma.src = "images/grandma.jpg";

  if (bornYear < 18) {
    res.innerHTML = `<p>Você têm ${bornYear} anos. Você é ${younger[0]}</p>`;
    hiddenImage.setAttribute("src", younger[1]);
  } else if (bornYear >= 18 && bornYear < 64) {
    res.innerHTML = `<p>Você têm ${bornYear} anos. Você é ${adult[0]}</p>`;
    hiddenImage.setAttribute("src", adult[1]);
  } else {
    res.innerHTML = `<p>Você têm ${bornYear} anos. Você é ${older[0]}</p>`;
    hiddenImage.setAttribute("src", older[1]);
  }

  hiddenImage.classList.remove("hiddenImage");
});
