let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]


const itemsContainer = document.getElementById("itens_section")


for(let i = 0; i < ITENS_LOJA.length; i++) {
    const nitem = document.createElement('div')
    nitem.setAttribute('class', 'item-card');

    const text = document.createElement('h2')
    text.textContent= ITENS_LOJA[i].nome
    text.setAttribute('class', "title"); 
    const descriptionTitle = document.createElement('h5')
    descriptionTitle.textContent = ` Description:`
    const description = document.createElement('p')
    description.textContent = ITENS_LOJA[i].descricao
    description.setAttribute('class', "description"); 
    
    const price = document.createElement('h4')
    price.textContent =    `Price: ${ITENS_LOJA[i].preco}`
    
    const img = document.createElement('img')
    img.setAttribute('src', ITENS_LOJA[i].url_img);
    img.setAttribute('class', "img_card");  
    img.setAttribute("height", "50%")
    img.setAttribute("width", "50%")
    nitem.appendChild(img)
    nitem.appendChild(text)
    nitem.appendChild(price)
    nitem.appendChild(descriptionTitle)
    nitem.appendChild(description)
    
    itemsContainer.appendChild(nitem)
    console.log(nitem)
}