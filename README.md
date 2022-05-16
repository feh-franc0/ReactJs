# Métodos de ciclo de vida

`Ciclo de vida de um componente: `o que acontece quando a gente cria um componenete, quando a gente tira um componente da tela, vamos ver tudo isso e os metodos para isso.

## Ciclos de vida do componenete:

`constructor: `O primeiro ciclo de vida a gente ja viu que é o construtor,entao sempre que a gente cria um novo componente a primeira coisa que o nosso objeto vai fazer é chamar o constructor e ai ele vai executar tudo o que a gente definiu dentro dele.Então o constructor é o primeiro metodo de ciclo de vida de um componente.

`render: `Outro metodo que a gente ja viu é o render, o metodo render vai ser executado toda vez que houver alguma alteração no componente, normalmente pode ser a alteração do estado ou a alteração das propriedades, então se tiver qualquer um desses dois tipos de alteração a gente precisa reemprimir aquele componente na tela, ou seja nosso componenete fica de olho no estado e nas propriedades e tendo alguma alteração ele chama novammente o metodo render que vai desenhar ali na tela novamente aquele componente


`shouldComponentUpdate: `Isso é para saber se o componente deveria atualizar, normalmente ele retorna true, entao quando ele retorna true ele fica da forma padrão dele, mas se colocarmos 'return false;' quer dizer que o componente n deve sofrer update, se ele n sobre update quer dizer o o nosos emtodo render n é atualizado.Se quiser ver como o estado esta mesmo n fazendo update do componenete em si é so voce usar um callback no metodo 'add()'. Quando clicamos no add ele soma no nosso estado, a unica coisa que ele n esta fazendo é o update do proprio componente visualmente. Então como vimos anteriormente toda vez que a gente muda o estado o componenete é atualizado, A NÃO SER QUE a gente coloque o shouldComponentUpdate(){} para retornar false


`componentDidMount: `É outro metodo importante do ciclo de vida de um componente. O metodo componentDidMount(){}, esse metodo vai ser executado depois que o componente for mostrado na tela, ex: ( vamos pegar o estado do contador e por no localStorage do Browse, e pegar o estado do contador do localStorage para persistirmos o estado do nosso componente ). Quando o componente terminar de carregar o componentDidMount sera executado e fara o que foi pedido( no nosso caso ao terminar de carregar ele vai pegar o valor que esta no localStorage e vai por no nosso componente para usarmos esse dado ) `se voce tem algum dado que voce precisa fazer um fetch para um backend esperar um retorno para colocar no seu componenete isso sera feito no componentDidMount()`



`componentWillUnmount: `Esse metodo vai ser chamado sempre que o nosso componente for removido da tela 



## aviso:

    Hoje em dia usamos a forma mais recente do React que é usando o Hooks, apartir de agora iremos ver como fazer isso tudo usando o HOOKS

