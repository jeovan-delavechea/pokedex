/* 1. Criar todas as variáveis necessárias (2)
- 

2. Quando clicar no pokémon da listagem, temos que esconder o cartão pkm aberto e mostrar o cartão correspondente ao que foi selecionado na listagem 

3.Para isso, vamos trabalhar com dois elementos:
- listagem 
- cartão do pokemon

4. as classes a serem removidas do cartão e do botão lateral atual e alocada para os correspondentes ao evento de clique
- aberto 
- ativo

5. ao clicar em um pokémon da listagem, pegamos o id deste para saber qual cartão abrir*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})