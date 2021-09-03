module.exports = function override(config, env) {
    config.optimization = {
        runtimeChunk: false
    }
    return config;
  }
