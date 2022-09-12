
# Custom Angular Material
Olá! Este projeto tem o intuito de ajudar pessoas que, assim como eu, gostam das possibilidades oferecidas pelo Angular Material mas, ao mesmo tempo, sofrem bastante ao tentar trabalhar com a estilização de seus componentes.

Apesar de possuir uma extensa e rica Documentação, alguns dos conceitos apresentados nela me pareceram bastante confusos, sem contar que toda a parte de Tipografia simplesmente não funcionou muito bem comigo (por favor, alguém me explique o que estou fazendo de errado). Devo ressaltar que não sou fluente em inglês, as vezes a tradução que faço ou que pego da internet pode ter algumas inconsistências. Em todo caso, recomendo ver a documentação original, você pode acessá-la pelo link abaixo.

[Angular-Material: Documentação](https://material.angular.io/guides).

Este projeto consiste em uma pré-configuração do Angular Material em seu modo Customizado, de uma forma que, em minha opinião, seja mais simples de separar e usufruir de seus recursos.

## Como Usar
Este repositório é tão somente um Projeto Angular. Você pode cloná-lo e instalar as dependências com um "`npm install`" ou outro gerenciador de sua preferência.

O nome do projeto está definido como _"Project-Custom-Angular-Material"_. Dependendo de sua IDE, deve ser fácil realizar um busca e substituir todas as ocorrências por outro nome para seu projeto.

Você também pode baixar especificamente a pasta "`src/styles`", onde estão armazenados os arquivos de configuração SCSS e incluí-la em seu projeto. Se optar por este caminho, inclua o arquivo "`material.scss`" alocado na pasta "`src/styles/material`" em seu arquivo de configuração "`angular.json`" como arquivo de configuração do estilo global. Você ainda pode baixar o módulo de importação e exportação dos módulos do Angular Material na pasta "`src/app/shared/material`".

## Os Arquivos
Como dito anteriormente, os arquivos principais deste projeto estão alocados na pasta "`src/styles`". Dentro deste diretório haverá um arquivo chamado "`material/material.scss`" que será o arquivo global de estilização com as configurações do Angular Material. no mesmo diretório haverão duas pastas: "`layout`" e "`settings`".

Na pasta de layout se encontram as Paletas de Cores, a Tipografia e um arquivo "`material-icons.scss`".

Já na pasta de settings se encontram arquivos de configuração para as Paletas de Cores e a Tipografia.

## Palettes

Existem dois arquivos de paletas de cores na pasta layout: "`primary.scss`" e "`accent.scss`"; estes dois arquivos são importados no arquivo de configuração "`palette.config.scss`". Você ainda pode criar um terceiro arquivo de paleta "`warn.scss`", mas nesse caso, lembre-se de importa-lo no arquivo de configuração.

Para saber mais sobre _"Paletas de Cores"_ do Angular Material acesse:
[Angular Material: Temas](https://material.angular.io/guide/theming).

Você pode usar a ferramenta do Material Design para gerar suas Paletas através do link:
[Material Design: Gerar Paletas de Cores Customizada](https://material.io/design/color/the-color-system.html#tools-for-picking-colors)

### Acessando suas Cores
Apesar de o próprio Angular Material fornecer uma função `get` para as cores, achei bastante trabalhoso de usar, isso porque, além de possuir um nome bastante extenso, para quem usa Paletas Customizadas, será necessário sempre que se quiser usar esta função, importar não só as configurações do Angular Material mas também sua Paleta de Cores, a depender de onde você a armazenou, o que resultaria num código longo como:
```
@use '@angular/material' as mat;
@use 'src/styles/material/material' as base;

.class {
	background-color: mat.get-color-from-palette(base.$primary, 500);
}
```
Então criei minha própria função `get` que funciona mais diretamente. Você pode usá-la em qualquer arquivo SCSS importando o arquivo de configuração de paletas:
``` 
@use 'src/styles/material/settings/palette.config' as color;

.class {
	background-color: color.getColor();
}
```

A função `getColor()` sem nenhum parâmetro irá importar automaticamente a cor de número 500 da paleta primária. Você pode alterar somente o número da cor a ser importada da paleta primária ou a cor e a paleta a ser usada:  `getColor(300)`, `getColor(500, accent)`.

Da mesma forma, é possível invocar uma cor de contraste com a função `getContrast()`. Esta função funcionará de forma idêntica a anterior, porém invocando a cor de contraste em vez da cor real.

Você ainda pode invocar o _mixin_ `setThemeConfig()`, que irá adicionar um background-color e automaticamente definir a cor de texto como seu respectivo contraste para os componentes filhos. O _mixin_ funciona da mesma forma que as duas funções anteriores podendo receber até dois parâmetros, e tendo a cor 500 da paleta primária como base;

## Typographys
Os arquivos referentes a tipografia funcionam similar aos de paletas, com exceção de que existe apenas uma tipografia neste projeto. Pelo que entendi na documentação do Angular Material, você pode usar mais de uma tipografia, mas para isso será preciso chamar a segunda dentro de uma classe com o _"mixin"_  `typography-level()` do "`@angular/material`". Honestamente, tentei fazê-lo mas não consegui, mas também não realmente precisei de mais de uma tipografia num mesmo projeto até hoje.

Devo incluí-lo isso numa próxima atualização.

Você pode ler mais sobre as configurações de tipografia do Angular Material pelo link:
[Angular Material: Tipografias](https://material.angular.io/guide/typography)

## Material-Icons
No arquivo "`layout/material-icons.scss`" eu adicionei minhas configurações pessoais de importação dos ícones do _"Materia Icons"_ que, através de classes CSS, permitem alternar o "`weight`" e o "`fill`" dos ícones.

Para invocar ícones:
* da forma padrão: 
	* `<i class="mat-ico"> person </i>`;
* preenchidos:
	* `<i class="mat-ico/filled"> person </i>`;
* especificando peso de fonte (varia entre 100 - 700):
	* `<i class="mat-ico/700"> person </i>`;
* preenchidos e especificando peso de fonte:
	* `<i class="mat-ico/filled/700"> person </i>`.

Para saber mais sobre o Material Icons, acesse:
[Material-Icons: Guia de Desenvolvimento](https://developers.google.com/fonts/docs/material_symbols).

## SCSS
Desde que comecei a utilizar o SCSS, passei a perceber pouco a pouco o poder desta ferramenta. Venho aprendendo muito a respeito ultimamente, principalemnte por causa deste projeto e, espero em breve poder gerar algum conteúdo somente a respeito disso.

Também recomendo uma leitura na Documentação, é bastante rica e intuítiva:

* [Sass: Documentação](https://sass-lang.com/documentation/).

Adicionei algumas configurações de classe CSS pessoais também no arquivo "`src/styles.scss`".

* Para `display: flex`: `<span class="__flex"> person </span>`;

Todos os proximos invocam `display: flex` e outra configuração:

* Para `flex-direction: column`: `<span class="__flex/column"></span>`;
* Para `align-itens: center; justify-content: center`: `<span class="__flex/centred"></span>` (varia entre 100 - 700);
* Para `flex: 1 1 auto`: `<span class="__flex/auto"></span>`.
 
Da mesma forma como os ícones explicados anteriormente, as palavras chaves podem ser agrupadas em cascata separadas por "`/`", invocando assim todas as configurações de classe:

* `<span class="__flex/column/centred/auto"></span>`
OBS: Você pode criar qualquer conjunto de palavras chaves para realizar invocações específicas, mas a ordem apresentada deve sempre ser seguida para que as invocações funcionem.

## Conclusão

Este é um projeto simples, espero mantê-lo atualizado e ajudar algumas pessoas com isso.

Obrigado por ter lido até aqui!
