
var cris = new Figura("cris", "Brasil", "atacante","./imgs/thais.jpg");
var marta = new Figura("marta", "Brasil", "meio campo","./imgs/debinha.jpg");
var debinha = new Figura("debinha", "Basil", "atacante","./imgs/marta.jpg");

var colecaoFiguras = []

colecaoFiguras.push(cris)
colecaoFiguras.push(marta)
colecaoFiguras.push(debinha)

for(var i=0; i<colecaoFiguras.length; i++){

    colecaoFiguras[i].exibir();


}
