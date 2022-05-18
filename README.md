# HOOKS EFFECT
## manipulando estado usando funcao

como que vamos utilizar o estado se o estado é um propriedade do 'React.Component' e o que temmos é uma funcao pura e a funcao pura n é um objeto que herda de component,entao ela n tem estado,alem de n ter estado outra coisa que é um metodo do 'React.Component' sao os metodos de ciclo de vida que a gente tambem n vai ter acesso na nossa funcao, entao n temos nenhum constructor. Complicado,ne? `É AI QUE ENTRA OS HOOKS`

### Vamos resolver
- `Vamos resolver o problema de ciclo de vida do nosso componente`

### Hooks,de ciclo de vida do nosso componente

`hooks do ciclo de vida do nosso componente:` useEffect()


`HOOKS:` Sao uma maneira(como se fosse uma funcao global) que a gente pode utilizar para criar estados


`Uso do Hooks useEffect(()={ }):` ele vai ser chamado e duas ocasioes, quando meu componente for criado(ou seja,equivalente ao: `componentDidMount()` ) e tambem toda vez que ele for atualizado(ou seja, equivalente ao: `componentDidUpdate()`).Para fazer com que o useEffect execute apenas um vez quando a nossa funcao for criada vamos criar o useEffect e no final dele vamos por um array vazio( exemplo: useEffect(( )=>{ },[ ]) ) , esse array é um array de quais as variaveis o meu useEffect esta de olho para saber se modificar tem que executar ele e etc. Para fazermos algo equivalente ao `componentWillUnmount()`, vamos usar o nosso useEffect com array vazio e dentro da funcao que ele esta executando vamos fazer com que ele retorne uma outra funcao, ao fazer isso essa funcao que ele esta retornando vai ser executada so quando o nosso componente for sair-da-tela/for-destruido

    const [count, setCount] = useState()

Quando quisermos por o valor que é referente ao que queremos no count; usamos count quando quisermos modificar o count usamos o setCount. exemplo para modificar o valor de count usando o setCount:

    setCount(count + 1)


o `useState()` é o tal do hooks, ele é o hooks de estado



