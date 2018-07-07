<template>
  <div id="produto">
    <div class="home-sapato">
        <span>Home</span>
        <span> / </span>
        <span>Sapatos</span>
      </div>
    <div class="produto-main">
      <div class="box__galeria">
        <div class="box__galeria__thumbnails">
          <div class="video">
            <span>Vídeo</span>
            <img src="../assets/img/galeria-produto/video.png">
          </div>
          <i class="fa fa-chevron-up"></i>
          <ul>
            <li><img class="thumbnail" src="../assets/img/galeria-produto/sandalias1.png" v-on:click="mostrarImagem($event)"></li>
            <li><img class="thumbnail" src="../assets/img/galeria-produto/sandalias2.png" v-on:click="mostrarImagem($event)"></li>
            <li><img class="thumbnail" src="../assets/img/galeria-produto/sandalias3.png" v-on:click="mostrarImagem($event)"></li>
            <li><img class="thumbnail" src="../assets/img/galeria-produto/sandalias4.png" v-on:click="mostrarImagem($event)"></li>
          </ul>
          <i class="fa fa-chevron-down"></i>
        </div>
        <img class="img-grande">
      </div>
      <div class="box__produto">
        <div class="box__produto__titulo" v-if="produto">
          <h3 class="titulo">{{ produto.nome }}</h3>
          <span class="rt--numero">RT {{ produto.rt }} | {{ produto.numero }}</span>
        </div>
        <div class="box__produto__preco" v-if="produto">
          <span class="old">R$ {{ produto.preco }}</span>
          <span class="new">| R$ {{ produto.precoDesconto }}</span>
          <span class="parcela">Ou 6x de R$ 9.20</span>
        </div>
        <div class="box__produto__cor" v-if="produto">
          <span>Cor : <span class="corLinkada">()</span></span>
          <ul class="cores">
            <li  v-for="prod in produto.cor" v-bind:key="prod.value"><img class="img-cor" v-bind:src="prod.url" v-on:click="linkarCor(prod.codigoCor, prod.text, $event)"></li>
          </ul>
        </div>
        <div class="box__produto__tamanho" v-if="produto">
          <span>Tamanho : <span class="tamanhoLinkado">()</span></span>
          <a href="#">Guia de medidas</a>
          <ul class="tamanhos">
            <li class="li-tamanho" v-for="prod in produto.tamanho" v-bind:key="prod" v-on:click="linkarTamanho(prod, $event)">{{ prod }}</li> <!--v-on:click="linkarCor(prod.codigoCor, prod.text)"-->
          </ul>
        </div>
        <button class="botao-sacola">Adicinar à sacola</button>
        <span class="box__produto__descricao" v-if="produto">
          {{ produto.descricao }}
        </span>
      </div>
    </div>
  </div>
</template>
<script src="../assets/js/produto.js">
</script>
<style lang="scss">

</style>

