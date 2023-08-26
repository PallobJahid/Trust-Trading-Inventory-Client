// theme logic will be implemented in the future
const variableTheme = "light";

const render = () => {
  import(`./assets/sass/themes/inventory-${variableTheme}-theme.scss`).then(
    import("./appRender.jsx")
  );
};

render();
