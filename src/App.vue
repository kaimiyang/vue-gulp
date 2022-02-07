<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Upload :multiple="true" warpClass="abc" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import Upload from './components/Upload'
import file from './utils/file'

@Component({
  components: {
    HelloWorld,
    Upload
  }
})
export default class App extends Vue {
  data() {
    console.log(file.formatSize(1023229299209))
    return {

    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.abc {
  // background-color: red;
}
</style>
