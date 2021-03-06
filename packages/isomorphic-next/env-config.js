const prod = process.env.NODE_ENV === 'production';

module.exports = {
  BACKEND_URL: prod ? 'https://api.example.com' : 'https://localhost:8080',
  env: {
    NEXT_PUBLIC_TOKEN: 'value',
    NEXT_PUBLIC_VERSION: 'value'
  },
};
