module.exports = {
  apps: [
    {
      name: "bmfit",
      script: "dist/server.js",
      instances: "1",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
  deploy: {
    production: {
      host: "aws-ronaldo", /// configure aws-geo no arquvio ~/.ssh/config
      user: "bitnami",
      ref: "origin/master",
      repo: "git@github.com:brunorossini/bmfit.git",
      path: "/home/bitnami/application",
      "post-deploy":
        "npm install && sucrase ./src -d ./dist --transforms imports && pm2 startOrRestart ecosystem.config.js --env production",
      env: {
        NODE_ENV: "production",
      },
    },
  },
};
