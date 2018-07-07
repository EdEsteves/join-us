const produtoService = {
  created() {
  this.$http.get(/*'./v1/produto'*/'http://localhost:3000/v1/produto').then((response) => {
      this.produto = response.data;
      console.log(this.produto);
    }), function (error) {
      console.log(error.statusText);
    };
  },
};

export default produtoService;
