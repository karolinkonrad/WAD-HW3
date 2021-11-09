import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        productList: [
            {
                timestamp: "Sept 31, 2021, 13.04",
                id: 10,
                body: "What is the best game to play in 2021?",
                babyYodaCount: "0",
                userPicture: "res/images/wizard.jpg"
            }, {
                timestamp: "Sept 31, 2021, 13.25",
                id: 9,
                body: "starcraft",
                babyYodaCount: "3",
                userPicture: "res/images/alex.png",
                commentPicture: "res/images/starcraft.jpg"
            },
            {
                timestamp: "Sept 31, 2021, 13.56",
                id: 8,
                body: "minecraft",
                babyYodaCount: "2",
                userPicture: "res/images/kuri.png",
                commentPicture: "res/images/minecraft.jpg"
            },
            {
                timestamp: "Sept 31, 2021, 14.01",
                id: 7,
                body: "Decent obviously. any time any place",
                babyYodaCount: "5",
                userPicture: "res/images/intz.png"
            }, {
                timestamp: "Oct 14, 2021, 20.12",
                id: 6,
                body: "There is a new Venom sequel coming out soon. Hopes are high",
                babyYodaCount: "4",
                userPicture: "res/images/kuri.png",
                commentPicture: "res/images/venom.jpg"
            },
            {
                timestamp: "Oct 14, 2021, 21.22",
                id: 5,
                body: "I heard it is not as good as the first",
                babyYodaCount: "-2",
                userPicture: "res/images/intz.png"
            }, {
                timestamp: "Oct 14, 2021, 21.30",
                id: 4,
                body: "Dune was good though",
                babyYodaCount: "11",
                userPicture: "res/images/alex.png"
            }, {
                timestamp: "Oct 14, 2021, 21.31",
                id: 3,
                body: "YES that was amazing indeed. I really feared that they would ruin it like the first one but that's just not the case.",
                babyYodaCount: "2",
                userPicture: "res/images/intz.png"
            }, {
                timestamp: "Oct 14, 2021, 21.31",
                id: 3,
                babyodaCount: "3",
                userPicture: "res/images/kuri.png",
                commentPictre: "res/images/dune.jpg"
            }, {
                timestamp: "Oct 25, 2021, 10.10",
                id: 2,
                body: "Can anybody please explain how to get a positive grade in SWE?",
                babyYodaCount: "9",
                userPicture: "res/images/wizard.jpg"
            }, {
                timestamp: "Oct 25, 2021, 10.12",
                id: 1,
                body: "Wasp method seems to work the best.",
                babyYodaCount: "5",
                userPicture: "res/images/kuri.png",
                commentPicture: "res/images/wasp.jpg"
            },
            {
                timestamp: "Oct 25, 2021, 10.13",
                id: 0,
                body: "Fun fun fun fun!!!",
                babyYodaCount: "1",
                userPicture: "res/images/intz.png"
            }
        ]
    },
    getters: {
        productListsale: state => {
            var productListsale = state.productList.pop(product => {
                    return {
                        timestamp: product.timestamp,
                        body: product.body,
                        babyYodaCount: product.babyYodaCount,
                        userPicture: product.userPicture,
                        commentPicture: product.commentPicture
                    }
                }
            );
            return productListsale
        },
    },
    mutations: {
        IncreasePrice: state => {
            state.productList.forEach(product => {
                product.price += 1;
            })
        },
        DecreasePrice: state => {
            state.productList.forEach(product => {
                product.price -= 1;
            })
        }
    },
    actions: {
        IncreasePriceAct: act => {
            setTimeout(function () {
                act.commit("IncreasePrice")
            }, 1000)
        },
        DecreasePriceAct: act => {
            setTimeout(function () {
                act.commit("DecreasePrice")
            }, 1000)
        }
    },
    modules: {},
});
