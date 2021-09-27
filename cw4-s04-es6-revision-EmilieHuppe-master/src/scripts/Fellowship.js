import Perso from './Perso.js';

export default class Fellowship {
  constructor(element) {
    this.element = element;
    this.army = new Array();

    this.init();
  }

  init() {
    const persos = this.element.querySelectorAll('[data-army="perso"]');

    for (let i = 0; i < persos.length; i++) {
      const elem = persos[i];
      const perso = new Perso(elem);
      this.army.push(perso);
    }

    const button = document.querySelector('button');
    button.addEventListener('click', this.goToWar.bind(this));
  }

  goToWar(evt) {
    console.clear();

    for (let i = 0; i < this.army.length; i++) {
      const perso = this.army[i];
      perso.warCry();
    }
  }
} // Supprimer cette ligne = 1 morceau de robot
