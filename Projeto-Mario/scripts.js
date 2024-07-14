// "querySelector" -> Busca o que está no seu HTML -> Javascript o chama de "document" No meu caso eu pedi ao "querySelector" para trazer as clases e uma id#.  
// "const" -> Reserva/armazena/guarda e simplifica uma clase ou um elemento que você quer usar.
const form = document.querySelector(".formulario-fale-conosco")
const mascaraForm = document.querySelector(".mascara-formulario")
const caixaPrincipal = document.querySelector(".caixa-principal")
const logoMostrarCaixaPrincipal = document.querySelector(".logo-mostrar-caixa-principal")
const logoMarioEluigi = document.querySelector(".mario-e-luigi")
const mascara= document.querySelector(".mascara")
const logoMario = document.querySelector(".logo-mario")
const aviso = document.getElementById("aviso");
const linkWhatsapp = document.querySelector(".link-whatsapp")

// Adiciona um ouvinte de eventos ao clique no logo Mario
logoMario.addEventListener('click', function() {
  // Mostra o aviso
  aviso.style.display = "flex";

  // Esconde o aviso após 3 segundos e então executa a função
  setTimeout(function() {
      aviso.style.display = "none";
      moverElementosParaLadosOpostos(); // Adicione esta linha
  }, 3000);
});

// Adiciona um ouvinte de eventos ao clique no logo Mario
logoMario.addEventListener('click', function() {
  // Mostra o link do whatsapp
  linkWhatsapp.style.display = "flex";

  // Esconde o link do whatsapp após 3 segundos e então executa a função
  setTimeout(function() {
      linkWhatsapp.style.display = "none";
      moverElementosParaLadosOpostos(); // Adicione esta linha
  }, 3000);
});

logoMostrarCaixaPrincipal.addEventListener('click', function() {
  // Mostra o link do whatsapp
  linkWhatsapp.style.display = "block";

});

// Função para mostrar o formulário de contato
function mostrarForm()
{
form.style.left= "50%"
form.style.transform= "translateX(-50%)"
mascaraForm.style.visibility="visible"
}

// Função para esconder o formulário de contato
function esconderForm(){
    mascaraForm.style.visibility="hidden"
    form.style.left= "-308px"
 }

// Função para mover a caixa principal para a esquerda e o logo Mario e Luigi para a direita
function moverElementosParaLadosOpostos() {
    caixaPrincipal.style.transform = "translateX(-700px)"
    caixaPrincipal.classList.add('deslizarParaEsquerda')
    mascara.style.transform = "translateX(200%)"
    mascara.classList.add('deslizarParaEsquerda')
    logoMarioEluigi.style.position = "relative"
    logoMarioEluigi.style.transform = "translateX(220%)"
    logoMarioEluigi.classList.add('deslizarParaDireita')
   
    setTimeout(function() {
      caixaPrincipal.classList.remove('deslizarParaEsquerda')
      logoMarioEluigi.classList.remove('deslizarParaDireita')
      mascara.classList.remove('deslizarParaEsquerda')
    }, 2000) // 2000ms = 2s, que é a duração da sua animação
  }
  
  // Função para mover a caixa principal para a direita e o logo Mario e Luigi para a esquerda
  function moverElementosParaPosicaoOriginal() {
    caixaPrincipal.style.transform = "translateX(0)"
    caixaPrincipal.classList.add('deslizarParaDireita')
    mascara.style.transform = "translateX(0)"
    mascara.classList.add('deslizarParaDireita')
    logoMarioEluigi.style.transform = "translateX(0)"
    logoMarioEluigi.classList.add('deslizarParaEsquerda')
      setTimeout(function() {
      caixaPrincipal.classList.remove('deslizarParaDireita')
      logoMarioEluigi.classList.remove('deslizarParaEsquerda')
      mascara.classList.remove('deslizarParaDireita')
    }, 2000) // 2000ms = 2s, que é a duração da sua animação
  }
  
  // Adiciona os ouvintes de eventos
  logoMario.addEventListener('click', moverElementosParaLadosOpostos)
  logoMostrarCaixaPrincipal.addEventListener('click', moverElementosParaPosicaoOriginal)

  
  
















// const form= document.querySelector(".formulario-fale-conosco")
// const mascaraForm = document.querySelector (".mascara-formulario")
// const caixaPrincipal = document.querySelector(".caixa-principal")
// const logoMostrarCaixaPrincipal = document.querySelector(".logo-mostrar-caixa-principal")
// const logoMarioEluigi = document.querySelector(".mario-e-luigi")
// const mostrarLogoMarioEluigi = document.querySelector(".mostrar-logo-mario-e-luigi")



// function mostrarForm()
// {
// form.style.left= "50%"
// form.style.transform= "translateX(-50%)"
// mascaraForm.style.visibility="visible"
// }

// function esconderForm(){
//     mascaraForm.style.visibility="hidden"
//     form.style.left= "-308px"
// }



// function esconderCaixaPrincipal() {
//   caixaPrincipal.style.left = "-700px"
// }

// function mostrarCaixaPrincipal() {
//     logoMostrarCaixaPrincipal.style.left = "0" // Deixa a propriedade 'left' sem valor
//   caixaPrincipal.style.left = "0" // Define a posição inicial da caixa principal
// }


// logoMarioEluigi.style.visibility = "visible"

// logoMarioEluigi.addEventListener('click', function() {
//   logoMarioEluigi.style.visibility = "hidden"
// })

// mostrarLogoMarioEluigi.addEventListener('click', function() {
//   logoMarioEluigi.style.visibility = "visible"

//   logoMarioEluigi.classList.add('mario-e-luigi')
// })
