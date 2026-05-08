import Header from "./Header.js";
import { initAnimations } from "./animate.js";
import { initTabs } from "./tabs.js";

document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
  initTabs();
});

new Header();
