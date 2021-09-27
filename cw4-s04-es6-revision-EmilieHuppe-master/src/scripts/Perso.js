export default class Perso {
  constructor(element) {
    this.element = element;
    this.name = this.element.querySelector('h2').innerText;
    this.isActive = false;

    this.init();
  }

  init() {
    console.log('new perso');
    this.element.addEventListener('click', this.addToArmy.bind(this));
  }

  addToArmy(evt) {
    this.isActive = !this.isActive;
    this.element.classList.toggle('active');
  }

  warCry() {
    if (this.isActive) {
      console.log(
        `Moi, ${this.name}, m'en vais en guerre pour détruire l'armée des Antis-Web.`
      );
    }
  }
} // Supprimer cette ligne = 1 morceau de robot
