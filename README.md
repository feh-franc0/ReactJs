# HOOKS ESTADOS
## manipulando estado usando funcao

como que vamos utilizar o estado se o estado é um propriedade do 'React.Component' e o que temmos é uma funcao pura e a funcao pura n é um objeto que herda de component,entao ela n tem estado,alem de n ter estado outra coisa que é um metodo do 'React.Component' sao os metodos de ciclo de vida que a gente tambem n vai ter acesso na nossa funcao, entao n temos nenhum constructor. Complicado,ne? `É AI QUE ENTRA OS HOOKS`

### Vamos resolver
- `Vamos resolver o problema do estado`

### Ainda nao resolvemos:
- `Ainda não resolvemos o problema de ciclo de vida do nosso componente`

### Hooks,criando estado na nossa funcao

`HOOKS:` Sao uma maneira(como se fosse uma funcao global) que a gente pode utilizar para criar estados

`Uso do Hooks:` Para criar um estado quando estamos criando no formato de funcao precisamos criar duas constantes, exemplo: 

    const [count, setCount] = useState()

Quando quisermos por o valor que é referente ao que queremos no count; usamos count quando quisermos modificar o count usamos o setCount. exemplo para modificar o valor de count usando o setCount:

    setCount(count + 1)


o `useState()` é o tal do hooks, ele é o hooks de estado



