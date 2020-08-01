//const $ = document.querySelector.bind(document);

// const html = {
//     links: $(".tab-links"),
//     contents: $(".tab-content"),
//   };

// O finado JQuery fazia isso por debaixo dos panos.
// O JS por padão muda o escopo do "this" de document para window.
// lembrando que o bind serve para ligar o escopo de volta para o document

const html = {
  links: [...document.querySelector(".tab-links").children],
  contents: [...document.querySelector(".tab-content").children],
  openTab: document.querySelector("[data-open]"),
};

function TabNavigation() {
  function hideAllTabContent() {
    //Já fiz o espalhamento direto no objeto html
    // const contents = [...html.contents.children]; //Espalha os elementos em um array
    html.contents.forEach((section) => {
      section.style.display = "none";
    });
  }

  function removeAllActiveClass() {
    html.links.forEach((tab) => {
      tab.className = tab.className.replace(" active", "");
    });
  }

  function showCurrentTab(id) {
    const tabContent = document.querySelector("#" + id);
    tabContent.style.display = "block";
  }

  function selectTab(event) {
    hideAllTabContent();
    removeAllActiveClass();
    const target = event.currentTarget;
    showCurrentTab(target.dataset.id);
    target.className += " active";
  }

  function listenForChange() {
    html.links.forEach((tab) => {
      tab.addEventListener("click", selectTab);
    });
  }

  function init() {
    hideAllTabContent();
    listenForChange();
    html.openTab.click();
  }

  return {
    init,
  };
}

window.addEventListener("load", () => {
  const tabNavigation = TabNavigation();
  tabNavigation.init();
});
