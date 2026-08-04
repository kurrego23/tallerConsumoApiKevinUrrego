function TraerLibros(done){
    const results = fetch("https://openlibrary.org/subjects/love.json?limit=15");

    results
    .then(response => response.json())
    .then(data =>{
        done(data)
    })
    .catch(error =>{
        console.log("Error al cargar la pagina:", error);
    });
}
TraerLibros(data =>{
    data.works.forEach(libro =>{

        const imagen = `https://covers.openlibrary.org/b/id/${libro.cover_id}-L.jpg`;

        const article = document.createRange().createContextualFragment(`
            <article>
                <div class="image-container">
                    <img src="${imagen}" alt="${libro.title}">
                </div>
                <span>${libro.title}</span>
                <p>${libro.authors[0].name}</p>
                <p>${libro.first_publish_year}</p>
                <p>${libro.edition_count} Ediciones</p>
            </article>
        `);

        const main = document.querySelector("main");

        main.append(article);

    });
});