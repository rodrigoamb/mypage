import tech1 from '../../assets/imgTechs/project1.png';
import tech2 from '../../assets/imgTechs/project2.png';
import tech3 from '../../assets/imgTechs/project3.png';

export const addProjects = [
  {
    title: 'Minha página Portfólio',
    description:
      'Com o objetivo de ter uma página própria para expor outros projetos desenvolvidos por mim, esta página que você está navegando foi 100% criado por mim desde a concepção, escolha da paleta de cores e codificação. Foi utilizado na construção da interface o ReactJS abordando os conceitos de componentes, utilizei o Styled-Components para estilização e libs complementares como AOS e EmailJS. ',
    techs: 'Javascript, ReactJS, Styled-Components, Git, libs complementares. ',
    img: tech1,
    page: 'https://rodrigodev-portfolio.netlify.app/',
    code: 'https://github.com/rodrigoamb/mypage',
  },
  {
    title: 'Tic Tac Toe',
    description:
      'Com objetivo de estudar e praticar alguns conceitos de Javascript, elaborei um Projeto de Jogo da Velha. Apesar de ser um projeto simples, aborda conceitos básicos de Javascript como condicionais, funções, eventos, manipulação do DOM e estruturas de repetição',
    techs: 'Html, CSS, Vanilla Javascript.',
    img: tech2,
    page: 'https://rodrigoamb.github.io/tictactoejs/',
    code: 'https://github.com/rodrigoamb/tictactoejs',
  },
  {
    title: 'Cards Pokémon',
    description:
      'Com objetivo de estudar e praticar Vanilla JS, o projeto Cards Pokémon tem como principal tarefa consumir uma API. Utilizando async/await e o fetch, é consumido então a PokeAPI que através do retorno das requisições feitas é construído os CARDS em tela.',
    techs: 'Html, CSS, Javascript.',
    img: tech3,
    page: 'https://rodrigoamb.github.io/pokemonfilter2.0/',
    code: 'https://github.com/rodrigoamb/pokemonfilter2.0',
  },
];
