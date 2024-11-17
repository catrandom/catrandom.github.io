(({ document: d }) => {
  const document = d;

  const app = {
    init() {
      this.addToFav();
    },
    addToFav() {
      const btnFavItems = document.querySelectorAll('.js-button-fav');
      [...btnFavItems].forEach((btn) => {
        btn.addEventListener('click', (event) => {
          const { currentTarget } = event;
          currentTarget.classList.toggle('is-active');
        });
      });
    }
  };

  app.init();
})({ document });
