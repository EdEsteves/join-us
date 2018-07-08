import Menu from './menu.js';


export default {
  name: 'Header',
  data: function (){
    return {
      mostrarContainerSapatos: false,
      mostrarContainerBolsas: false,
      mostrarContainerAcessorios: false,
      mostrarContainerOff: false,
      mostrarModalCarrinho: false,
      mostrarMenu: false,
      corClicada: null
    };
  },
  mixins: [Menu],
};
