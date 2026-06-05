const categoryElement = document.getElementById('categoryType')

const db = JSON.parse(localStorage.getItem('articleDrafts')) || []
let allFilteredArticles = []

const articleImage = document.getElementById('article-image')
const articleTitle = document.getElementById('article-title')
const articleDescription = document.getElementById('description')
const profileImage = document.getElementById('profile-image')
const authorName = document.getElementById('author-name')
const userBlogsSection = document.getElementById('userBlogs')
const emptyBlogMessage = document.getElementById('empty-blog')

const currentYear = document.getElementById('current-year')
currentYear.textContent = new Date().getFullYear()

console.log('Database:', db)
const loadCategory = (userCategory) => {
    const filteredArticles = db.filter(article => article.category === userCategory.toLowerCase())
    console.log('Filtered Articles:', filteredArticles)
    allFilteredArticles = filteredArticles
    if (filteredArticles.length === 0) {
        userBlogsSection.innerHTML = ` <div class="category-intro">User Blog</div>
            <div id="empty-blog">No user blogs available.</div>`
        emptyBlogMessage.style.display = 'block'
        return
    }


    allFilteredArticles.forEach(article => {
        if (!article.image) return
        emptyBlogMessage.style.display = 'none'

        userBlogsSection.innerHTML = `
        <div class="category-intro">User Blog</div>
            <p id="intro-subtext">Below are the created user blogs</p>
            <header class="category-hero">

                <h1 id="categoryType">${userCategory}</h1>
                <p>
                    Exploring the profound depth and rhythmic prose of African storytellers. From ancient oral
                    traditions to contemporary novels shaping the modern narrative landscape.
                </p>
            </header>

            <section class="article-grid" aria-labelledby="category-heading">
                <h2 id="category-heading" class="sr-only">${userCategory} articles</h2>

                <article class="category-card" id="fiction">
                    <figure class="card-media">
                        <img src="${article.image}"
                            alt="Vintage typewriter on a wooden desk under warm light." id="article-image">
                    </figure>

                    <h3 id="article-title">${article.title}</h3>
                    <p class="card-summary" id="description">
                        ${article.content.substring(0, 150)}...
                    </p>

                    <footer class="card-meta">
                        <img src="${article.authorImage}"
                            alt="Author portrait for ${article.authorName}" id="profile-image">
                        <p>By <span id="author-name">${article.authorName}</span></p>
                        <button id="read-more" onclick="saveCurrentArticle('${article.title}')">Read more...</button>
                    </footer>
                </article>
                
        `
    })
}
        

const saveCurrentArticle = (articleTitle) => {
    localStorage.setItem('currentArticle', articleTitle)
    setTimeout(() => {
        window.location.href = '../article_details/article.html'
    }, 1000)
}