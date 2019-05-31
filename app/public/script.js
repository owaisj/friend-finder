$(document).ready(() => {
    
    $('#submit').on('click', event => {
        event.preventDefault();
        
        const user = {
            name: $('#name').val(),
            type: $('#type').val()
        }
        
        fetch('api/partners', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(match => {
            alert(`Your partner is ${match.name}`);
            fetch(`https://pokeapi.co/api/v2/pokemon/${match.name.toLowerCase()}/`)
            .then(response => response.json()).then(pokemon => {
                console.log(pokemon);
                $('#partner-image').empty()
                .append(
                    `<img src="${pokemon.sprites.front_default}" />`
                );
            });
        });
    })

});