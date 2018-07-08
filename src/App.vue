<template >
  <div id="app">
    <Header/>
    <Produto/>
    <Prateleira/>
    <Footer/>
  </div>
</template>

<script >
import Header from './components/Header';

import Produto from './components/Produto';

import Prateleira from './components/Prateleira';

import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Produto,
    Prateleira,
    Footer,
  },
};
</script>

<style lang="scss" src="./assets/scss/app.scss">

</style>
