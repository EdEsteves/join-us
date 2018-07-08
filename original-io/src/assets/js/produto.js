import { Observable } from 'rxjs/Observable';
import produtoService from '../../services/produto-service';


const $produtos = null; /* = Observable.create((target) => {
  target.next(1);
}); */

export default {
  name: 'Produto',
  data: {
  },
  subscriptions: {
    produto: $produtos,
  },
  mixins: [produtoService],
  methods: {
    linkarCor(codigo, nome) {
      const corClicada = document.querySelector('.corLinkada');
      corClicada.innerHTML = `(${nome})`;
      corClicada.style.color = codigo;
      const img = document.querySelectorAll('.img-cor');
      for (let i = 0; i < img.length; i++) {
        if (img.length > 0) {
          img[i].classList.remove('cor-selected');
        }
      }
      event.target.classList.add('cor-selected');
    },
    linkarTamanho(tamanho, event) {
      const tamanhoClicado = document.querySelector('.tamanhoLinkado');
      tamanhoClicado.innerHTML = `(${tamanho})`;
      const li = document.querySelectorAll('.li-tamanho');
      for (let i = 0; i < li.length; i++) {
        if (li.length > 0) {
          li[i].classList.remove('tamanho-selected');
        }
      }
      event.target.classList.add('tamanho-selected');
    },
    mostrarImagem(event) {
      const imagemGrande = document.querySelector('.img-grande');
      imagemGrande.src = event.target.src;
      const thumb = document.querySelectorAll('.thumbnail');
      for (let i = 0; i < thumb.length; i++) {
        if (thumb.length > 0) {
          thumb[i].classList.add('sem-destaque');
        }
      }
      event.target.classList.remove('sem-destaque');
    },
    mostrarModal(event) {
      const modal = document.querySelector('.modal-compra');
      const botao = document.querySelector('.botao-sacola');
      const span = document.querySelector('.close');

      modal.style.display = 'block';

      span.onclick = function () {
        modal.style.display = 'none';
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      };
    },
    fecharModal(event) {
      const modal = document.querySelector('.modal-compra');
      modal.style.display = 'none';
    },
    previous(){
      let foto = document.querySelector('.thumbnail:not(.sem-destaque');
      if (foto != null){
        foto.classList.add('sem-destaque');
        let proximaFoto = foto.parentElement.previousElementSibling.firstChild;//.classList.remove('sem.destaque');
        proximaFoto.classList.remove('sem-destaque');
        const imagemGrande = document.querySelector('.img-grande');
        imagemGrande.src = proximaFoto.src;
      }
    },
    next(){
      let foto = document.querySelector('.thumbnail:not(.sem-destaque');
      if (foto != null){
        foto.classList.add('sem-destaque');
        let proximaFoto = foto.parentElement.nextElementSibling.firstChild;//.classList.remove('sem.destaque');
        proximaFoto.classList.remove('sem-destaque');
        const imagemGrande = document.querySelector('.img-grande');
        imagemGrande.src = proximaFoto.src;
      }
    }
  },
};
