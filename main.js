const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];




/* Milestone 1 - Prendendo come riferimento il layout di esempio presente nell’html, 
stampiamo i post del nostro feed, prendendo le informazioni che ci servono dall’array 
di oggetti che già trovate. */

// quindi la prima cosa da fare è appendare tutti gli elementi
// lo faccio con un for each

posts.forEach(post => {

    //Post
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    // Post header
    const postHeader = document.createElement("div");
    postHeader.classList.add("post__header");

        //post meta
        const postMeta = document.createElement("div");
        postMeta.classList.add("post-meta");

            //post meta icon
            const postMetaIcon = document.createElement("div");
            postMetaIcon.classList.add("post-meta__icon");

                //profile-pic
                const profilePic = document.createElement("img");
                profilePic.classList.add("profile-pic");
                profilePic.src = post.author.image || "https://unsplash.it/300/300?image=15";
                profilePic.alt = post.author.name;

                postMetaIcon.appendChild(profilePic);

            //post meta data
            const postMetaData = document.createElement("div");
            postMetaData.classList.add("post-meta__data");

                //post meta author
                const postMetaAuthor = document.createElement("div");
                postMetaAuthor.classList.add("post-meta__author");
                postMetaAuthor.textContent = post.author.name;

                //post meta time
                const postMetaTime = document.createElement("div");
                postMetaTime.classList.add("post-meta__time");
                postMetaTime.textContent = "4 mesi fa"; 

                postMetaData.appendChild(postMetaAuthor);
                postMetaData.appendChild(postMetaTime);

            postMeta.appendChild(postMetaIcon);
            postMeta.appendChild(postMetaData);

        postHeader.appendChild(postMeta);

/*Milestone 2 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del 
bottone e incrementiamo il counter dei likes relativo. Salviamo in un
secondo array gli id dei post ai quali abbiamo messo il like.*/