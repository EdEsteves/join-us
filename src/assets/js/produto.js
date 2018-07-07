import { Observable } from 'rxjs/Observable';
import produtoService from '../../services/produto-service';


const $produtos = null; /* = Observable.create((target) => {
  target.next(1);
});*/

export default {
  name: 'Produto',
  data: {
  },
  subscriptions: {
    produto: $produtos,
  },
  mixins: [produtoService],
  methods: {
    linkarCor(codigo, nome){
      let corClicada = document.querySelector('.corLinkada');
      corClicada.innerHTML = "("+nome+")";
      corClicada.style.color = codigo;
      let img = document.querySelectorAll(".img-cor");
      for(let i = 0; i < img.length; i++){
        if(img.length > 0){
          img[i].classList.remove("cor-selected");
        }
      }
      event.target.classList.add("cor-selected");
      
    },
    linkarTamanho(tamanho, event){
      let tamanhoClicado = document.querySelector(".tamanhoLinkado");
      tamanhoClicado.innerHTML = "("+tamanho+")";
      let li = document.querySelectorAll(".li-tamanho");
      for(let i = 0; i < li.length; i++){
        if(li.length > 0){
        li[i].classList.remove("tamanho-selected");
        }
      }
      event.target.classList.add("tamanho-selected");
      
    },
    mostrarImagem(event){
      const imagemGrande = document.querySelector(".img-grande")
      imagemGrande.src = event.target.src;
      console.log(event.target.src);
    }
  }
};