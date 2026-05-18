export const initPhoneMask = () => {
  const phoneInputs = document.querySelectorAll('input[type="tel"]');

  if (!phoneInputs.length) return;

  const PLACEHOLDER = "+7 (___) ___-__-__";

  const formatPhone = (value) => {
    let numbers = value.replace(/\D/g, "");

    if (numbers.startsWith("8")) {
      numbers = `7${numbers.slice(1)}`;
    }

    if (numbers && !numbers.startsWith("7")) {
      numbers = `7${numbers}`;
    }

    numbers = numbers.slice(0, 11);

    if (numbers.length <= 1) {
      return "+7 (";
    }

    let result = "+7 (";
    result += numbers.slice(1, 4);

    if (numbers.length >= 5) {
      result += `) ${numbers.slice(4, 7)}`;
    }

    if (numbers.length >= 8) {
      result += `-${numbers.slice(7, 9)}`;
    }

    if (numbers.length >= 10) {
      result += `-${numbers.slice(9, 11)}`;
    }

    return result;
  };

  phoneInputs.forEach((input) => {
    input.placeholder = PLACEHOLDER;

    input.addEventListener("beforeinput", (event) => {
      if (event.inputType?.startsWith("delete")) return;

      if (event.data && !/\d/.test(event.data)) {
        event.preventDefault();
      }
    });

    input.addEventListener("input", () => {
      input.value = formatPhone(input.value);
    });

    input.addEventListener("paste", (event) => {
      event.preventDefault();

      const pasted = (event.clipboardData || window.clipboardData).getData(
        "text",
      );

      input.value = formatPhone(pasted);
    });
  });
};
