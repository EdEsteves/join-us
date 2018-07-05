<template>
    <div id="header">

        <!--Menu media query-->
        <div class="menu-mobile">
            <div class="menu-mobile__botao">
                <img src="../assets/img/static/logo.png" for="Logo da empresa">
                <i class="fa fa-bars" v-on:click="mostrarMenuMobile"></i>
            </div>
            <div class="menu-mobile__signin-signout">
                <a href="#">Entrar</a>
                    <span>|</span>
                <a href="#">Cadastrar-se</a>
            </div>
            <transition enter-active-class="animated pulse">
                <div v-if="mostrarMenu" class="mobile__dd">
                    <ul>
                        <li>Sapatos</li>
                        <li>Bolsas</li>
                        <li>Acessórios</li>
                        <li>Off</li>
                    </ul>
                </div>
            </transition>
        </div>
        <!--fim Menu media query-->

        <b-container class="header">
            <!--header-logo-->
            <b-container class="header__logo">
                <b-row>
                    <b-col class="text-center">
                        <img src="../assets/img/static/logo.png" for="Logo da empresa">
                    </b-col>
                </b-row>
            </b-container>
            <!--fim header-logo-->
            <b-container class="header__nav-bar">
                <b-row>
                    <b-col cols="2">
                        <div class="header__nav-bar__signin-signup">
                            <a href="#">Entrar</a>
                            <span>|</span>
                            <a href="#">Cadastrar-se</a>
                        </div>
                    </b-col>
                    <b-col cols="8">
                        <b-nav class="header__nav-bar__nav" fill>
                            <b-nav-item id="nav__sapatos" v-on:click="mostrarContainer">
                                Sapatos
                            </b-nav-item>
                            <b-nav-item id="nav__bolsas" v-on:click="mostrarContainer">
                                Bolsas
                            </b-nav-item>
                            <b-nav-item id="nav__acessorios" v-on:click="mostrarContainer">
                                Acessórios
                            </b-nav-item>
                            <b-nav-item id="nav__off" v-on:click="mostrarContainer">
                                Off
                            </b-nav-item>
                        </b-nav>
                    </b-col>
                    <b-col cols="2">
                        <b-nav-form >
                            <b-col class="coluna-search">
                                <b-form-input class="__busca"
                                    type="text" placeholder="Busca">
                                </b-form-input>
                                <div class="cart">
                                    <img src="../assets/img/nav-menu/cart.png"
                                        alt="Carrinho de compras">
                                    <span>0</span>
                                </div>
                            </b-col>
                        </b-nav-form>
                    </b-col>
                </b-row>
            </b-container>
        </b-container>
        <!--Menu Dropdown-->
        <transition enter-active-class="animated pulse">
            <div v-if="mostrarContainerSapatos"  class="sapato__dd">
                <ul class="sapato__dd__1">
                    <li>
                        <a>
                            <div class="rasteira__png"></div>
                            <span>Rasteiras</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="sapatilha__png"></div>
                            <span>Sapatilhas</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="alpargata__png"></div>
                            <span>Alpargatas</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="mocassin__png"></div><span>Mocassins</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="tenis__png"></div><span>Tênis</span>
                        </a>
                    </li>
                </ul>
                <ul class="sapato__dd__2">
                    <li>
                        <a>
                            <div class="bota__png"></div><span>Botas</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="anabela__png"></div><span>Salto Anabela</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="plataforma__png"></div><span>Salto Plataforma</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="salto-alto__png"></div><span>Salto Alto</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="salto-medio__png"></div><span>Salto Médio</span>
                        </a>
                    </li>
                </ul>
            </div>
        </transition>
        <transition name="fade" enter-active-class="animated pulse">
            <div v-if="mostrarContainerBolsas"  class="bolsa__dd">
                <div class="bolsa__dd__ver-tudo">
                    <div class="img">
                        <img src="../assets/img/nav-menu-bolsas/bolsas.png"
                            alt="Imagem com texto BOLSA" class="img--normal">
                        <img src="../assets/img/nav-menu-bolsas/bolsas.png"
                            alt="Imagem transparente" class="img--opacity">
                    </div>
                    <a href="#">Ver todas</a>
                </div>
                <div class="bolsa__dd__lista">
                    <ul>
                        <li><a href="#">Bolsas Pequenas</a></li>
                        <li><a href="#">Bolsas Grandes</a></li>
                        <li><a href="#">Bolsas de Tecido</a></li>
                        <li><a href="#">Bolsas Maleta</a></li>
                        <li><a href="#">Bolsas Saco</a></li>
                        <li><a href="#">Mochilas</a></li>
                        <li><a href="#">Malas</a></li>
                    </ul>
                </div>
                <div class="bolsa__dd__banner">
                    <img src="../assets/img/nav-menu-bolsas/banner-menu-bolsa.png"
                        for="Banner de bolsas">
                </div>
            </div>
        </transition>

        <transition name="fade" enter-active-class="animated pulse">
            <div v-if="mostrarContainerAcessorios"  class="acessorio__dd">
                <div class="acessorio__dd__ver-tudo">
                    <div class="img">
                        <img src="../assets/img/nav-menu-acessorios/acessorios.png"
                            alt="Imagem com texto ACESSORIO" class="img--normal">
                        <img src="../assets/img/nav-menu-acessorios/acessorios.png"
                            alt="Imagem transparente" class="img--opacity">
                    </div>
                    <a href="#">Ver todas</a>
                </div>
                <div class="acessorio__dd__lista">
                    <ul>
                        <li><a href="#">Bijoux</a></li>
                        <li><a href="#">Carteiras</a></li>
                        <li><a href="#">Cintos</a></li>
                        <li><a href="#">Necessaires</a></li>
                        <li><a href="#">Organizadores</a></li>
                        <li><a href="#">Pros Dias de Sol</a></li>
                        <li><a href="#">Leve Por Aí</a></li>
                        <li><a href="#">É Tendência</a></li>
                    </ul>
                </div>
                <div class="acessorio__dd__banner">
                    <img src="../assets/img/nav-menu-acessorios/banner-menu-acessorios.png"
                        for="Banner de acessórios">
                </div>
            </div>
        </transition>
    </div>
</template>

<script src="../assets/js/header.js">

</script>

<style lang="scss">

</style>
