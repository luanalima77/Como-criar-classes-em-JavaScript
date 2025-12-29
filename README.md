# 📘 Como criar classes em JavaScript?
Este repositório tem como objetivo demonstrar, de forma simples e didática, o uso de classes em JavaScript, utilizando um exemplo prático com a modelagem de um violão (instrumento musical que eu toco).
<br><br>

# 🎯 Objetivo educacional
Este repositório é ideal para:
- Iniciantes em JavaScript;
- Estudantes aprendendo Programação Orientada a Objetos (POO);
- Revisão de conceitos básicos de classes e objetos.
<br><br>

# 🧠 Conceitos abordados
Neste exemplo, são trabalhados os seguintes conceitos fundamentais da Programação Orientada a Objetos (POO) em JavaScript:
- Declaração de classes;
- Uso do método construtor (constructor); 
- Criação de atributos;
- Definição de métodos;
- Instanciação de objetos;
- Acesso a propriedades e métodos de objetos.

#### Uso da palavra-chave this
#### 🔑 O uso do this em JavaScript

A palavra-chave this é utilizada dentro de uma classe para se referir ao próprio objeto que está sendo criado ou utilizado naquele momento.
No construtor da classe Violao, o this serve para diferenciar:
- os atributos do objeto (this.marca, this.qtdCordas)
- dos parâmetros recebidos (marca, qtdCordas)

Exemplo:
```javascript
constructor(marca, qtdCordas){
    this.marca = marca;
    this.qtdCordas = qtdCordas;
}
```

Isso significa que:
- this.marca pertence ao objeto criado;
- marca é apenas o valor passado no momento da criação do objeto.

Sem o uso do this, os valores não seriam armazenados corretamente no objeto.

O this também é usado dentro dos métodos para acessar os dados do próprio objeto:

```javascript
mostrarInformacoesViolao(){
    console.log(`Marca: ${this.marca}`);
}
```

Assim, cada objeto (violao1, violao2) acessa seus próprios valores, mesmo usando o mesmo método.
<br><br>

# 🎸 Estrutura da classe

A classe Violao representa um violão com duas características principais:
- marca: marca do violão;
- qtdCordas: quantidade de cordas

Além disso, a classe possui um método responsável por exibir essas informações no console:
```javascript
  //Método para mostrar as informações do violão.
    mostrarInformacoesViolao(){
        console.log(`Marca: ${this.marca}\nQuantidade de cordas: ${this.qtdCordas}`);
    }
```
<br>

# 🚀 Como executar o código
1. Certifique-se de ter o Node.js, o VS Code e o Git instalados
2. Clone este repositório com o seguinte código:
```bash
git clone https://github.com/luanalima77/Como-criar-classes-em-JavaScript.git
```
3. Acesse a pasta do projeto:
```bash
cd Como-criar-classes-em-JavaScript
```
4. Execute o arquivo JavaScript no terminal com o seguinte comando:
```bash
node main.js
```
<br>

### ✍️ Projeto com fins educacionais