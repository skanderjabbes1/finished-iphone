import app from './app.js';

import navbarComponent from './components/NavbarComponent.js'
import cartComponent from './components/CartComponent.js'
import productComponent from './components/ProductComponent.js'
import reviewZoneComponent from './components/review/ReviewZoneComponent.js';

// Vue application
const myApp = Vue.createApp(app);

// Components registration
myApp.component('navbar-component', navbarComponent);
myApp.component('cart-component', cartComponent);
myApp.component('product-component', productComponent);
myApp.component('review-zone-component', reviewZoneComponent);

// Mount the application
myApp.mount('#app');