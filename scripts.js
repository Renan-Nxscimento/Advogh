'use strict'

    const pontoUm = document.getElementById('dotOne')
    const pontoDois = document.getElementById('dotTwo')
    const pontoTres = document.getElementById('dotThree')
    const comentario = document.querySelector('#comment')
    const usuario = document.querySelector('#client')
    const pontos = document.querySelectorAll('.dots i')

//Header
function scrollHome() {
    window.scrollTo({
        top:0,
        behavior: 'smooth'})
}

function scrollAreas() {
    window.scrollTo({
        top:1580,
        behavior: 'smooth'})
}

function scrollOffice() {
    window.scrollTo({
        top:2680,
        behavior: 'smooth'})
}

function scrollComments() {
    window.scrollTo({
        top:3840,
        behavior: 'smooth'})
}

function scrollLocal() {
    window.scrollTo({
        top: 4780,
        behavior: "smooth"
    })
}



//Depoimentos
pontoUm.addEventListener('click', function() {
    comentario.innerHTML = 'Fiquei muito satisfeito com o serviço de retomada de bens que vocês me ofereceram! A equipe foi extremamente profissional e eficiente durante todo o processo. A comunicação foi clara e transparente, me deixando tranquilo e confiante em cada etapa. A rapidez na recuperação dos meus bens superou minhas expectativas! Recomendo fortemente o serviço para qualquer pessoa que precise recuperar seus bens!'
    usuario.innerHTML = "Altair Ibn La'Ahad"
    pontos.forEach(ponto => {
        ponto.classList.remove('activeDot')
    })
    pontoUm.classList.add('activeDot')
})

pontoDois.addEventListener('click', function() {
    comentario.innerHTML = 'A equipe jurídica da Advogh demonstrou grande profissionalismo e expertise na elaboração do nosso contrato empresarial. A clareza e a precisão do documento nos deixaram seguros e tranquilos quanto aos termos e condições do acordo. A comunicação durante todo o processo foi impecável, respondendo a todas as nossas dúvidas com rapidez e eficiência. Recomendamos fortemente os serviços jurídicos da Advogh para qualquer empresa que busca um contrato sólido e confiável.'
    usuario.innerHTML = "Ezio Auditore da Firenze"
    pontos.forEach(ponto => {
        ponto.classList.remove('activeDot')
    })
    pontoDois.classList.add('activeDot')
})

pontoTres.addEventListener('click', function() {
    comentario.innerHTML = 'A consultoria em direito empresarial da Advogh foi fundamental para o sucesso da nossa empresa. A equipe demonstrou profundo conhecimento da legislação e das melhores práticas do mercado, fornecendo soluções personalizadas e estratégicas para os nossos desafios. A comunicação clara e transparente, aliada à proatividade e ao compromisso com a excelência, nos deixou completamente satisfeitos com os serviços prestados. Recomendamos fortemente a Advogh para qualquer empresa que busca orientação e suporte jurídico especializado.'
    usuario.innerHTML = "Arno Dorian"
    pontos.forEach(ponto => {
        ponto.classList.remove('activeDot')
    })
    pontoTres.classList.add('activeDot')
})