import reviewFormComponent from './ReviewFormComponent.js';
const reviewZoneComponent = {
    template: `
        <div class="review-zone">
            <reviewFormComponent></reviewFormComponent>
            <h2>ReviewListComponent</h2>
        </div>
        `,
    components: {
        'reviewFormComponent': reviewFormComponent,
    },
}

export default reviewZoneComponent