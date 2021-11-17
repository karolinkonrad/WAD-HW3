<template>
  <div class="CommentBox">
    <div class="commentHeader">
      <img class="userIcon" :src='getProductById.userPicture' alt="Võlur">
      <p class="timeStamp">{{ getProductById.timestamp }}</p>
    </div>
    <p>{{ getProductById.body }}</p>
    <div class="commentFooter">
      <button v-on:click="IncreaseYodas"></button>
      <p class="babyYodaCount"> {{ getProductById.babyYodaCount }} baby Yodas</p>
    </div>
  </div>
</template>
<script>

export default {
  name: "post6",
  data: function () {
    return {}
  },
  computed: {

    productListsale() {
      return this.$store.getters.productListsale
    },
    getProductById() {
      return this.$store.getters.getProductById(6)
    },
  },
  methods: {
    IncreaseYodas: function () {
      this.$store.dispatch("IncreaseYodasAct", 6)
    },
  }
}
</script>
<style scoped>

</style>
