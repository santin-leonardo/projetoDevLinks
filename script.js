function toggleMode() {
  const html = document.documentElement

  //Explicação de como funciona a função toggle
  //if(html.classList.contains('light')){
  //  html.classList.remove('light')
  //} else{
  //  html.classList.add('light')
  //}
  html.classList.toggle("light")

  //pegar a tag img

  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute("alt", "mayke de rayban")
  } else {
    // se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute("alt", "Foto do perfil do usuaário")
  }
}
