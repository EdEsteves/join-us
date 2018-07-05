const produtoService = {
  data: {
    produto: null,
  },
  created() {
    this.$http.get('http://localhost:3000/v1/produto').then((response) => {
      // this.produto = response.body;
      console.log(response.data);
    }), function (error) {
      console.log(error.statusText);
    };
  },
};

export default produtoService;
