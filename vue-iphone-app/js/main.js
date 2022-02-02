import navbarComponent from './components/NavbarComponent.js'
import cartComponent from './components/CartComponent.js'
import productComponent from './components/ProductComponent.js'

const myApp = Vue.createApp({
    data() {
        return {
            cart: 0,
        }
    },
})
myApp.component('navbar-component', navbarComponent);
myApp.component('cart-component', cartComponent);
myApp.component('product-component', productComponent);
myApp.mount('#app');