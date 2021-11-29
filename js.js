function criaAsTorres(){
    const torre1 = document.createElement('div')
    torre1.classList.add('torre')
    const torre2 = document.createElement('div')
    torre2.classList.add('torre')
    const torre3 = document.createElement('div')
    torre3.classList.add('torre')
    
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
    const disco2 = document.createElement('div')
    disco2.classList.add('disco2')
    const disco3 = document.createElement('div')
    disco3.classList.add('disco3')
    const disco4 = document.createElement('div')
    disco4.classList.add('disco4')

    // CRIA OS DISCOS NA PRIMEIRA TORRE
    const torre1 = document.getElementsByClassName('torre')[0]

    torre1.appendChild(disco1)
    torre1.appendChild(disco2)
    torre1.appendChild(disco3)
    torre1.appendChild(disco4)
}
criaOsDiscos()
