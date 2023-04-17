
/* Esercizio EXTRA 3 */
let twitter = document.querySelector("div.p-4:last-of-type ol li:first-of-type+li");
twitter.remove();



/* Esercizio EXTRA 2. */
let removeNode = document.querySelector("div.jumbotron");
let button = document.querySelector("div.jumbotron a[class^='font']");

button.addEventListener("click", ()=>{
    removeNode.remove();
})

/* Esercizio EXTRA 3. */
let authors = document.querySelectorAll("p[class$='meta'] a");
for (const author of authors) {
    author.addEventListener("mouseenter", (event) =>{
        alert("L'autore è  " + event.target.innerText);
    })
    
}