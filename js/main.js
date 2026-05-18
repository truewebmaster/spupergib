import Header from "./Header.js";
import { initAnimations } from "./animate.js";
import { initTabs } from "./tabs.js";
import { initModal } from "./modal.js";
import { initPhoneMask } from "./phoneMask.js";

document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
  initTabs();
  initModal();
  initPhoneMask();
});

new Header();
