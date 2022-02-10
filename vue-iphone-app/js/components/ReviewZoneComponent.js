
import formulaireComponent from './FormulaireComponent.js'
import affichageComponent from './AffichageComponent.js'

const ReviewZoneComponent = {
    //template: `
    //<affichage-component :pseudo="pseudo"/>
    //<formulaire-component @submit="save()"/>
    //`,
    template : `
        <div class="review-zone">
            <reviewFormComponent @review-submitted="addReview"></reviewFormComponent>
            <affichage-component :reviews="reviews" v-if="reviews.length>0"></affichage-component>
        </div>
    `,
    // Components
    components: {
        'reviewFormComponent': formulaireComponent,
        'affichage-component': affichageComponent,
    },
    data() {
        return {
            reviews: []
        }
    },
    methods: {
        addReview(review) {
            this.reviews.push(review);
        }
    },
}


export default ReviewZoneComponent
