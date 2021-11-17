<template>
  <div>
    <footer>
      <router-link to="/contactus">Contact Us</router-link>
    </footer>
  </div>
</template>
<script>

export default {
  name: "ConatctBar",
  data: function () {
    return {}
  },
  computed: {

    productListsale() {
      return this.$store.getters.productListsale
    },
    getProductById() {
      return this.$store.getters.getProductById(10)
    },
  },
  methods: {
    IncreaseYodas: function () {
      this.$store.dispatch("IncreaseYodasAct")
    },
    DecreaseYodas() {
      this.$store.dispatch("DecreaseYodasAct")
    }
  }
}
</script>
<style scoped>

</style>
