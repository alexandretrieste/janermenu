export let waAPI = {
    countryCode: 55,
    number: 48984935045,
    go: function(text) {
      window.open(`https://api.whatsapp.com/send?phone=${this.countryCode}${this.number}&text=${window.encodeURIComponent(text)}`);
    }
  }

/*export let waAPI = {
    countryCode: parseInt(process.env.countryCode),
    number: parseInt(process.env.number),
    go: function(text) {
      window.open(`https://api.whatsapp.com/send?phone=${this.countryCode}${this.number}&text=${window.encodeURIComponent(text)}`);
    }
};
*/

