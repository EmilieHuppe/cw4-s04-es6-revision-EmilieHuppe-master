import Fellowship from './Fellowship';
// Supprimer cette ligne = 1 morceau de robot
class Main {
  constructor() {
    this.init();
  }

  init() {
    const componentArmy = document.querySelector(
      '[data-component="Fellowship"]'
    );

    if (componentArmy) new Fellowship(componentArmy);
  }
}
new Main();
