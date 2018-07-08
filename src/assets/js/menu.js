const menu = {
  methods: {
    mostrarContainer: function abrirMenu(event) {
      if (event.target.parentNode.id === 'nav__sapatos') {
        this.mostrarContainerSapatos = !this.mostrarContainerSapatos;
        this.mostrarContainerBolsas = false;
        this.mostrarContainerAcessorios = false;
        this.mostrarContainerOff = false;
      }
      if (event.target.parentNode.id === 'nav__bolsas') {
        this.mostrarContainerBolsas = !this.mostrarContainerBolsas;
        this.mostrarContainerSapatos = false;
        this.mostrarContainerAcessorios = false;
        this.mostrarContainerOff = false;
      }
      if (event.target.parentNode.id === 'nav__acessorios') {
        this.mostrarContainerAcessorios = !this.mostrarContainerAcessorios;
        this.mostrarContainerSapatos = false;
        this.mostrarContainerBolsas = false;
        this.mostrarContainerOff = false;
      }
      if (event.target.parentNode.id === 'nav__off') {
        this.mostrarContainerOff = !this.mostrarContainerOff;
        this.mostrarContainerSapatos = false;
        this.mostrarContainerBolsas = false;
        this.mostrarContainerAcessorios = false;
      }
    },
    mostrarMenuMobile: function abrirMenuMobile(event){
      this.mostrarMenu = !this.mostrarMenu;
    },
    mostrarModal: function abrirModalCarrinho(event){
      this.mostrarModalCarrinho= !this.mostrarModalCarrinho;
    },
    fecharModal: function fecharModalCarrinho(event){
      this.mostrarModalCarrinho= !this.mostrarModalCarrinho;
    }
  },
};

export default menu;
