const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
  token: "Bearer 7eaa7b47a41c41481019f8de06aae0864a0e158d1d18907d1f49c4057d937bf3"
  },

  e2e: {
    baseUrl: "https://gorest.co.in/public/v2/users"
  },
});
