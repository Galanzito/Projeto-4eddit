> Status do Projeto: Concluido :heavy_check_mark:

**Canais de comunicação**:
- [Linkedin](www.linkedin.com/in/guilherme-galan)
- [Github](https://github.com/galanzito)
- <contato@guigalan.com.br>
## Labenu | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.
[![Screenshot_1](https://raw.githubusercontent.com/danilomourelle/Whats4/master/Lbn.png)](https://www.labenu.com.br/)
# Projeto 4eddit
<br>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/galanzito/projeto-4eddit">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/galanzito/projeto-4eddit">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/galanzito/projeto-4eddit">
  <a href="https://github.com/galanzito/projeto-4eddit/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/galanzito/projeto-4eddit">
  </a>
</p>
<br>

#### Escopo do Projeto:

Essa semana, vocês irão implementar uma rede social! Já fizemos vários protótipos de redes sociais, mas nenhuma delas realmente funcional. A ideia agora é fazer uma rede real, com cadastro, login, posts, likes e comentários. Para isso, iremos nos basear no **[reddit.com](https://reddit.com).**

A rede social terá 4 páginas:

### Página de login

![1](https://user-images.githubusercontent.com/3521896/77802249-3ada3280-7059-11ea-9da7-5762c6daf97d.png)

A página de login possui dois campos de texto: email e senha. O comportamento será o mesmo da página de login feita semana passada. Ao fazer o login, o usuário deverá ser redirecionado para a página de feed.

A página possui também um botão "Cadastrar", que leva o usuário para a página de cadastro.

### Página de cadastro

![2](https://user-images.githubusercontent.com/3521896/77802253-3ca3f600-7059-11ea-8bc9-e43db687e62c.png)

A página de cadastro possui 3 campos: nome de usuário, email e senha. O endpoint de cadastro retornará as mesmas informações do endpoint de login. Portanto, após cadastrar, o usuário deverá ser redirecionado para a página de feed, já estando logado (ou seja, com o token salvo no LocalStorage).

### Página de feed (lista de posts)

![3](https://user-images.githubusercontent.com/3521896/77802257-3e6db980-7059-11ea-9978-cc4612e444a1.png)

A página de feed deverá mostrar todos os posts, além de um formulário para a criação de post. O formulário possui apenas o campo de texto. Cada post mostrará o nome de usuário que postou, o texto do post, o número de votos (positivo ou negativo) e o número de comentários. Caso o usuário tenha votado positiva ou negativamente, isso deverá estar indicado. Todas essa informações serão fornecidas pela API.

Quando o usuário clicar em um post, ele deverá ser redirecionado para a página do respectivo post. 

Quando um usuário clicar em votar (positiva ou negativamente), uma requisição deverá ser feita indicando a "direção" do voto. Um voto positivo é indicado com o número `1`. Um voto negativo é indicado com o número `-1`. Para remover um voto, a direção deve ser `0`.

Essa página só pode ser acessada por um usuário logado. Caso o usuário não esteja logado, deverá ser redirecionado para a página de login.

### Página de post

![4](https://user-images.githubusercontent.com/3521896/77802261-40377d00-7059-11ea-8f65-2b305bf5e6f8.png)

A página de um post mostrará o mesmo card de post da página de feed, com o usuário, texto, curtidas e número de comentários. Abaixo, terá um formulário para criação de comentários e os cards de comentários. A estrutura é muito similar à do post, mas comentários não possuem outros comentários dentro deles. A lógica de votos é a mesma do post.

Essa página só pode ser acessada por um usuário logado. Caso o usuário não esteja logado, deverá ser redirecionado para a página de login.

### LINGUAGENS
* HTML
* CSS
* JavaScript
### TECNOLOGIAS/FERRAMENTAS
* Terminal
* Git
* BrowserDevTools
* Vanilla Javascript
* Node.js
* React
* Estilização Avançada com CSS
* Responsividade e adaptação de aplicação web para front.
### O que a plataforma é capaz de fazer :checkered_flag:
:trophy: Simular o funcionamento de uma rede social com criação , curtidas e comentários nas postagens 
### Linguagens e libs utilizadas :books:
- [React](https://pt-br.reactjs.org/): versão 16.12.0
- [Styled Components](https://styled-components.com/): versão 5.0.1
### Como rodar a aplicação :arrow_forward:
No terminal, clone o projeto: 
```
git clone https://github.com/Galanzito/Projeto-4eddit.git
```
Navegue para dentro da raiz do projeto
```
cd
```
Instale as dependências
```
npm i
```
Execute a aplicação
```
npm start
```
Você poderá acessar a aplicação em [localhost:3000](http:localhost:3000)

### RESULTADO FINAL
[Site do projeto](https://fouredditguilherme.web.app/)

