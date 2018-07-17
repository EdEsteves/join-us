const prodService = {
  created() {
    this.$http.get('./produto/' + this.$route.params.id).then((response) => {
      this.produto = response.data;
    }), function (error) {
      console.log(error.statusText);
    };
  },
};

export default prodService;
