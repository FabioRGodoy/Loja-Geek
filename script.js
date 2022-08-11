let listPainting = [
    {
    categoria: "Paintings",
    img: "/assets/img/painting/clock.jpg",
    nome: "Relógio",
    preco: "R$ 25.00"
    },
    {
    categoria: "Paintings",
    img: "/assets/img/painting/gamepad.jpg",
    nome: "Gamepad",
    preco: "R$ 32.00"
    },
    {
    categoria: "Paintings",
    img: "/assets/img/painting/personagem.jpg",
    nome: "C3PO",
    preco: "R$ 49.00"
    }
]


let listActionFigure = [
    {
    categoria: "Action Figure",
    img: "/assets/img/actions/animewoman.jpg",
    nome: "Anime Woman",
    preco: "R$ 30.00"
    },
    {
    categoria: "Action Figure",
    img: "/assets/img/actions/dragonballpersonagem.jpg",
    nome: "Goku",
    preco: "R$ 50.00"
    },
    {
    categoria: "Action Figure",
    img: "/assets/img/actions/starwarspersonagem.jpg",
    nome: "Baby Yoda",
    preco: "R$ 100.00"
    }
]

function createActionItem(categoria, img, nome, preco){
    if(categoria == "Action Figure"){
        let objeto = {
            categoria: categoria,
            img: img,
            nome: nome,
            preco: preco
        }

        listActionFigure.push(objeto)

        return objeto
            
    }
};
createActionItem()

// console.log(listActionFigure)


function createPaintingItem(categoria, imagem, nome, preco){
    if(categoria == "Paintings"){
        let objeto = {
            categoria: categoria,
            img: img,
            nome: nome,
            preco: preco
        }
        listPainting.push(objeto)

        return objeto
    }
}    
// createPaintingItem()

// console.log(listPainting)

let secaolistPainting = document.getElementsByClassName('paint')
let secaolistFigure = document.getElementsByClassName('figure')

for(let i = 0; i < listPainting.length; i++){
    let elementoLista = document.createElement('li')
    let img = document.createElement('img')
    let nome = document.createElement('p')
    let preco = document.createElement('span')

    img.src = listPainting[i].img
    nome.innerText = listPainting[i].nome
    preco.innerText = listPainting[i].preco

    elementoLista.append(img, nome, preco)

    secaolistPainting[0].appendChild(elementoLista)
}

for(let i = 0; i < listActionFigure.length; i++){

    let elementoLista = document.createElement('li')
    let img = document.createElement('img')
    let nome = document.createElement('p')
    let preco = document.createElement('span')
    
    img.src = listActionFigure[i].img
    nome.innerText = listActionFigure[i].nome
    preco.innerText = listActionFigure[i].preco
    
    elementoLista.append(img, nome, preco)

    secaolistFigure[0].appendChild(elementoLista)


  }
  