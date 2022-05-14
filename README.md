# Listas

### Componente mais dinâmico:

- Vamos deixar a lista de opções do nosso componente(`Header cujo propriede é links`) mais dinâmico, para isso criamos um outro componente dentro de `Header` chamado `Menu`, `Menu` pega os atributos(valores) passados pela `propriedade links` faz um map para conseguirmos tratar todos os atributos que vieram da propriedade `links` que é uma propriedade do componente `Header`

### Propriedades:

- Vamos poder passar infinitos atributos para ser tratado em nossa propriedade.

 - Estamos passando uma variavel ou um valor ou alguma coisa de pai para filho,atravês das propriedades, so que a gente ainda n sabe como passar do filho para o pai, veremos isso mais pra frente`(n conseguimos criar algo no Menu e passar para o Header e do Header para o App, logo veremos como fazer isso)`

## aviso:
Menu.js

    const listLinks = props.links.map((link,index) => <li key={index}>{link}</li>)

usamos o atributo `key` porque o React reconhe os elementos que vieram do nosso `map` como uma lista, e uma lista no React precisa ter valores unicos para ajudar a achar esse elemento, `quando for usar algo que retorne algo parecido com uma lista ou o React reclame coloque uma KEY com um valor que seja diferente dos outros elementos irmãos`