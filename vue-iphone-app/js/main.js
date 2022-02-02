const myApp = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: "iPhone 13",
            description: "iPhone 13 is the latest iPhone in the iPhone series. It is powered by a 2.84-GHz dual-core processor and has a camera system that can take up to 8 photos in a single burst.",
            // image: './assets/images/iphone-13-blue.png',
            // inStock: true,
            // quantity: 6,
            specs: ['5G speed', 'Edge-to-edge OLED display', 'Ceramic Shield'],
            variants: [
                { id: 'iphone13-001', color: 'blue', image: './assets/images/iphone-13-blue.png', quantity: 10 },
                { id: 'iphone13-002', color: 'black', image: './assets/images/iphone-13-midnight.png', quantity: 5 },
                { id: 'iphone13-003', color: 'red', image: './assets/images/iphone-13-red.png', quantity: 0 },
            ],
            activeVariant: 0
        }
    },
    methods: {
        // updateImage(imageUrl) {
        //     this.image = imageUrl
        // }
    },
    computed: {
        image() {
            return this.variants[this.activeVariant].image
        },
        inStock() {
            return this.variants[this.activeVariant].quantity > 0
        }
    }
})
myApp.component('navbar-component', {
    template: '<div class="nav-bar"></div>'
});
myApp.mount('#app');