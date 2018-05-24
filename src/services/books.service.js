
export function getBooks() {
    return fetch('http://localhost:3000/knjige')
                .then( response => response.json())
}


export function getBooksById(id) {
    return fetch(`http://localhost:3000/knjige/${id}`)
                .then( response => response.json())
}

export function addBook(book) {
    return fetch('http://localhost:3000/knjige', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    }).then( response => response.json())
        .then(res => console.log("Resolve: " + res))
        .catch(err => console.log("Error: " + err));  
}


export function updateBook(updatedBook, id) {
    return fetch(`http://localhost:3000/knjige/${id}`, {
        method: 'put',
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedBook)
    }).then( response => response.json())
        .then(res => console.log("Resolve: " + res))
        .catch(err => console.log("Error: " + err));  
}


export function deleteBook(id) {
    return fetch(`http://localhost:3000/knjige/${id}`,{
            method: "DELETE"
        }).then( response => response.json())
            .then(res => console.log("Resolve: " + res))
            .catch(err => console.log("Error: " + err));
}