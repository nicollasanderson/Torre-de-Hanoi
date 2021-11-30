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
function createDiscs(){
        
    //CRIAR OS DISCOS
    const disc01 = document.createElement("div");
    const disc02 = document.createElement("div");
    const disc03 = document.createElement("div");
    const disc04 = document.createElement("div");

    //ADICIONAR ID'S AOS DISCOS
    disc01.id = "disc01";
    disc02.id = "disc02";
    disc03.id = "disc03";
    disc04.id = "disc04";


    //COLOCAR OS DISCOS NA TORRE 1
    const tower01 = document.getElementById("tower01");
    tower01.appendChild(disc01);
    tower01.appendChild(disc02);
    tower01.appendChild(disc03);
    tower01.appendChild(disc04);
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
    
    tower02.addEventListener("click", userClick);
    tower03.addEventListener("click", userClick);
    tower01.addEventListener("click", userClick);

    //CHAMA A FUNÇÃO PARA CRIAR OS DISCOS E COLOCÁ-LOS NA TORRE 1
    createDiscs();
}

//BOTÃO DE RESET
const restart = document.getElementById('reset');
restart.addEventListener('click', reset);

//CHAMA AS FUNÇÕES PARA CRIAR AS TORRES E OS DISCOS.
createTowers();
createDiscs();

//SELECIONA AS 3 TORRES NO DOM
const tower01 = document.getElementById("tower01");
const tower02 = document.getElementById("tower02");
const tower03 = document.getElementById("tower03");

//COLOCA HANDLE NAS 3 TORRES
tower02.addEventListener("click", userClick);
tower03.addEventListener("click", userClick);
tower01.addEventListener("click", userClick);

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
        alert("Selecione uma torre com discos.");}

        //TENDO DISCOS, REMOVE-SE O ÚLTIMO
        else if (disc.childElementCount > 0) {
        //delElement.remove();
        delElement.style.border = '2px solid red'
        tower = disc;
        clicked = true;
        }        
}

//FUNÇÃO PARA COLOCAR OS DISCOS
function putDisc(newTower, tower) {
    const delElement = tower.lastElementChild;
    delElement.style.border = '2px solid black'
    
    //VERIFICA SE É A MESMA TORRE
    if (newTower == tower){
        alert("Escolha outra torre.")
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
                    alert("Largura inválida. Observe as regras.")
                }
            } clicked = false;
    }
}

//CONDIÇÃO DE VITÓRIA - TORRE 3 OU TORRE 2 COM 4 DISCOS.
function condicaoVitoria(){
    console.log(tower03.childElementCount)
    if (tower03.childElementCount >= 4 || tower02.childElementCount >= 4) {
        alert("Parabéns, você ganhou!")
        tower02.removeEventListener("click", userClick);
        tower03.removeEventListener("click", userClick);
        tower01.removeEventListener("click", userClick);
        
    }
}