//Botão mobile de navegação
const btnMobile = document.querySelector('.botao-mobile')

btnMobile.addEventListener('click', () => {
    const nav = document.querySelector('.nav')

    nav.classList.toggle('ativo')
})

//Modo claro escuro desktop e mobile
const botaoLampada = document.querySelector('.btn-desktop');
const body = document.querySelector('body');
const imagemLampada = document.querySelector('.lampada');

console.log(botaoLampada)

botaoLampada.addEventListener('click', () =>{
    const alterarEscuroClaro = body.classList.contains('modo-escuro');
    
    body.classList.toggle('modo-escuro');

    if(alterarEscuroClaro){
        imagemLampada.setAttribute('src', './src/img/luz-claro.png');
    }else {
        imagemLampada.setAttribute('src', './src/img/luz-escuro.png');
    }
});

//Efeitos de opacidade e Blur nos elementos
const observarElementos = new IntersectionObserver((observar) => {
    observar.forEach((mostrar) => {
        if(mostrar.isIntersecting){
            mostrar.target.classList.add('show')
        }else{
            mostrar.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.scroll');

elements.forEach((element) => observarElementos.observe(element))

//Digitalizando nome Wildinei Dias
new TypeIt(".dias", {
    speed: 180,
    waitUnilVisible: true,
    loop: true,
}).type('Wildinei Dias ').pause(6000)

.go();