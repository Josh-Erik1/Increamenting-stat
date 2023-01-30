const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
  counterEl.innerText = "0";
  increamentCounter();
  function increamentCounter() {
    let currentNum = +counterEl.innerText;

    const dataCeil = counterEl.getAttribute("data-ceil");

    const increament = dataCeil / 15;
    currentNum += Math.ceil(increament);

    if (currentNum < dataCeil) {
      counterEl.innerText = currentNum;
      setTimeout(increamentCounter, 50);
    } else {
      counterEl.innerText = dataCeil;
    }
  }
});
