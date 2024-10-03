const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas:[
            {
                texto: "Sim",
                afirmativa:"Afirmativa da alternativa 1"
            }
            {
                texto: "Não",
                afirmativa:"Afirmativa da alternativa 1"
            }
        ]

    },
    {
        enunciado: "Pergunta 2",
        alternativas:[
            {
                texto: "Sim",
                afirmativa:"Afirmativa da alternativa 2"
            }
            {
                texto: "Não",
                afirmativa:"Afirmativa da alternativa 2"
            }
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas:[
            {
                texto: "Sim",
                afirmativa:"Afirmativa da alternativa 3"
            }
            {
                texto: "Não",
                afirmativa:"Afirmativa da alternativa 3"
            }
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPergunta.textContent = perguntaAtual
    
}
