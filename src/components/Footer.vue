<template>
    <div id="footer">
        <footer class="rodape">
        <!--rodape superior-->
            <div class="line-box">
                <div class="rodape__newsletter">
                    <form>
                        <span>Assine nossa news</span>
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" value="Renata">
                        <input type="email" id="email" placeholder="E-mail">
                        <input type="submit" placeholder="Enviar">
                    </form>
                </div>

                <div class="rodape--aninhado">
                    <div class="rodape__social-selo">
                        <div class="rodape__social">
                            <a href="http://facebook.com.br"><i class="fa fa-facebook-f"></i></a>
                            <a href="http://instagram.com"><i class="fa fa-instagram"></i></a>
                            <a href="https://br.pinterest.com/"><i class="fa fa-pinterest"></i></a>
                        </div>
                        <div class="rodape__selos">
                            <img src="../assets/img/static/vtex-pci-200.png">
                            <img src="../assets/img/static/selo-ebit.png">
                        </div>
                    </div>

                    <div class="rodape__info">
                        <div class="rodape__info__inst">
                            <span>Institucional</span>
                            <a href="#">A Marca</a>
                            <a href="#">Lojas</a>
                            <a href="#">Contato</a>
                        </div>
                        <div class="rodape__info__info">
                            <span>Informações</span>
                            <a href="#">Formas de Pagamento</a>
                            <a href="#">Trocas e Devoluções</a>
                            <a href="#">Cuidado com o Produto</a>
                        </div>
                        <div class="rodape__info__conheca">
                            <span>Conheça</span>
                            <a href="#">Franquias e Multimarcas</a>
                            <a href="#">Trabalhe com a Gente</a>
                            <a href="#">Procon-RJ</a>
                        </div>
                    </div>
                </div>
            </div>

      <!-- rodapé inferior -->

            <div class="rodape__inferior">
                <div class="rodape__inferior__endereco">
                    <p>Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.</p>
                    <p>Av. das Américas, 500 - bloco 20, loja 126 -
                        Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100</p>
                    <p>CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 -
                        E-mail: ecommerce@viamia.com.br</p>
                </div>
                <div class="rodape__inferior__logo">
                    <img src="../assets/img/static/logo-branca.png" alt="Logo da Original-io">
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

export default {
  name: 'Footer',
};

</script>

<style lang="scss">

</style>
