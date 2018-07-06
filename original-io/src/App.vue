<template >
  <div id="app">
    <Header/>
    <Produto/>
    <Footer/>
  </div>
</template>

<script >
import Header from './components/Header';

import Produto from './components/Produto';

import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Produto,
    Footer,
  },
};
</script>

<style lang="scss" src="./assets/scss/app.scss">

</style>
