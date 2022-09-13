import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollService } from 'src/app/shared/services/scroll.service';

interface Section {
  id: string;
  name: string;
  html: string;
  section?: Section[];
}
@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss']
})
export class DocComponent implements OnInit {

  sections: Section[] = [
    {
      id: 'intro',
      name: 'Introdução',
      html: `
      <h2 class="mat-title"> Introdução </h2>

      <span class="paragraph"> Olá! Este projeto tem o intuito de ajudar pessoas que, assim como eu, gostam das possibilidades oferecidas pelo Angular Material mas, ao mesmo tempo, sofrem bastante ao tentar trabalhar com a estilização de seus componentes. </span>

      <span class="paragraph"> Apesar de possuir uma extensa e rica Documentação, alguns dos conceitos apresentados nela me pareceram pessoalmente bastante confusos, sem contar que toda a parte de Tipografia simplesmente não funcionou muito bem comigo ( por favor, alguém me explique o que estou fazendo de errado ). Devo ressaltar que não sou fluente em inglês, as vezes a tradução que faço ou que pego da internet pode ter algumas inconsistências. Em todo caso, recomendo ver a documentação original do Angular Material. Você pode acessá-la pelo link abaixo. </span>

      <a href="https://material.angular.io/guides"> Angular-Material: Documentação. </a>

      <span class="paragraph"> Este projeto consiste em uma pré-configuração do Angular Material em seu modo Customizado, de uma forma que, em minha opinião, seja mais simples de separar e usufruir de seus recursos. </span>
      `
    },
    {
      id: 'init',
      name: 'Iniciando o Me.project',
      html: `<h2 class="mat-title"> Iniciando o Me.project </h2>

      <span class="paragraph"> Este repositório é tão somente um Projeto Angular. Você pode cloná-lo e instalar as dependências com um <code class="code-txt">npm install</code> ou outro gerenciador de sua preferência. </span>

      <span class="paragraph"> O nome do projeto está definido como <span class="evidence">"Me.project".</span> Dependendo de sua IDE, deve ser fácil realizar um busca e substituir todas as ocorrências por outro nome para seu projeto. </span>

      <span class="paragraph"> Você também pode baixar especificamente a pasta <code class="code-txt">src/styles</code>, onde estão armazenados os arquivos de configuração SCSS e incluí-la em seu projeto. Se optar por este caminho, inclua o arquivo <code class="code-txt">material.scss</code> alocado na pasta <code class="code-txt">src/styles/material</code> em seu arquivo de configuração <code class="code-txt">angular.json</code> como arquivo de configuração do estilo global. Você ainda pode baixar o módulo de importação e exportação dos módulos do Angular Material na pasta <code class="code-txt">src/app/shared/material</code>.</span>`
    },
    {
      id: 'files',
      name: 'Entendendo os Arquivos e Diretórios',
      html: `<h2 class="mat-title"> Entendendo os Arquivos e Diretórios </h2>

      <span class="paragraph"> Como dito anteriormente, os arquivos principais deste projeto estão alocados na pasta <code class="code-txt">src/styles.</code> Dentro deste diretório haverá um arquivo chamado <code class="code-txt">material/material.scss</code> que será o arquivo global de estilização com as configurações do Angular Material. no mesmo diretório haverão duas pastas: <span class="evidence">"layout"</span> e <span class="evidence">"settings"</span>.</span>

      <span class="paragraph"> Na pasta de layout se encontram as Paletas de Cores, a Tipografia e um arquivo <code class="code-txt">material-icons.scss</code>. Já na pasta de settings se encontram arquivos de configuração para as Paletas de Cores e a Tipografia.</span>`
    },
    {
      id: 'palettes',
      name: 'Paletas',
      html: `<h2 class="mat-title"> Paletas </h2>

      <span class="paragraph"> Existem dois arquivos de paletas de cores na pasta layout: "primary.scss" e "accent.scss"; estes dois arquivos são importados no arquivo de configuração <code class="code-txt">palette.config.scss"</code>. Você ainda pode criar um terceiro arquivo de paleta "warn.scss", mas nesse caso, lembre-se de importa-lo no arquivo de configuração.</span>

      <span class="paragraph"> Para saber mais sobre "Paletas de Cores" do Angular Material acesse: </span>

      <a href="https://material.angular.io/guide/theming"> Angular Material: Temas. </a>

      <span class="paragraph"> Você pode usar a ferramenta do Material Design para gerar suas Paletas através do link: </span>

      <a href="https://material.io/design/color/the-color-system.html#tools-for-picking-colors"> Material Design: Gerar Paletas de Cores Customizada </a>`,
      section: [
        {
          id: 'access',
          name: 'Acessando Cores',
          html: `<h3 class="mat-subheading-1"> Acessando Cores </h3>

          <span class="paragraph"> Apesar de o próprio Angular Material fornecer uma função get para as cores, achei bastante trabalhoso de usar, isso porque, além de possuir um nome bastante extenso, para quem usa Paletas Customizadas, será necessário sempre que se quiser usar esta função, importar não só as configurações do Angular Material mas também sua Paleta de Cores, a depender de onde você a armazenou, o que resultaria num código longo como: </span>

          <span class="code-box __flex/column">
            <span class="paragraph"> @use '@angular/material' as mat; </span>
            <span class="paragraph"> @use 'src/styles/material/material' as base; <br><br> .class { </span>
            <span class="paragraph tab"> background-color: mat.get-color-from-palette(base.$primary, 500); </span>
            <span class="paragraph"> } </span>
          </span>

          <span class="paragraph"> Então criei minha própria função get que funciona mais diretamente. Você pode usá-la em qualquer arquivo SCSS importando o arquivo de configuração de paletas: </span>

          <span class="code-box __flex/column">
            <span class="paragraph"> @use 'src/styles/material/settings/palette.config' as color; <br><br> .class { </span>
            <span class="paragraph tab"> background-color: color.getColor(); </span>
            <span class="paragraph"> } </span>
          </span>

          <span class="paragraph">
            A função <code class="code-txt">getColor()</code> sem nenhum parâmetro irá importar automaticamente a cor de número 500 da paleta primária. Você pode alterar somente o número da cor a ser importada da paleta primária ou a cor e a paleta a ser usada: <code class="code-txt">getColor(300)</code>, <code class="code-txt">getColor(500, accent)</code>.
          </span>

          <span class="paragraph"> Da mesma forma, é possível invocar uma cor de contraste com a função <code class="code-txt">getContrast()</code>. Esta função funcionará de forma idêntica a anterior, porém invocando a cor de contraste em vez da cor real.</span>

          <span class="paragraph"> Você ainda pode invocar o mixin <code class="code-txt">setThemeConfig()</code>, que irá adicionar um background-color e automaticamente definir a cor de texto como seu respectivo contraste para os componentes filhos. O mixin funciona da mesma forma que as duas funções anteriores podendo receber até dois parâmetros, e tendo a cor 500 da paleta primária como base; </span>`
        }
      ]
    },
    {
      id: 'types',
      name: 'Tipografias',
      html: `<h2 class="mat-title"> Tipografias </h2>

      <span class="paragraph"> Os arquivos referentes a tipografia funcionam similar aos de paletas, com exceção de que existe apenas uma tipografia neste projeto. Pelo que entendi na documentação do Angular Material, você pode usar mais de uma tipografia, mas para isso será preciso chamar a segunda dentro de uma classe com o <span class="evidence">"mixin"</span> <code class="code-txt">typography-level()</code> do <code class="code-txt">@angular/material</code>. Honestamente, tentei fazê-lo mas não consegui, mas também não realmente precisei de mais de uma tipografia num mesmo projeto até hoje. </span>

      <span class="paragraph"> Devo incluí-lo isso numa próxima atualização. </span>

      <span class="paragraph"> Você pode ler mais sobre as configurações de tipografia do Angular Material pelo link: </span>

      <a href="https://material.angular.io/guide/typography"> Angular Material: Tipografias </a>`
    },
    {
      id: 'mat-ico',
      name: 'Material Icons',
      html: `<h2 class="mat-title"> Material-Icons </h2>

      <span class="paragraph"> No arquivo <code class="code-txt">layout/material-icons.scss</code> eu adicionei minhas configurações pessoais de importação dos ícones do <span class="evidence">"Materia Icons"</span> que, através de classes CSS, permitem alternar o <span class="evidence">"weight"</span> e o <span class="evidence">"fill"</span> dos ícones. </span>

      <span class="paragraph"> Para invocar ícones: </span>

      <span class="list __flex/column">
        <span class="line __flex/column">
          <span class="paragraph"> da forma padrão: </span>
          <code class="code-txt"> '\<i class="mat-ico"> person \</i>'; </code>
        </span>
        <span class="line __flex/column">
          <span class="paragraph"> preenchidos: </span>
          <code class="code-txt"> '\<i class="mat-ico/filled"> person \</i>'; </code>
        </span>
        <span class="line __flex/column">
          <span class="paragraph"> especificando peso de fonte (varia entre 100 - 700): </span>
          <code class="code-txt"> '\<i class="mat-ico/700"> person \</i>'; </code>
        </span>
        <span class="line __flex/column">
          <span class="paragraph"> preenchidos e especificando peso de fonte: </span>
          <code class="code-txt"> '\<i class="mat-ico/filled/700"> person \</i>'. </code>
        </span>
      </span>

      <span class="paragraph"> Para saber mais sobre o Material Icons, acesse: </span>

      <a href="https://developers.google.com/fonts/docs/material_symbols"> Material-Icons: Guia de Desenvolvimento. </a>`
    },
    {
      id: 'scss',
      name: 'SCSS',
      html: `<h2 class="mat-title"> SCSS </h2>

      <span class="paragraph"> Desde que comecei a utilizar o SCSS, passei a perceber pouco a pouco o poder desta ferramenta. Venho aprendendo muito a respeito ultimamente, principalemnte por causa deste projeto e, espero em breve poder gerar algum conteúdo somente a respeito disso. </span>

      <span class="paragraph"> Também recomendo uma leitura na Documentação, é bastante rica e intuítiva: </span>

      <a href="https://sass-lang.com/documentation/"> Sass: Documentação. </a>

      <span class="paragraph"> Adicionei algumas configurações de classe CSS pessoais também no arquivo "src/styles.scss". </span>

      <span class="list __flex/column">
        <span class="line __flex/column">
          Para <code class="code-txt"> display: flex</code>
          <code class="code-txt"> '\<span class="__flex"> person \</span>;'; </code>
        </span>
      </span>

      <span class="paragraph"> Todos os proximos invocam <code class="code-txt">display: flex</code> e outra configuração: </span>

      <span class="list __flex/column">
        <span class="line __flex/column">
          Para <code class="code-txt">flex-direction: column</code>
          <code class="code-txt"> '\<span class="__flex/column">\</span>;'; </code>
        </span>
        <span class="line __flex/column">
          Para <code class="code-txt">align-itens: center; justify-content: center</code>
          <code class="code-txt"> '\<span class="__flex/centred">\</span> (varia entre 100 - 700);'; </code>
        </span>
        <span class="line __flex/column">
          Para <code class="code-txt">flex: 1 1 auto</code>
          <code class="code-txt"> '\<span class="__flex/auto">\</span>.'; </code>
        </span>
      </span>

      <span class="paragraph"> Da mesma forma como os ícones explicados anteriormente, as palavras chaves podem ser agrupadas em cascata separadas por "/", invocando assim todas as configurações de classe: </span>

      <span class="list __flex/column">
        <span class="line __flex/column">
          <code class="code-txt"> '\<span class="__flex/column/centred/auto">\</span>' </code>
        </span>
      </span>

      <span class="paragraph">
        <strong>OBS:</strong> Você pode criar qualquer conjunto de palavras chaves para realizar invocações específicas, mas a ordem apresentada deve sempre ser seguida para que as invocações funcionem.
      </span>`
    },
    {
      id: 'conclusion',
      name: 'Conclusão',
      html: `<h2 class="mat-title"> Conclusão </h2>

      <span class="paragraph"> Este é um projeto simples, espero mantê-lo atualizado e ajudar algumas pessoas com isso. </span>

      <span class="paragraph"> Obrigado por ter lido até aqui! </span>`
    }
  ];

  @ViewChild('docs', { static: true }) docs: ElementRef<HTMLElement>;
  constructor(
    private scrollService: ScrollService
  ) { }

  ngOnInit(): void {
  }

  onMoveToTop() {
    this.scrollService.smooth(0, 500, this.docs);
  }

}
