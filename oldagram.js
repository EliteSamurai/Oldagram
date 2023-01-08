const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const container = document.getElementById('container')

for (let post of posts) {
    container.innerHTML += `<div class="post">
                            <div class="post-head">
                            <img class="img" src="${post.avatar}">
                            <div>
                            <h5>${post.name}</h5>
                            <p>${post.location}</p>
                            </div>
                            </div>
                            <img class="postimage" src="${post.post}">
                                <div class="icons">
                                <img src="images/icon-heart.png">
                                <img src="images/icon-comment.png">
                                <img src="images/icon-dm.png">
                                </div>
                            <h5 class="likes">${post.likes} likes</h5>
                            <div class="user-info">
                            <h5>${post.username}</h5>
                            <p>${post.comment}</p>
                            </div>
                            </div>
                            `  
}

