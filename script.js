// pega valores do HTML
const search = document.querySelector("#search");
const saida = document.querySelector("#saida");

const elements = {
  nome: document.querySelector("#Nome"),
  email: document.querySelector("#Email"),
  salario: document.querySelector("#Salario"),
  estado: document.querySelector("#Estado"),
  empresa: document.querySelector("#Empresa"),
  idade: document.querySelector("#Idade"),
  sexo: document.querySelector("#Sexo"),
  cpf: document.querySelector("#Cpf"),
  error: document.querySelector(".error"),
};

// cria a variavel que seram armazenados os dados
var dados;

fetch("pessoas.json") // acessa o JSON com os dados
    .then(resposta => {
        if (!resposta.ok) throw new Error("Erro fetch."); // report de erro caso ocorra ( não vai ocorrer )
        return resposta.json(); 
    })
    .then(json => dados = json) // salvando os dados na variavel
    .catch(e => console.error(e)) // caso ocorra o erro, sera printado no console

    function pesquisar() { // função principal
        const searchValue = search.value.toLowerCase(); // passa o valor do input para letra minuscula
        for (let pessoa of dados) {
            if (pessoa.nome.toLowerCase() == searchValue || pessoa.email.toLowerCase() == searchValue ||  pessoa.cpf.toLowerCase() == searchValue) { // verifica se o nome colocado no input esta no JSON
                saida.style.display = "flex"; // aparecer/sumir elementos

                elements.nome.style.display = "block";
                elements.email.style.display = "block";
                elements.salario.style.display = "block";
                elements.estado.style.display = "block";
                elements.empresa.style.display = "block";
                elements.idade.style.display = "block";
                elements.sexo.style.display = "block";
                elements.cpf.style.display = "block";

                elements.error.style.display = "none";
        
                elements.nome.innerHTML = `<span>Nome:</span> ${pessoa.nome}`; // printa os dados
                elements.email.innerHTML = `<span>Email:</span> ${pessoa.email}`;
                elements.salario.innerHTML = `<span>Salario:</span> ${pessoa.salario}`;
                elements.estado.innerHTML = `<span>Estado:</span> ${pessoa.estado}`;
                elements.empresa.innerHTML = `<span>Empresa:</span> ${pessoa.empresa}`;
                elements.idade.innerHTML = `<span>Idade:</span> ${pessoa.idade}`;
                elements.sexo.innerHTML = `<span>Sexo:</span> ${pessoa.sexo}`;
                elements.cpf.innerHTML = `<span>CPF:</span> ${pessoa.cpf}`;
                break; // para o codigo ao achar a pessoa
            } else { 
                saida.style.display = "flex"; // aparecer/sumir elementos

                elements.nome.style.display = "none";
                elements.email.style.display = "none";
                elements.salario.style.display = "none";
                elements.estado.style.display = "none";
                elements.empresa.style.display = "none";
                elements.idade.style.display = "none";
                elements.sexo.style.display = "none";
                elements.cpf.style.display = "none";

                elements.error.style.display = "block";

                elements.error.innerHTML = `Pessoa não encontrada!`; // printa erro
            }
        }
    }