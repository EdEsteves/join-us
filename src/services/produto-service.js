const produtoService = {
  created() {
    this.$http.get('./v1/produto').then((response) => {
      this.produto = response.data;
    }), function (error) {
      console.log(error.statusText);
    };
  },
};

export default produtoService;
