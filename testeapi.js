const form = document.getElementById("formpokemons")

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const pokemonName =
document.getElementById("pokemonName").value

    const pegarPokemon = await
fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName, {
        method: "GET",
});

const response = await pegarPokemon.json()

    const image =
    document.getElementById("pokemonImage")

image.src= response.sprites.front_shiny
})