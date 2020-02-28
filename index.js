let vm = new Vue({
  el: "#root",
  data: {
    title: "Simple Interest Calculator",
    principal: 0,
    rate: 0,
    time: 0
  },
  methods: {},
  computed: {
    interest: function() {
      this.principal = this.principal < 0 ? 0 : this.principal;
      this.rate = this.rate < 0 ? 0 : this.rate;
      this.time = this.time < 0 ? 0 : this.time;

      return (this.principal * this.rate * this.time) / 100;
    }
  }
});
