({
  babel: true,
  plugins: ['jsdom-quokka-plugin'],
  jsdom: {
    file: "./index.html"
  }
})

document.body.innerHTML //?