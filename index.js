const perguntas = [
  {
    pergunta: "Em que ano o Ceará Sporting Club foi fundado?",
    respostas: [
      "1914",
      "1962",
      "1970",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o apelido do Ceará Sporting Club?",
    respostas: [
      "Leão do Pici",
      "Vovô",
      "Tigre",
    ],
    correta: 1
  },
  {
    pergunta: "Quantos títulos estaduais o Ceará possui até o momento?",
    respostas: [
      "38",
      "22",
      "15",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o estádio que o Ceará manda seus jogos?",
    respostas: [
      "Castelão",
      "Presidente Vargas",
      "Arena das Dunas",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o maior artilheiro da história do Ceará?",
    respostas: [
      "Sérgio Alves",
      "Magno Alves",
      "Iarley",
    ],
    correta: 1
  },
  {
    pergunta: "Em que divisão o Ceará disputou a Série A do Campeonato Brasileiro em 2021?",
    respostas: [
      "Série B",
      "Série C",
      "Série D",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a mascote oficial do Ceará?",
    respostas: [
      "Leão",
      "Vovô",
      "Tigre",
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o técnico do Ceará no momento?",
    respostas: [
      "Guto Ferreira",
      "Enderson Moreira",
      "Lisca Doido",
    ],
    correta: 0
  },
  {
    pergunta: "Quantas vezes o Ceará participou da Copa Sul-Americana até o meu conhecimento em janeiro de 2022?",
    respostas: [
      "2 vezes",
      "4 vezes",
      "6 vezes",
    ],
    correta: 1
  },
  {
    pergunta: "Qual foi o ano da última conquista de um título nacional pelo Ceará?",
    respostas: [
      "1977",
      "1994",
      "2011",
    ],
    correta: 2
  },
];


  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input'). value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
       
       corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  