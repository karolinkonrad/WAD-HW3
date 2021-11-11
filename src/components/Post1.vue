<!--<template>
  <div class="CommentBox" >
    <div class="commentHeader">
      <img class="userIcon" src={{productListsale.userPicture}} alt="Võlur">
      <p class="timeStamp">Sept 23, 2021, 21.42</p>
    </div>
    <img src="res/images/wizard.jpg" alt="wizard">
    <p>Yeess.. I can understand the datascience homework.</p>
    <div class="commentFooter">
      <button></button>
      <p class="babyYodaCount">This post has received 7 Baby Yodas</p>
    </div>
  </div>-->
<template>
  <div id="post1">
    <ul>
      <li class="post">
        <span class="timestamp"> Author: {{ getProductById.timestamp }} </span> <br>
        <span class="body"> <b>Book:</b> {{ getProductById.body }} </span> <br>
        <span class="babyYodaCount"> <b>Goodreads:</b> {{ getProductById.babyYodaCount }} </span> <br>
        <span class="userPicture"> Price:{{ getProductById.userPicture }} </span>
        <span class="commentPicture"> Price:{{ getProductById.commentPicture }} </span>
        <button v-on:click="IncreaseYodas "> Increase yodas</button>
        <button v-on:click="DecreaseYodas"> Decrease yodas</button>
      </li>
    </ul>
  </div>
</template>
<script>


export default {
  name: "post1",
  data: function () {
    return {}
  },
  computed: {

    productListsale() {
      return this.$store.getters.productListsale
    },
    getProductById() {
      return this.$store.getters.getProductById(0)
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
.item {
  background: rgb(47, 255, 141);
  margin-bottom: 5px;
  padding: 3px 5px;
}

#comp-list-one {
  background: #ffb1b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}

#comp-list-one ul {
  padding: 0;
}

#comp-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}

.price {
  font-weight: bold;
  color: #E8800C;
}
</style>
