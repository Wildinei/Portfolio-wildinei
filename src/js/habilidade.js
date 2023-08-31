let html = document.querySelector('.html');
let css = document.querySelector('.css');
let javascript = document.querySelector('.javascript');
let github = document.querySelector('.github');
let react = document.querySelector('.react');
let text = document.querySelector('.texto');
let data = new Date('2023, 03, 15 ')
let dataJava = new Date('2023, 07, 01 ')
let dataHoje = (new Date());
let tempo = Math.abs(dataHoje - data)
let tempoJava = Math.abs(dataHoje - dataJava)
let tempoMes = 1000 * 60 * 60 * 24 * 30
let mes = Math.ceil(tempo / tempoMes)
let mesJava = Math.ceil(tempoJava / tempoMes)



html.addEventListener('mouseenter', () => {
    text.innerHTML = `HTML é uma linguagem de marcação utilizada na construção de páginas na Web.<br><br>`
    text.innerHTML += `<strong>** Experiência de ${mes} mês. ** </strong>`
})

css.addEventListener('mouseenter', () => {
    text.innerHTML = `CSS (Cascading Style Sheets) é um mecanismo para adicionar estilos a uma página web.<br><br>`
    text.innerHTML += `<strong>** Experiência de ${mes} mês. **</strong>`
})

javascript.addEventListener('mouseenter', () => {
    text.innerHTML = `JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World.<br><br>`
    text.innerHTML += `<strong>** Experiência de ${mesJava} mês. **</strong>`
})

github.addEventListener('mouseenter', () => {
    text.innerHTML = `GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.<br><br>`
    text.innerHTML += `<strong>** Experiência de ${mesJava} mês. </strong>`
})


react.addEventListener('mouseenter', () => {
    text.innerHTML = `O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.<br><br>`
    text.innerHTML += `<strong>** Em breve estarei estudando essa linguagem. **</strong>`
})

html.addEventListener('mouseout', sair)
css.addEventListener('mouseout', sair)
javascript.addEventListener('mouseout', sair)
github.addEventListener('mouseout', sair)
react.addEventListener('mouseout', sair)

function sair(){
    text.innerHTML = '**Passe o mouse por cima de alguma habilidade para ler a descrição**'
}