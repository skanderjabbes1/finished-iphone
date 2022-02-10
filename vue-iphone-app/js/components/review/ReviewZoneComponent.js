import reviewFormComponent from './ReviewFormComponent.js';
const reviewZoneComponent = {
    template: `
        <div class="review-zone">
            <reviewFormComponent @review-submitted="addReview"></reviewFormComponent>
            <h2>ReviewListComponent</h2>
        </div>
        `,
    components: {
        'reviewFormComponent': reviewFormComponent,
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

export default reviewZoneComponent