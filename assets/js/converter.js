document.addEventListener("DOMContentLoaded", () => {
  const baseCurrency = document.getElementById("base-currency");
  const targetCurrency = document.getElementById("target-currency");
  const amount = document.getElementById("amount");
  const convertButton = document.getElementById("convert");
  const resultText = document.getElementById("result-text");

  const apiKey = "affdcab113e467a4cfb82f95"; // Reemplaza con tu clave de API

  // Función para convertir la moneda
  async function convertCurrency() {
    const base = baseCurrency.value;
    const target = targetCurrency.value;
    const amountValue = amount.value;

    if (base === target) {
      alert("Las monedas seleccionadas son iguales.");
      return;
    }

    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${base}/${target}/${amountValue}`
      );
      const data = await response.json();
      if (data.result === "success") {
        const result = data.conversion_result.toFixed(4);
        resultText.textContent = `${amountValue} ${base} = ${result} ${target}`;
      } else {
        alert("Error al obtener los datos de conversión.");
      }
    } catch (error) {
      console.error("Error converting currency:", error);
      alert("Error al obtener los datos de conversión.");
    }
  }

  convertButton.addEventListener("click", convertCurrency);
});
