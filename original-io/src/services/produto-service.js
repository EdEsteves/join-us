const produtoService = {
  created() {
    this.$http.get('./v1/produto/' + this.$route.params.id).then((response) => {
        this.produto = response.data;

    }).catch(function (error) {
      console.log(error.statusText);
      this.$router.push('/500');
    });
  },
};

export default produtoService;
