import tech1 from "../../assets/imgTechs/project1.png";
import tech2 from "../../assets/imgTechs/project2.png";
import tech3 from "../../assets/imgTechs/project3.png";
import tech4 from "../../assets/imgTechs/project4.png";

export const addProjects = [
	{
		title: "Projeto Ordem de Serviço",
		description:
			'Com o objetivo de solucionar a dor de uma empresa no qual "organizavam" as informações de ordem de serviço que entravam na empresa em uma planilha de Excel sem formatação alguma e sem conhecimento de manipulação no excel para extrair o melhor da planilha, desenvolvi essa aplicação web para que a empresa registre e tenha total controle das informações de ordem de serviços da empresa, substituindo assim a planilha desorganizada e oferecendo agora uma experiência de interface além de outros recursos a mais. Nessa aplicação é possível gerar gráficos para que a empresa acompanhe facilmente os valores apurados mensais dos trabalhos comparando-os com os dados do ano anterior, liste e filtre facilmente as ordens de serviço. Por falta de conhecimento em usar o excel por parte do dono da empresa, a aplicação desenvolvida foi a melhor solução para esse problema. Acesse a versão demonstração com o email "teste@teste.com" e senha "123456" e veja como ficou essa aplicação.',
		techs:
			"Javascript, ReactJS, Styled-Components, Git, libs complementares e Firebase.",
		img: tech4,
		page: "https://projeto-os.netlify.app/",
		code: "https://github.com/rodrigoamb/projetoos",
	},
	{
		title: "Minha página Portfólio",
		description:
			"Com o objetivo de ter uma página própria para expor outros projetos desenvolvidos por mim, esta página que você está navegando foi 100% criado por mim desde a concepção, escolha da paleta de cores e codificação. Foi utilizado na construção da interface o ReactJS abordando os conceitos de componentes, utilizei o Styled-Components para estilização e libs complementares como AOS e EmailJS. ",
		techs: "Javascript, ReactJS, Styled-Components, Git, libs complementares. ",
		img: tech1,
		page: "https://rodrigodev-portfolio.netlify.app/",
		code: "https://github.com/rodrigoamb/mypage",
	},
	{
		title: "Tic Tac Toe",
		description:
			"Com objetivo de estudar e praticar alguns conceitos de Javascript, elaborei um Projeto de Jogo da Velha. Apesar de ser um projeto simples, aborda conceitos básicos de Javascript como condicionais, funções, eventos, manipulação do DOM e estruturas de repetição",
		techs: "Html, CSS, Vanilla Javascript.",
		img: tech2,
		page: "https://rodrigoamb.github.io/tictactoejs/",
		code: "https://github.com/rodrigoamb/tictactoejs",
	},
	{
		title: "Cards Pokémon",
		description:
			"Com objetivo de estudar e praticar Vanilla JS, o projeto Cards Pokémon tem como principal tarefa consumir uma API. Utilizando async/await e o fetch, é consumido então a PokeAPI que através do retorno das requisições feitas é construído os CARDS em tela.",
		techs: "Html, CSS, Javascript.",
		img: tech3,
		page: "https://rodrigoamb.github.io/pokemonfilter2.0/",
		code: "https://github.com/rodrigoamb/pokemonfilter2.0",
	},
];

