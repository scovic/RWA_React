

export function getGenres() {
    console.log("api getGenre vrati");
    return fetch('http://localhost:3000/zanr')
                .then( response => response.json());
}

export function addGenre(genre) {
    return fetch('http://localhost:3000/zanr', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(genre)
    }).then( response => response.json())
        .then(res => console.log("Resolve: " + res))
        .catch(err => console.log("Error: " + err)); 
}