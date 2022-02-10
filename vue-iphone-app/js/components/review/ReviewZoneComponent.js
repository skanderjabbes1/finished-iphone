import reviewFormComponent from './ReviewFormComponent.js';
import reviewListComponent from './ReviewListComponent.js';

const reviewZoneComponent = {
    template: `
        <div class="review-zone">
            <reviewFormComponent @review-submitted="addReview"></reviewFormComponent>
            <reviewListComponent :reviews="reviews" v-if="reviews.length>0"></reviewListComponent>
        </div>
        `,
    components: {
        'reviewFormComponent': reviewFormComponent,
        'reviewListComponent': reviewListComponent,
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