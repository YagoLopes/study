//const $ = document.querySelector.bind(document);

// const html = {
//     links: $(".tab-links"),
//     contents: $(".tab-content"),
//   };

// O finado JQuery fazia isso por debaixo dos panos.
// O JS por padão muda o escopo do "this" de document para window.
// lembrando que o bind serve para ligar o escopo de volta para o document

const html = {
  links: document.querySelector(".tab-links"),
  contents: document.querySelector(".tab-content"),
};

//Todas as funções que estão dentro de tabNavigation, obviamente é do contexto tabNavigation

function tabNavigation() {
  function hideAllTabContent() {
    const contents = [...html.contents.children]; //Espalha os elementos em um array

    contents.forEach((section) => {
      section.styles.display = "none";
    });
  }

  function removeAllActiveClass() {}

  function showCurrentTab() {}

  function listenForChange() {}

  function init() {
    hideAllTabContent();
    listenForChange();
  }

  return {
    init,
  };
}

window.addEventListener("load", () => {
  const tabNavigation = tabNavigation();
  tabNavigation.init();
});
