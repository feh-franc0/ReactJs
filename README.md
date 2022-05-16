# Estados

Vamos aprender sobre estados usando classes.
Hoje em dia é usado o `Hooks` mas vamos ver a forma antiga e depois aprender a forma nova que é usando o Hooks

outra coisa que existe no React tão importante quanto as propriedades são os `estados`

## Estados como funciona:

`Estado: `
    
    vai mudar depois que a pagina ja foi carregada, como o componente esta naquele momentos, pode mudar.

`Como funciona o estado: `

    o estado não pode ser mudado diretamente,sempre que quiser mudar o estado é preciso usar o setState().
    Toda a logica de manipulacao da tela dentro do React sendo feita por algum input do usuario vai ser feita atravez da alteracao do estado daquele componente
    Sempre que a gente quiser modificar alguma coisa na tela a gente vai modificar o estado que controla aquela coisa.
    So no construtor que vamos poder colocar que o this.state = {alguma coisa}, em qualquer outro lugar vamos precisar usar o this.setState, pq no construtor a gente esta se referenciando e fora dele vamos modificar-lo
