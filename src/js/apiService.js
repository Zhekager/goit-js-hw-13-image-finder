const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '21693934-b739dad2632fdbf7884e4d0a2';

export default class ImageApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchImage() {
        const responseUrl = await fetch(
            `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
        );

        const { hits: images } = await responseUrl.json();
        this.incrementPage();

        return images;
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}