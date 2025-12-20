//Classe.
class Violao {
    //Método construtor.
    constructor(marca, qtdCordas){
        this.marca = marca;
        this.qtdCordas = qtdCordas;
    }

    //Método para mostrar as informações do violão.
    mostrarInformacoesViolao(){
        console.log(`Marca: ${this.marca}\nQuantidade de cordas: ${this.qtdCordas}`);
    }
}

//Objetos.
const violao1 = new Violao("Takamine", 6);
const violao2 = new Violao("Tagima", 12);

//Exibindo as informações.
console.log("Violão 1");
violao1.mostrarInformacoesViolao();
console.log("--------");

console.log("Violão 2");
violao2.mostrarInformacoesViolao();