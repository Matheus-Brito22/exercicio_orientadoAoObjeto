function Banda(nomeBanda){
   this.nomeBanda = nomeBanda;
}
function Vocalista(nome, idade, nomeBanda){
    
    this.nome = nome;
    this.idade = idade;

    Banda.call(this, nomeBanda);
}
function Guitarrista(nome, idade, instrumento, nomeBanda){ 

    this.nome = nome;
    this.idade = idade;
    this.instrumento = instrumento;

    Banda.call(this, nomeBanda);
}
function Baterista(nome, idade, instrumento, nomeBanda){ 

    this.nome = nome;
    this.idade = idade;
    this.instrumento = instrumento;

    Banda.call(this, nomeBanda);
}

const minhaBanda = new Banda("Minnha Banda");
const vocalista1 = new Vocalista("André", 23, "Os calabresos");
const guitarrista1 = new Guitarrista("jose", 23, "Guitarra", "Os calabresos");
const baterista1 = new Baterista("Pedro", 21, "Bateria", "Os calabresos");


console.log(vocalista1, guitarrista1, baterista1);