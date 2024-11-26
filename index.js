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
    pergunta: "Qual é a alcunha da torcida organizada do Ceará?",
    respostas: [
      "Gaviões da Fiel",
      "Mancha Verde",
      "Cearamor",
    ],
    correta: 2
  },
  {
    pergunta: "Qual foi o ano em que o Ceará Sporting Club conquistou sua primeira Copa do Nordeste?",
    respostas: [
      "2014",
      "2015",
      "2020",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o estádio utilizado pelo Ceará como seu campo principal?",
    respostas: [
      "Estádio Presidente Vargas",
      "Arena Castelão",
      "Estádio Maracanã",
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o maior artilheiro da história do Ceará?",
    respostas: [
      "Sérgio Alves",
      "Magno Alves",
      "Ricardinho",
    ],
    correta: 1
  },
  {
    pergunta: "Qual foi o adversário na primeira partida oficial do Ceará Sporting Clube?",
    respostas: [
      "Fortaleza",
      "Ferroviário",
      "Juazeiro Empreendimentos",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é considerado o ídolo eterno do Ceará Sporting Clube?",
    respostas: [
      "Mota",
      "Gildo",
      "Fernando Baiano",
    ],
    correta: 1
  },
  {
    pergunta: "Qual foi o ano de inauguração do Centro de Treinamento do Ceará?",
    respostas: [
      "2005",
      "2010",
      "2015",
    ],
    correta: 1
  },
  {
    pergunta: "Em que ano o Ceará conquistou o primeiro acesso à Série A do Campeonato Brasileiro?",
    respostas: [
      "2016",
      "1992",
      "2008",
    ],
    correta: 1
  },
  {
    pergunta: "Quantos títulos estaduais o Ceará conquistou até o momento?",
    respostas: [
      "28",
      "45",
      "34",
    ],
    correta: 1
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
  
