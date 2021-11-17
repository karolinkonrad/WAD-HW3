<template>
  <div>
    <header>
      <nav>
        <img src="../assets/dragonfly.png" alt="Logo">
        <div>
          <router-link to="/"> Home</router-link>
          <router-link to="/about"> Log in</router-link>
          <router-link to="/contactus"> Contact Us</router-link>
          <button id="ResetButton" v-on:click="ResetYodas"> Reset Yodas</button>
        </div>

        <img id="userInfoIcon" src="../assets/alex.png" alt="userIcon">
      </nav>
    </header>
  </div>
</template>
<script>


export default {
  name: "NavBAr",
  data: function () {
    return {}
  },
  computed: {

    productListsale() {
      return this.$store.getters.productListsale
    },
    getProductById() {
      return this.$store.getters.getProductById(1)
    },
  },
  methods: {
    IncreaseYodas: function () {
      this.$store.dispatch("IncreaseYodasAct")
    },
    DecreaseYodas() {
      this.$store.dispatch("DecreaseYodasAct")
    },
    ResetYodas() {
      this.$store.dispatch("ResetYodasAct")
    }
  }
}
</script>
<style scoped>

</style>
