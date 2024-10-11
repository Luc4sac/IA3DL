const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Você acha que IA ajuda no seu cotidiano?",
        alternativas: [
            {texto: "Sim",
            afirmação:"A IA ajuda no meu cotidiano"}, 

            {texto: "Não",
            afirmação:"A IA não ajuda no meu cotidiano"}]
    },
    { 
        enunciado: "A IA poderá resolver grandes problemas?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Dependedendo do problema, a IA resolverá"}, 
                
            {texto: "Não",
            afirmação:"A IA não resolverá"}]
    },
    { 
        enunciado: "Você acha que a IA trará problemas no futuro?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim, a IA trará problemas"}, 
                
            {texto: "Não",
            afirmação:"Não, a IA não trará problemas"}]
    },
]

let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmativa;
    respostas += afirmacoes;
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Em 25 anos...";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = "";
}
mostraPergunta();