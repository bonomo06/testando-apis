const search = document.getElementById("search")
const results = document.getElementsByClassName("results")
const cep = document.getElementById("cep")

const streetName = document.getElementById("streetName")
const cityName = document.getElementById("cityName")

search.addEventListener('click', async () => {
    

    const fetchCep = await fetch('https://viacep.com.br/ws/$(cep.value)/json/', {
        method: 'GET'
    })


    if(fetchCep.ok) {
        const response = await fetchCep,json()
        results.classlist
    }

    const response = await fetchCep.json()

    console.log(response)

})