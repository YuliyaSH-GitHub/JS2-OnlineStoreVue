const API = "http://JS2-OnlineStoreVue/"; //файл json хранится на локальном сервере
const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        isVisibleCart: false,
    },
    methods: {
        fetchGoods() {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        }
    },
    mounted() {
        this.fetchGoods(`${API}/catalogData.json`)
            .then(data => {
                for (let item of data) {
                    this.goods.push(item);
                }
                console.log(this.goods);
            })

    }
})