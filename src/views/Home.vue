<template>
  <div class="home">
    <post1></post1>
    <post2></post2>
    <post3></post3>
    <post4></post4>
    <post5></post5>
    <post6></post6>
    <post7></post7>
    <post8></post8>
    <post9></post9>
    <post10></post10>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import post1 from "@/components/Post1.vue";
import post2 from "@/components/Post2.vue";
import post3 from "@/components/Post3.vue";
import post4 from "@/components/Post4.vue";
import post5 from "@/components/Post5.vue";
import post6 from "@/components/Post6.vue";
import post7 from "@/components/Post7.vue";
import post8 from "@/components/Post8.vue";
import post9 from "@/components/Post9.vue";
import post10 from "@/components/Post10.vue";

export default {
  name: "Home",
  components: {post1, post2, post3, post4, post5, post6, post7, post8, post9, post10},
  props: ["productList"],
  data() {
    return {}
  },
}
</script>

<style scoped>

</style>