/*
var myNickname = "Rustuh";

let language = "Javascript";

const pattern = "ECMAScript";

console.log(myNickname)

*/
/*exemplo de como usar variaveis*/

/* Pode ser usado (VAR são declarações de escpo global ou escopo de funções )
{
    var age = 32
}

console.log(age)
*/

/* Não pode ser usado (LET e CONST são de escopo bloqueado)
{
    let age = 32
}
    console.log(age)
*/

//Tipo de dados
/*
var myName = "Felipe" //string

var age = 33 //number

var height = 1.70 //number

null
undefined

var isStudent = false //bolean
*/

//Obejeto, array e function

/*

//Obejeto
var person = {
    "name": "Felipe",
    "age": 33
}

//array

var students = [ "Felipe", "Orlando", "Rustuh"]

//function

function sum(a,b){
    return a + b
}

*/

//operador typeof
/*
console.log(typeof 32) //number

var isStudent = true;
console.log(typeof isStudent) //bolean

var object = null;
console.log(typeof object) //objeto

function sum(){
    return 5 + 2
}

console.log(typeof sum)
*/

//operadores aritméticos
/*
adição (+)
    var sumTwoNumbers = 1+5
    console.log(sumTwoNumbers)
subtração (-)
    var subTwoNumbers = 1-5
    console.log(subTwoNumbers)
multiplicação (*)
    var multTwoNumbers = 1*5
    console.log(multTwoNumbers)
divisão (/)
    var divTwoNumbers = 1/5
    console.log(devTwoNumbers)
resto de divisão (%)
    console.log(1%5)
incrremento (++)
    var num = 1
    console.log(++num)
decremento (--)
    var num = 1
    console.log(--num)
    num = num - 1

//operadores de atribuição

    (=) atribuição

//atribuição de soma, subtração, multi e divisão

    var x= 1
    var y =3

    console.log(x+=y)
    console.log(x-=y)
    console.log(x*=y)
    console.log(x/=y)
    console.log(x%=y)

//operadpres de comparação

    == (comparação de valores)
    === (comparar valo e tipo)
    != (diferente de)
    < ou <= (menor e menor igual)
    > ou >= (maior e maior igual)

//operadores lógicos

    && (e)
    || (ou)
    ! (negação)

*/

/*
//Condicionais

    //if, else, else if

    var num = 1;
    num= 5

    if (num === 1) {
        console.log("num é igual a 1")
    } else if (num === 2) {
        console.log("num é igual a 2")
    } else {
        console.log("num é 5")
    }

    //switch case

    var mes = "fevereiro"

    switch (mes) {
        case "abril":
            console.log("mes 4");
            break;
        
        case "maio":
            console.log("mes 5");
            break;

        case "fevereiro":
            console.log("mes 2");
            break;

        default:
            console.log("nenhum dos casos acima foi atendidos");
    }
*/

/*

    //Estruturas de repetição

    //FOR
    
    //caso 1

    var colors = ["black", "white", "yellow", "green", "blue"];

    for(var i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }

    //caso 2

    for (var i = 0; i <10; i++){
        console.log(i);
    }


    //WHILE

    var i = 0;

    while (i < 10){
        console.log(i);
        i++;
    }

    //DO WHILE

    var i = 1;

    do{
        console.log(i);
        i++;
    } while (i < 10);
*/

/*

    //Funções

    function sayHello(name, lastName) {
        console.log("Hello" + name + "" + lastName)
    }

    sayHello("Felipe", "Silva");



    function sum(a,b) {
        return a + b
    }

    console.log(sum(4,5));

*/

/*

    //Classes

    //criando objeto

    class Book {
        constructor(title, author, pages){
            this.title = title;
            this.author = author;
            this.pages = pages;
        }

        read() {
            return `Estou lendo ${this.title}`
        }
    }

        let book = new Book("Algoritimos para viver", "Brian", 500);
        let otherBook = new Book("Um Exu em Nova York", "Cidinha da Silva", 100);

        console.log(book, otherBook)

    //Herança

        class ITBook extends Book {
            constructor(title, author, pages, technology){
                super(title, author, pages);
                this.technology = technology;

            }
        let itBook = new ITBook("Algoritimos para viver, "Brian", 500, "Algoritimos");

        console.log(itBook.title);
        
    }


    //Encapsulamento

        class Person {
            constructor(name) {
                this._name = name;
            }
            
            get name() {
                return this._name;
            }

            set name(value){
                this._name = value;
            }
        }

        let person = new Person("Felipe");
        person.name = "Rustuh"
        console.log(person.name)

*/

/*

        //Exercicios

        // FizzBuzz
        // Divisivel por 3 => 'Fizz',
        // Divisivel por 5 => 'Buzz',
        // Divisivel por 3 e 5 => 'FizzBuzz',
        // Se nao for um numero => 'Nao e um numero'
        // Se nao for divisivel nem por 3 e nem por 5 => Entrada

    
        let resultado = fizzBuzz();
        console.log(resultado)

        function fizzBuzz(entrada) {
            if (typeof entrada !== 'number')
                return "Nao e um numero";
            if ((entrada % 3 === 0) && (entrada % 5 === 0))
                return "FizzBuzz"
            if (entrada % 3 === 0)
                return "Fizz";
            if (entrada % 5 === 0 )
                return "Buzz";

            return entrada;
        }



            //Reverse a string

            let newStr = "";

            function reverseAString(str){
                for (let i = str.length - 1; i >= 0; i--){
                    newStr += str[i];
                    console.log(newStr);
                }
            }

            let resultado = reverseAString("Hello Gama Academy")


            //Convert Celsius to Fahrenheit


            function convertToFahrenheit(value) {
                return value * 1.8 + 32
            }

            let result = convertToFahrenheit(1)
            console.log(`O valor em Fahrenheit é  ${result})

        */