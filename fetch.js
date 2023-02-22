/* fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json)) */

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


// function loadData() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => console.log(json))
// }

/* 
1.fetch() holo api k call korar akti mddhom.fetch er maddhome amra api ba url 
__k call korte pari.
2.fake api name likhe search dile json placeholder name akti site ashbe sekhane
hajaro api creat kora ace.amra segulo k nia use korte pari.ora server er mto
agoluke creat kore rakce.age amra object creat kortam but json place holder a 
__tara object creat kore amaderke api ba url dia dice.
 3.fetch("akhane api/url dite hobe") qutation er bitore api k dia dite hobe.
4.api k call korar pore se akti promise return korbe.then(), and akti response korbe.
5.response tike.jason() likhe json a convert korte hbe.
6.tarpor.then()er dara aro akti promise return korbe and tar bitore json a convert
kora response k nia amra console.log korle main bodyr data ta pabo.
7.fetch("") kokhono clear or only js file a support kore na so js file tike index.html er
sathe connet kore nite hobe.
 */
function dataLoad() {

    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(json => console.log(json));
}



// user api fetch

function loadData3() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => loadData4(data))
}

function loadData4(data) {
    console.log(data);
}