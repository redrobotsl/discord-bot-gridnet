module.exports = {
  apps : [{
    name: "Dispatcher Dimmadome",
    script: "index.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
