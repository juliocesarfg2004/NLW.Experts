const perguntas = [
    {
      pergunta: "Qual é a linguagem de programação padronizada para desenvolvimento web?",
      respostas: [
        "Java",
        "JavaScript",
        "Python",
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar = 10;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Compara valores sem levar em conta o tipo",
        "Compara valores e tipos de dados",
        "Concatena strings",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'querySelector' faz em JavaScript?",
      respostas: [
        "Seleciona elementos por classe",
        "Seleciona elementos por ID",
        "Seleciona elementos por tag",
      ],
      correta: 2
    },
    {
      pergunta: "Como você adiciona um evento de clique a um elemento HTML em JavaScript?",
      respostas: [
        "addEventListener('hover', myFunction)",
        "click(myFunction)",
        "addEventListener('click', myFunction)",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir mensagens de erro no console",
        "Imprimir informações no console",
        "Definir variáveis no console",
      ],
      correta: 1
    },
    {
      pergunta: "O que significa AJAX em JavaScript?",
      respostas: [
        "Assíncrono JavaScript e XML",
        "ActiveX JavaScript",
        "Aplicação Java para XML",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado para armazenar múltiplos valores",
        "Um operador lógico",
        "Um método de string",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "function myFunction()",
        "var = function myFunction()",
        "declare function myFunction()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model, uma representação da estrutura do documento HTML",
        "Data Object Model, um modelo de dados em JavaScript",
        "Digital Object Management, uma biblioteca de gerenciamento de objetos digitais",
      ],
      correta: 0
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
  