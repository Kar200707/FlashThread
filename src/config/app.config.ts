export const config = () => ({
  port: parseInt(process.env.PORT, 10) || 8080,
  mongodb: {
    uri: process.env.DB_URI
  }
});