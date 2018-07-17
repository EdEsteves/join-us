<template>
    <div class="prod">
        <h1>Olá Mundo!</h1>
        {{ produto }}
    </div>
</template>
<script>
import prodService from '../services/prod-service';

const $produto = null;

export default {
  name: 'Prod',
  data: {
  },
  subscriptions: {
    produto: $produto,
  },
  mixins: [prodService],
}
</script>
<style lang="scss">

</style>
