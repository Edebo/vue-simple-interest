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
      return (this.principal * this.rate * this.time) / 100;
    }
  }
});
