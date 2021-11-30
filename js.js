//VARIÁVEL COM O NÚMERO DE DISCOS
let numDisc;

//VARIÁVEL PARA ARMAZENAR A CONTAGEM DE MOVIMENTOS
let contador = 0;
let textContador = document.getElementById('contador')

//FUNÇÃO PARA CRIAR AS TORRES
function createTowers() {

    //CRIAR AS TORRES
    const tower01 = document.createElement("div");
    const tower02 = document.createElement("div");
    const tower03 = document.createElement("div");

    //ADIOCINAR ID'S ÀS TORRES E CLASSES
    tower01.classList.add('tower');
    tower02.classList.add('tower');
    tower03.classList.add('tower');
    tower01.id = "tower01";
    tower02.id = "tower02";
    tower03.id = "tower03";

    //PEGAR O ELEMENTO PAI NO HTML E ADICIONAR AS TORRES À ELE
    const main = document.getElementById("main");
    main.appendChild(tower01);
    main.appendChild(tower02);
    main.appendChild(tower03);
}

//FUNÇÃO PARA CRIAR OS DISCOS
function createDiscs(numDisc){

    const disc = [];
    const tower01 = document.getElementById("tower01");   
    for (i = 1; i <= numDisc; i++){
        disc[i] = document.createElement("div");
        disc[i].id= `disc0${i}`;
        tower01.appendChild(disc[i]);
    }

    //CRIAR OS DISCOS
    // const disc01 = document.createElement("div");
    // const disc02 = document.createElement("div");
    // const disc03 = document.createElement("div");
    // const disc04 = document.createElement("div");

    //ADICIONAR ID'S AOS DISCOS
    // disc01.id = "disc01";
    // disc02.id = "disc02";
    // disc03.id = "disc03";
    // disc04.id = "disc04";


    //COLOCAR OS DISCOS NA TORRE 1
//    const tower01 = document.getElementById("tower01");
    // tower01.appendChild(disc01);
    // tower01.appendChild(disc02);
    // tower01.appendChild(disc03);
    // tower01.appendChild(disc04);
}

//FUNÇÃO PARA RESETAR O JOGO, COLOCANDO-OS NA TORRE 1.
function reset() {
    
    //BUSCA A TORRE 1 E REMOVE TODOS FILHOS
    const tower01 = document.getElementById("tower01");
        while (tower01.firstChild) {
            tower01.removeChild(tower01.firstChild);
        }

    //BUSCA A TORRE 2 E REMOVE TODOS FILHOS
    const tower02 = document.getElementById("tower02");
        while (tower02.firstChild) {
            tower02.removeChild(tower02.firstChild);
        }
    
    //BUSCA A TORRE 3 E REMOVE TODOS FILHOS   
    const tower03 = document.getElementById("tower03");
        while (tower03.firstChild) {
            tower03.removeChild(tower03.firstChild);
        }

    //RESETA O CONTADOR
    contador = 0;
    textContador.innerText = contador
    
    //REMOVE O TEXTO DE VITÓRIA
    let textInfos = document.getElementsByClassName('textoInfos')[0]
    textInfos.innerText = ''
    textInfos.style.color = "black"

    //ADICIONA OS EVENT LISTINERS DEPOIS DE RESETAR
    tower01.addEventListener("click", userClick);
    tower02.addEventListener("click", userClick);
    tower03.addEventListener("click", userClick);
}

//BOTÃO FACIL
const easy = document.getElementById('facil');
easy.addEventListener('click', easyMode);

//BOTÃO MEDIO
const medium = document.getElementById('medio');
medium.addEventListener('click', mediumMode);

//BOTÃO DIFÍCIL
const hard = document.getElementById('dificil');
hard.addEventListener('click', hardMode);

//FUNÇÃO FAZ O RESET E CHAMA COM O NÚMERO DE DISCOS
function easyMode() {
    numDisc = 3;
    reset();
    createDiscs(numDisc);
}
function mediumMode() {
    numDisc = 4;
    reset();
    createDiscs(numDisc);
}
function hardMode() {
    numDisc = 5;
    reset();
    createDiscs(numDisc);
}

//CHAMA AS FUNÇÕES PARA CRIAR AS TORRES E OS DISCOS.
createTowers();

//SELECIONA AS 3 TORRES NO DOM
const tower01 = document.getElementById("tower01");
const tower02 = document.getElementById("tower02");
const tower03 = document.getElementById("tower03");

//COLOCA HANDLE NAS 3 TORRES
tower01.addEventListener("click", userClick);
tower02.addEventListener("click", userClick);
tower03.addEventListener("click", userClick);


//VARIÁVEL PARA ARMAZENAR O CLIQUE DO USUÁRIO
let clicked = false;

//VARIÁVEL PARA ARMAZENAR O VALOR DA TORRE DO PRIMEIRO CLIQUE
let tower;

//FUNÇÃO PARA DETERMINAR QUAL TAREFA DEVE SER REALIZADA
function userClick(e){
    let catchTower = e.currentTarget;
    if (clicked == false) {
        moveDisc(catchTower);
    } else if (clicked == true) {
        putDisc(catchTower, tower);
        condicaoVitoria()
    }
}
//FUNÇÃO PARA SELECIONAR O DISCO A SER RETIRADO COM HANDLER DE CLIQUE EM CADA TORRE
function moveDisc(disc) {
    const delElement = disc.lastElementChild;
    
    //PRIMEIRO VERIFICA SE A TORRE TEM DISCOS
    if (disc.childElementCount == 0) {
        let info = "Selecione uma torre com discos."
        tempoDoTexto(info);}

        //TENDO DISCOS, REMOVE-SE O ÚLTIMO
        else if (disc.childElementCount > 0) {
        //delElement.remove();
        delElement.style.border = '2px solid red'
        tower = disc;
        clicked = true;
        }        
}

let cont = 0
//FUNÇÃO PARA COLOCAR OS DISCOS
function putDisc(newTower, tower) {
    const delElement = tower.lastElementChild;
    delElement.style.border = '2px solid black'
    
    //VERIFICA SE É A MESMA TORRE
    if (newTower == tower){
        let info = "Escolha outra torre."
        tempoDoTexto(info)
        delElement.style.border = '2px solid red'
    } else if (newTower != tower) {
        //VERIFICA SE A TORRE DE DESTINO TEM DISCO
        if (newTower.childElementCount == 0) {
            newTower.appendChild(delElement);
            contador++
            textContador.innerText = contador
            }
            //VERIFICA A COMPATIBILIDADE DA LARGURA DO DISCO
            else if (newTower.childElementCount > 0) {
                const lastElement = newTower.lastElementChild;
                const restWidth = lastElement.clientWidth;
                const width = delElement.clientWidth;
                if (restWidth > width){
                    newTower.appendChild(delElement);
                    contador++
                    textContador.innerText = contador
                } else if (width > restWidth){
                    let info = "Largura inválida. Observe as regras."
                    tempoDoTexto(info)
                }
            } clicked = false;
    }
}

//CONDIÇÃO DE VITÓRIA - TORRE 3 OU TORRE 2 COM 4 DISCOS.
function condicaoVitoria(){
    if (tower03.childElementCount >= numDisc || tower02.childElementCount >= numDisc) {
        let textVitoria = document.getElementsByClassName('textoInfos')[0]
        textVitoria.innerText = "Parabéns, você ganhou!"
        textVitoria.style.color = "green"
        tower02.removeEventListener("click", userClick);
        tower03.removeEventListener("click", userClick);
        tower01.removeEventListener("click", userClick);
    }
}

//ADICIONA UMA INFORMAÇÃO NA TELA E ESPERA 5 SEGUNDOS ANTES DE SER REMOVIDO
function tempoDoTexto(texto){
    let textInfos = document.getElementsByClassName('textoInfos')[0]
    textInfos.innerText = texto
    const tempoTexto = setInterval(function(){
        cont++
        if(cont>0){
            textInfos.innerText = ''
            clearInterval(tempoTexto)
        }
    },5000)
}
