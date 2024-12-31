export default {
  REDIS_QUEUE_CONFIG: {
    port: parseInt(process.env.REDIS_QUEUE_PORT, 10) || 6379, // Redis port
    host: process.env.REDIS_QUEUE_HOST || '127.0.0.1', // Redis host
    username: process.env.REDIS_QUEUE_USERNAME || undefined, // needs Redis >= 6
    password: process.env.REDIS_QUEUE_PASSWORD || undefined,
    db: process.env.REDIS_QUEUE_DB || 0,
    // support tls option in aws memory cache
    tls: process.env.REDIS_QUEUE_TLS ? {} : undefined
  },
  // option to use cluster mode or not.
  REDIS_QUEUE_USE_CLUSTER_MODE: process.env.REDIS_QUEUE_USE_CLUSTER_MODE || false
};
