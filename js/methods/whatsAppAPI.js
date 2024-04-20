export let waAPI = {
    countryCode: "process.env.countryCode",
    number: "process.env.number",
    go: function(text) {
      window.open(`https://api.whatsapp.com/send?phone=${this.countryCode}${this.number}&text=${window.encodeURIComponent(text)}`);
    }
  }
  