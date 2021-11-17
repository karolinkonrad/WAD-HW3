import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        productList: [
            {
                timestamp: "Sept 31, 2021, 13.04",
                id: 11,
                body: "What is the best game to play in 2021?",
                babyYodaCount: 0,
                userPicture: require("../assets/wizard.jpg")
            }, {
                timestamp: "Sept 31, 2021, 13.25",
                id: 10,
                body: "starcraft",
                babyYodaCount: 3,
                userPicture: require("../assets/alex.png"),
                commentPicture: require("../assets/starcraft.jpg")
            },
            {
                timestamp: "Sept 31, 2021, 13.56",
                id: 9,
                body: "minecraft",
                babyYodaCount: 2,
                userPicture: require("../assets/kuri.png"),
                commentPicture: require("../assets/minecraft.jpg")
            },
            {
                timestamp: "Sept 31, 2021, 14.01",
                id: 8,
                body: "Decent obviously. any time any place",
                babyYodaCount: 5,
                userPicture: require("../assets/intz.png")
            }, {
                timestamp: "Oct 14, 2021, 20.12",
                id: 7,
                body: "There is a new Venom sequel coming out soon. Hopes are high",
                babyYodaCount: 4,
                userPicture: require("../assets/kuri.png"),
                commentPicture: require("../assets/venom.jpg")
            },
            {
                timestamp: "Oct 14, 2021, 21.22",
                id: 6,
                body: "I heard it is not as good as the first",
                babyYodaCount: 2,
                userPicture: require("../assets/intz.png")
            }, {
                timestamp: "Oct 14, 2021, 21.30",
                id: 5,
                body: "Dune was good though",
                babyYodaCount: 11,
                userPicture: require("../assets/alex.png")
            }, {
                timestamp: "Oct 14, 2021, 21.31",
                id: 4,
                body: "YES that was amazing indeed. I really feared that they would ruin it like the first one but that's just not the case.",
                babyYodaCount: 2,
                userPicture: require("../assets/intz.png")
            }, {
                timestamp: "Oct 14, 2021, 21.31",
                id: 3,
                babyYodaCount: 3,
                userPicture: require("../assets/kuri.png"),
                commentPicture: require("../assets/dune.jpg")
            }, {
                timestamp: "Oct 25, 2021, 10.10",
                id: 2,
                body: "Can anybody please explain how to get a positive grade in SWE?",
                babyYodaCount: 9,
                userPicture: require("../assets/wizard.jpg")
            }, {
                timestamp: "Oct 25, 2021, 10.12",
                id: 1,
                body: "Wasp method seems to work the best.",
                babyYodaCount: 5,
                userPicture: require('../assets/kuri.png'),
                commentPicture: require('../assets/wasp.jpg')
            }, {
                timestamp: "Oct 25, 2021, 10.13",
                id: 0,
                body: "Fun fun fun fun!!!",
                babyYodaCount: 1,
                userPicture: require("../assets/intz.png")
            }
        ]
    },
    getters: {
        productListsale: state => {
            var productListsale = state.productList.map(product => {
                    return {
                        id: product.id,
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
        getProductById: (state) => (id) => {
            return state.productList.find(productList => productList.id === id)
        }
    },
    mutations: {
        IncreaseYodas: (state, id) => {
            state.productList.forEach(product => {
                    if (product.id === id)
                        product.babyYodaCount += 1;
                }
            )
        },
        ResetYodas: state => {
            state.productList.forEach(product => {
                product.babyYodaCount = 0;
            })
        }
    },
    actions: {
        IncreaseYodasAct: (act, id) => {
            setTimeout(function () {
                act.commit("IncreaseYodas", id)
            }, 1000)
        },
        ResetYodasAct: act => {
            setTimeout(function () {
                act.commit("ResetYodas")
            }, 1000)
        }
    },
    modules: {},
});
