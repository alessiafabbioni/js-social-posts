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
                postMetaTime.textContent = "4 mesi fa"; // temporaneo: crea funzione che mi calcoli il tempo effetivo

                postMetaData.appendChild(postMetaAuthor);
                postMetaData.appendChild(postMetaTime);

            postMeta.appendChild(postMetaIcon);
            postMeta.appendChild(postMetaData);

        postHeader.appendChild(postMeta);

    
    // Post text
    const postText = document.createElement("div");
    postText.classList.add("post__text");
    postText.textContent = post.content;

    
    // Post image
    const postImage = document.createElement("div");
    postImage.classList.add("post__image");

        //image source
        const img = document.createElement("img");
        img.src = post.media;
        img.alt = "";

        postImage.appendChild(img);

    
    // Post footer + likes
    const postFooter = document.createElement("div");
    postFooter.classList.add("post__footer");

        //js likes
        const likes = document.createElement("div");
        likes.classList.add("likes", "js-likes");

            //likes cta
            const likesCta = document.createElement("div");
            likesCta.classList.add("likes__cta");

                //crea a element
                const likeButton = document.createElement("a");
                likeButton.classList.add("like-button", "js-like-button");
                likeButton.href = "#";
                likeButton.dataset.postid = post.id;

                    //crea icona
                    const likeButtonIcon = document.createElement("i");
                    likeButtonIcon.classList.add("like-button__icon", "fas", "fa-thumbs-up");
                    likeButtonIcon.setAttribute("aria-hidden", "true");

                    //crea label
                    const likeButtonLabel = document.createElement("span");
                    likeButtonLabel.classList.add("like-button__label");
                    likeButtonLabel.textContent = "Mi Piace";

                    likeButton.appendChild(likeButtonIcon);
                    likeButton.appendChild(likeButtonLabel);

                likesCta.appendChild(likeButton);

            //likes counter
            const likesCounter = document.createElement("div");
            likesCounter.classList.add("likes__counter");
            likesCounter.innerHTML = `Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone`;

            likes.appendChild(likesCta);
            likes.appendChild(likesCounter);

        postFooter.appendChild(likes);


    // Appendo tutti i principali
    postElement.appendChild(postHeader);
    postElement.appendChild(postText);
    postElement.appendChild(postImage);
    postElement.appendChild(postFooter);

    // Appendo il post nella sua totalità al container
    container.appendChild(postElement);
});





/* Milestone 2 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del 
bottone e incrementiamo il counter dei likes relativo. Salviamo in un
secondo array gli id dei post ai quali abbiamo messo il like. */

//aggiunta di un event listener sul like button

const likesCtaList = document.querySelectorAll(".likes__cta");
let likedPosts = [];
//il like button cambia colore


likesCtaList.forEach(function(likesCta, index) {
    likesCta.addEventListener("click", function() {
        const likeButton = likesCta.querySelector(".like-button");
        //console.log(likeButton); 
        
        if (likeButton) {
            likeButton.classList.add("like-button--liked");
            posts[index].likes++;
            
            const postContainer = likesCta.closest('.post');
            const likesCounter = postContainer.querySelector('.js-likes-counter');
            likesCounter.textContent = `Piace a ${posts[index].likes} persone`;
            likedPosts.push(posts[index].id);
            console.log("post a cui hai messo like: ", likedPosts); 
        }

});
});

