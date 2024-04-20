/*export let waAPI = {
    countryCode: "process.env.countryCode",
    number: "process.env.number",
    go: function(text) {
      window.open(`https://api.whatsapp.com/send?phone=${this.countryCode}${this.number}&text=${window.encodeURIComponent(text)}`);
    }
  }
  */


export let waAPI = {
    countryCode: "process_params.env.countryCode", // Acesse a variável de ambiente diretamente
    number: "process_params.env.number", // Acesse a variável de ambiente diretamente
    go: function(text) {
      window.open(`https://api.whatsapp.com/send?phone=${this.countryCode}${this.number}&text=${window.encodeURIComponent(text)}`);
    }
};

