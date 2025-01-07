module.exports = {

  
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  mode: 'development',
  //adding server
  devServer: {
    port: 8001,
  },
};
