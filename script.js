
var withEmotion = false;                                        // Essa variável é utilizada na função de botão inicial e na função de adicionar imagens a tela.

function initialButton() {                                      // Botão inicial clicado após escolher a opção com e sem emoção
    var rb1 = document.getElementById("rb1");
    var rb2 = document.getElementById("rb2");

    if (rb1.checked) {
        withEmotion = true;
    } else if (rb2.checked) {
        withEmotion = false;
    }

    removeToStart();
}

function textChoices(className, text) {                       // Cria os textos dinamicamente
    var paragraph = document.getElementById("text");
    paragraph.setAttribute("class", className);
    paragraph.innerHTML = text
}

function createButtons(opt1, funcName1, opt2, funcName2) {    // Cria botões dinamicamente a cada escolha diferente
    document.querySelector("#buttons").innerHTML =
        `<button onclick="${funcName1}()">${opt1}</button>
        <button onclick="${funcName2}()">${opt2}</button>`
}

function continuarStory(id, funcao) {                         // Botão usado para continuar um bloco de história
    document.getElementById("buttons").innerHTML = "";

    var continuar = document.createElement("button");
    continuar.setAttribute("id", id);
    continuar.innerText = "Continuar...";
    continuar. addEventListener("click", funcao);
    document.getElementById("buttons").appendChild(continuar);
}

function createImage(imgPath) {                               // Cria imagens
    var imgElement = document.createElement("img");
    imgElement.src = imgPath;
    return imgElement;
}

function image(varImg, id) {                                  // Adiciona imagens dinamicamente e confere se withEmotion está true, carrega as imagens, senão não carrega

    clearImg();

    if(withEmotion == true){
        var imgTag = createImage(varImg);
        imgTag.setAttribute("id", id);
    
        document.getElementById("divImg").appendChild(imgTag);      
    }else{
        let texto = document.getElementById("text");
        texto.style.fontFamily = "Arial, Helvetica, sans-serif"
        let title = document.getElementById("h1");
        title.style.fontFamily = "Times, Serif";
    }
}

function addClassName(element, className) {                   // Adiciona uma classe a um elemento
    element.classList.add(className);
}

function appendToDom(info) {                                  // Insere no Body
    document.body.append(info);
}

function remover(id) {                                        // Função utilizada para remover os elementos da página inicial depois de escolhas com ou sem emoção
    var remover = document.getElementById(id);
    remover.remove();
}

function removeToStart() {                                    // Remove os elementos da página inicial após começar o jogo

    remover("campImg");
    remover("intro");
    remover("radioButtons");
    remover("initialButton");
    startGameImg();
}

function resetLayout(){                                       // Volta o jogo ao normal após apertar o botão "Jogar denovo"

    document.body.style.backgroundImage = ""
    document.body.style.backgroundColor = "#8d8997";

    var title = document.createElement("h1");
    title.setAttribute("id", "head1");
    title.style.color = "#282b31";

    var paragraph = document.getElementById("text");
    paragraph.style.color = "white"

    var header = document.getElementById("header")
    header.appendChild(title)
}

function clearImg(){                                         // Limpa a imagem naquela parte da história específica, é chamada no youWin() por ex
    document.getElementById("divImg").innerHTML = "";
}

function death(){
    document.body.style.backgroundImage = "url('./imagens/blood.jpg')";
    var title = document.getElementById("h1");
    title.style.color = "white";
}

function youWin(){
    clearImg();
    var divImg = document.getElementById("divImg");

    document.body.style.backgroundColor = "black";

    image(youWinImg, "youWinImg");
    var title = document.getElementById("h1");
    title.style.color = "white";
}

function playAgain() {                                       //Cria um botão dinamicamente que ao ser clicado leva à função startGameImg()

    document.getElementById("buttons").innerHTML = "";

    var playAgain = document.createElement("button");
    playAgain.setAttribute("id", "playAgain");
    playAgain.innerText = "Jogar denovo!";
    playAgain.addEventListener("click", startGameImg)
    document.getElementById("buttons").appendChild(playAgain);
}
