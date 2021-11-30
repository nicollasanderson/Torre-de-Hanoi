function criaAsTorres(){
    const torre1 = document.createElement('div')
    torre1.classList.add('torre')
    torre1.id = 'torre1'
    const torre2 = document.createElement('div')
    torre2.classList.add('torre')
    torre2.id = 'torre2'
    const torre3 = document.createElement('div')
    torre3.classList.add('torre')
    torre3.id = 'torre3'
    
    const main = document.getElementById('main')

    const disco1 = document.createElement('div')
    disco1.classList.add('disco1')
    const disco2 = document.createElement('div')
    disco2.classList.add('disco2')
    const disco3 = document.createElement('div')
    disco3.classList.add('disco3')
    const disco4 = document.createElement('div')
    disco4.classList.add('disco4')
    
    main.appendChild(torre1)
    main.appendChild(torre2)
    main.appendChild(torre3)
}
criaAsTorres()

function criaOsDiscos(){
    const disco1 = document.createElement('div')
    disco1.classList.add('disco1')
    disco1.id = '1'
    const disco2 = document.createElement('div')
    disco2.classList.add('disco2')
    disco2.id = '2'
    const disco3 = document.createElement('div')
    disco3.classList.add('disco3')
    disco3.id = '3'
    const disco4 = document.createElement('div')
    disco4.classList.add('disco4')
    disco4.id = '4'

    // CRIA OS DISCOS NA PRIMEIRA TORRE
    const torre1 = document.getElementsByClassName('torre')[0]

    torre1.appendChild(disco1)
    torre1.appendChild(disco2)
    torre1.appendChild(disco3)
    torre1.appendChild(disco4)
}
criaOsDiscos()


const torre1 = document.getElementById('torre1')
const torre2 = document.getElementById('torre2')
const torre3 = document.getElementById('torre3')

torre1.addEventListener('click', torreAtual)
torre2.addEventListener('click', torreAtual)
torre3.addEventListener('click', torreAtual)

let click = false;

function torreAtual(event){
    const target = event.currentTarget
    const discosNaTorre = target.childElementCount
    const discoTopo = target.lastElementChild
    if(discosNaTorre>0){
        selecionaDisco(discoTopo)  
    }
}

function mudaDiscoDeTorre(discos){
    torre2.appendChild(discos)
}

function selecionaDisco(discos){
    discos.style.border = '2px solid red'
    if(click===false){
        click = true
    }
    
    
}



















/*
const main = document.getElementById('main')

function selecionaDisco(event){
    const target = event.target
    
    const torre1 = document.getElementById('torre1')
    let atual = 0;
    console.log(target)
    
    if(target.){
        const disco = torre1.lastChild
        disco.style.border = 'solid 2px red'
        atual = parseInt(target.id)
        mudaDisco()
    }
}

function mudaDisco(event){
    
    if(event.target===torre2){
        console.log('oi')
    }
}

main.addEventListener('click', selecionaDisco)
*/

