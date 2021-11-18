<template>
  <div id="app">
    <NavBar></NavBar>
    <section>
      <router-view/>
    </section>
    <ConatctBar id="ContactBar"></ConatctBar>
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from "@/components/NavBar.vue";
import ConatctBar from "@/components/ContactBar.vue";

export default {
  name: "App",
  components: {ConatctBar, NavBar},
  props: ["productList"],
  data() {
    return {}
  },
}
</script>


<style lang="scss">

html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  background-color: #0b5e92;
  height: 100%;
  min-height: 100%;
}

#app {
  min-height: 100%;

}

.contactus {
  text-align: center;
  height: 100%;
}

#login_box {
  display: flex;
  box-shadow: 0px 0px 20px black;
  flex-direction: column;
  margin-top: 5%;
  width: 300px;
  height: 400px;
  text-align: center;
}

form {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

form > input {
  color: gray;
  border-radius: 2px;
  border: 1px solid gray;
  padding: 10px;
}

.userIcon {
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin: 2%;
}

a {
  color: aliceblue;
  font-size: 1.5vw;
  align-self: center;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #5d5c61;
}

/*Descendant selector */
nav div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 30px;
  flex-grow: 4;
  padding: 10px;
  color: aliceblue;
  gap: 2%;
}

#ResetButton {
  box-sizing: border-box;
  align-self: center;
  height: 20px;
  width: 10%;
  padding: 5px;
  border: 0.5px solid black;
  cursor: pointer;
  background-color: #0b5e92;
  color: white;
  font-size: 1vw;
  border-radius: 6%;
}

nav img {
  padding: 10px;
  height: 30px;
  border-radius: 50%;
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

section {
  padding: 50px 30px 50px 30px;
  min-height: 100%;
  height: inherit;
  width: 70%;
  margin: auto;
  overflow: hidden;
  background-color: aliceblue;
  align-self: center;
  align-items: center;

  padding-top: 10%;
  padding-bottom: 10%;
  margin-bottom: 5%;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.CommentBox {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  box-shadow: 0px 0px 20px black;
  /*box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit;*/
  border-radius: 10px;
}

.commentHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.timeStamp {
  color: gray;
  padding: 10px;
}

.commentFooter {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.babyYodaCount {
  color: gray;
  font-size: 10px;
  padding-top: 15px;
}

div ~ p {
  padding: 2%;
}

.CommentBox button {
  border-radius: 5px;
  margin: 2%;
  width: 30px;
  height: 30px;
  background-image: url("./assets/like.png");
  background-color: darkgray;
  background-size: 30px 30px;
}

.CommentBox > button > img {
  max-height: fit-content;
}


.userInfoDropDownContainer {
  display: flex;
  justify-content: flex-end;
}

.userInfoDropDown {
  width: fit-content;
  color: gray;
  background-color: aliceblue;
  padding: 5px;
}

#ContactBar {
  bottom: 0;
}

footer {
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #5d5c61;
}
</style>
