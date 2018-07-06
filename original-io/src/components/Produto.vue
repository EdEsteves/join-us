<template>
  <div id="produto">
  </div>
</template>
<script>
import { Observable } from 'rxjs/Observable';
import produtoService from '../services/produto-service';


const $produtos = Observable.create((target) => {
  target.next(1);
});

export default {
  name: 'Produto',
  subscriptions: {
    produto: $produtos,
  },
  mixins: [produtoService],
};
</script>
<style lang="scss">

</style>

