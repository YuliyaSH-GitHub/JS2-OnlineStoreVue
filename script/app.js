const API = "http://js2-onlinestorevue/"; //файл json хранится на локальном сервере
const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        basketItems: [],
        isVisibleCart: false,
        searchLine: '',
    },
    methods: {
        fetchGoods(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.goods = this.goods.filter(product => regexp.test(product.title));
        },

        addProduct(product) {

            console.log(product.id);
        },
        absentData() {
            alert('Нет данных');
        }
    },
    mounted() {

        this.fetchGoods(`${API}/catalogData.json`)
            .then(data => {
                if (data == undefined) {
                    this.absentData();
                }
                for (let item of data) {
                    this.goods.push(item);
                }
                console.log(this.goods);
            })

    }
})