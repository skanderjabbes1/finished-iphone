import app from './app.js';

import navbarComponent from './components/NavbarComponent.js'
import cartComponent from './components/CartComponent.js'
import productComponent from './components/ProductComponent.js'
<<<<<<< HEAD
import reviewZoneComponent from './components/ReviewZoneComponent.js'
//import formulaireComponent from './components/FormulaireComponent.js'
//import affichageComponent from './components/AffichageComponent.js'
=======
import reviewZoneComponent from './components/review/ReviewZoneComponent.js';
>>>>>>> ef30e17eb531feb0b7e8c2b362966e4bc4abe50d

// Vue application
const myApp = Vue.createApp(app);

<<<<<<< HEAD
// Components

myApp.component('navbar-component', navbarComponent);
myApp.component('cart-component', cartComponent);
myApp.component('product-component', productComponent);
//myApp.component('formulaire-component', formulaireComponent);
//myApp.component('affichage-component', affichageComponent);
myApp.component('reviewzone-component', reviewZoneComponent);


// Mount the application

myApp.mount('#app');
=======
// Components registration
myApp.component('navbar-component', navbarComponent);
myApp.component('cart-component', cartComponent);
myApp.component('product-component', productComponent);
myApp.component('review-zone-component', reviewZoneComponent);

// Mount the application
myApp.mount('#app');
>>>>>>> ef30e17eb531feb0b7e8c2b362966e4bc4abe50d
