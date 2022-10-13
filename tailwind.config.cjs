/** @type {import('tailwindcss').Config} */
module.exports = {
  //configurando onde estam os arquivos de conteudo da aplicacao
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
