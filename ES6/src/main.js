// Exercícios
// Exercício01
// class User{
//     constructor(email, senha){
//         this.email = email
//         this.senha = senha
//     }
//     isAdmin(){
//         return this.admin === true;
//     }
// }

// class Admin extends User{
//     constructor(){
//         super();
//         this.admin = true;
//     }
// }

// const User1 = new User('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');

// console.log(User1.isAdmin())
// console.log(Adm1.isAdmin())

// //Exercício02
// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
//    ];

// const soIdade = usuarios.map(item => item.idade);
// console.log(soIdade);

// const rocket18 = usuarios.filter((usuarios) => {
//     return (usuarios.idade >= 18 && usuarios.empresa == "Rocketseat")
// });
// console.log(rocket18);

// const google = usuarios.find(item => {
//     return item.empresa == "Google"
// })
// console.log(google);

// const dobro = usuarios.filter((usuarios) =>{
//     return usuarios.idade*2 <= 50
// })
// console.log(dobro)

// //Exercício03
// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.map(item => item + 10);
// console.log(arr2)

// const usuario = { nome: 'Diego', idade: 23 };
// const mostraIdade = (usuario) => { return usuario.idade }
// console.log(mostraIdade(usuario));

// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome = 'Diego', idade = 18) => ({
//     nome, idade 
// })
// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));

// const promise = () => {
//     new Promise((resolve, reject) => {
//         return resolve();
//     })
// }

//Exercício04
// const empresa = {
//     nome: 'Rocketseat',
//     endereco: {
//         cidade: 'Rio do Sul',
//         estado: 'SC',
//     }
// };

// const { nome, endereco: { cidade, estado } } = empresa;
// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC

// const usuario = {
//     nome: "Bruno",
//     idade: 25
// }
// const { nome, idade } = usuario;
// function mostraInfo(usuario) {
//     return `${nome} tem ${idade} anos.`;
// }
// console.log(mostraInfo())

// Exercício05
// const arr = [1, 2, 3, 4, 5, 6];
// const [x, ...y] = arr;
// console.log(x);
// console.log(y);

// const soma = (...params) => {
//     return params.reduce((a, b) => a + b)
// }
// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3

// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//         cidade: 'Rio do Sul',
//         uf: 'SC',
//         pais: 'Brasil',
//     }
// };

// const user2 = { ...usuario, nome: "Gabriel" }

// const user3 = { ...usuario, endereco: { ...usuario.endereco, cidade: "Lontras" } }

// console.log(user2);
// console.log(user3)

// //Exercício06
// const usuario = 'Diego';
// const idade = 23;
// console.log(`O usuário ${usuario} possui ${idade} anos`);

//Exercício07
// const nome = 'Diego';
// const idade = 23;
// const usuario = {
//     nome,
//     idade,
//     cidade: 'Rio do Sul',
// };

// class List{
//     constructor(){
//         this.data = [];
//     }
//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class ToDoList extends List{
//     constructor(){
//         super();
//         this.usuario = "Bruno";
//     }
//     mostraUsuario(){
//         console.log(this.usuario);
//     }
// }

// const MinhaLista = new ToDoList();

// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.add('Novo ToDo');
// }

// MinhaLista.mostraUsuario();

// class Matematica{

//     static soma(a,b){
//         return a + b; 
//     }
// }

// console.log(Matematica.soma(1,2));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// // o 'map' percorre cada item do vetor e executa a ação que pedirmos
// const newArr = arr.map(function (item, index) {
//     return item + index;
// })

// console.log(newArr);

// // o 'reduce' é uma forma de consumir todo o vetor e tranformar em uma única variável, geralmente um número
// const sum = arr.reduce(function (total, next) {
//     return total + next;
// })

// console.log(sum);

// // o 'filter' é pra filtrar os itens do vetor
// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// }) 

// console.log(filter);

// // o 'find' é utilizado para verificar se existe uma informação dentro do array ou se consegue encontrar algo dentro do array
// // retorna true ou false
// const find = arr.find(function(item){
//     return item === 4;
// })

// console.log(find)

// const arr = [1, 3, 4, 5, 6];

// const newArr = arr.map(item => item * 2);

// console.log(newArr);

// const teste = () => ({ nome: "Bruno" });

// console.log(teste());

// const soma = (a = 3, b = 6) => { 
//     return a + b;
// }

// console.log(soma(1));
// console.log(soma())

// const usuario = {
//     nome: "Bruno",
//     idade: 25,
//     endereco: {
//         cidade: "São Paulo",
//         estado: "SP"
//     }
// }
// // const nome = usuario.nome;
// // const idade = usuario.idade;
// // const cidade = usuario.endereco.cidade;

// // const { nome, idade, endereco: { cidade } } = usuario;
// // console.log(nome);
// // console.log(idade);
// // console.log(cidade);

// function mostraNome({ nome, idade }){
//     console.log(nome, idade);
// }
// mostraNome(usuario);

// REST - serve para pegar o 'resto' das propriedade
// const usuario = {
//     nome: "Bruno",
//     idade: 25,
//     empresa: "Safra"
// };
// const { nome, ...resto } = usuario;
// console.log(nome);
// console.log(resto);
// const arr = [1, 2, 3, 4];
// const [a, b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// function soma(a, b, ...params) {
//     return params;
// }
// console.log(soma(1, 3, 5, 6, 7, 8));

//SPREAD - repassa as informações de um obj ou array para outra estrutura de dados
// ou criar um novo obj de usuario com todas as mesmas propriedades de outro, mas só quer trocar uma propriedade
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
// const usuario = {
//     nome: "Bruno",
//     idade: 25,
//     empresa: "Safra"
// }
// const usuario2 = { ...usuario, nome: "Diego" };
// console.log(usuario2);

// const nome = "Bruno";
// const idade = 25;
// const usuario = {
//     nome,
//     idade,
//     empresa: "Safra"
// }
// console.log(usuario)

// // Exercício Módulo02
// // (Código abaixo 'export' fica em outro arquivo)
// export const idade = 23;
// export default class Usuario {
//  static info() {
//  console.log('Apenas teste');
//  }
// }

// import classeUsuario, {idade as idadeUsuario} from './functions';
// classeUsuario.info();
// console.log(idadeUsuario);



// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('Ok') }, 2000)
// });

// // async function executaPromise(){
// //     console.log(await minhaPromise());
// //     console.log(await minhaPromise());
// //     console.log(await minhaPromise());
// // };

// const executaPromise = async () => {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// };
// executaPromise();

// minhaPromise()
//     .then(response => {
//         console.log(response)
//     })
//     .catch(err => {
//         console.log('erro')
//     })

// import axios from 'axios';

// class Api {
//     static async getUserInfo(username) {
//         try {
//             const response = await axios.get(`https://api.github.com/users/${username}`)
//             console.log(response)
//         } catch{
//             console.log('Erro na API')
//         }
//     }
// }
// Api.getUserInfo('brunochj')

// Exercício Módulo03
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// function umPorSegundo() {
//     delay().then(() => {
//         console.log('1s');
//         delay().then(() => {
//             console.log('2s');
//             delay().then(() => {
//                 console.log('3s');
//             });
//         })
//     });
// }
// umPorSegundo();

// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// const umPorSegundo = async () => {
//     await delay(console.log('1s'));
//     await delay(console.log('2s'));
//     await delay(console.log('3s'));

// }
// umPorSegundo();

// import axios from 'axios';
// function getUserFromGithub(user) {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         })
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

// const getUserFromGithub = async (user) => {
//     try {
//         const response = await axios.get(`https://api.github.com/users/${user}`);
//         console.log(response.data);
//     } catch (err) {
//         console.log('Usúario não existe');
//     }
// }

// Api.getUserFromGithub('diego3g');
// Api.getUserFromGithub('diego3g124123');

// class Github {
//     static getRepositories(repo) {
//         axios.get(`https://api.github.com/repos/${repo}`)
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(err => {
//                 console.log('Repositório não existe');
//             })
//     }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');

// class Github {
//     static async getRepositories(repo) {
//         try {
//             const response = await axios.get(`https://api.github.com/repos/${repo}`);
//             console.log(response.data);
//         } catch(err){
//             console.log('Repositório não existe');
//         }
//     }
// }
// Github.getRepositories('joaooliveiradev/starter-rocketseat-javascriptES6');
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');

// const buscaUsuario = usuario => {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         });
// }
// buscaUsuario('diego3g');

// const buscaUsuario = async (user) => {
//     try {
//         const response = await axios.get(`https://api.github.com/users/${user}`)
//         console.log(response.data);
//     }
//     catch(err){
//         console.log('Usuário não existe');
//     }
// }
// buscaUsuario('diego3g');
import api from './api';

class App {
    constructor() {
        // variável repositories vai ser um array que vai guardar todos os repositórios da lista
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list')
        this.registerHandlers();

    }
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true){
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');
            this.formEl.appendChild(loadingEl)
        }else{
            document.getElementById('loading').remove();
        }
    }

    // preventDefault não deixa o form ter o funcionamento comum de recarregar a pág, GET, POST, etc
    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;
        if (repoInput.length === 0)
            return;
            this.setLoading();
        try {
            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });

            this.inputEl.value = '';

            this.render();
        }catch(err){
            alert('O repositório não existe')
        }
        this.setLoading(false);
    }
    render() {
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        })
    }
}

new App();