<template>
  <div class="home">
    <post1></post1>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import post1 from "@/components/Post1.vue";

export default {
  name: "Home",
  components: {post1, },
  props: ["productList"],
  data() {
    return {

    }
  },
}
</script>

<style scoped>

</style>