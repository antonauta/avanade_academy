var Pessoa = function(nome, idade, altura, peso) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;    
};

Pessoa.prototype.falarNome = function() {
    console.log("Meu nome é:" + this.nome);
}

var Professor = function(nome, idade, altura, peso, materia, cargaHoraria, escola) {
    Pessoa.call(this, nome, idade, altura, peso);
    this.materia = materia;
    this.cargaHoraria = cargaHoraria;
    this.escola = escola;
};

Professor.prototype = new Pessoa();
Professor.prototype.constructor = Professor;

Professor.prototype.ensinar = function () {
    console.log(this.nome + " está ensinando " + this.materia);
}
