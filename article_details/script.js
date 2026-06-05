// Display the article category element (if present)
const categoryElement = document.getElementById('category')

// Update the footer year dynamically
const currentYear = document.getElementById('current-year')
currentYear.textContent = new Date().getFullYear()

// Attempt to read the currently selected article key from localStorage
const currentArticle = localStorage.getItem('currentArticle') || []
if (!currentArticle) {
    // If no article is set, inform the user and redirect to category listing
    alert('No article data found. Redirecting to homepage.')
    setTimeout(() => {
        window.location.href = '../category/category.html';
    }, 3000)
}

// Read the saved article payload using the convention used by the editor
const databaseKey = `articleDraft - ${currentArticle}`
const article = JSON.parse(localStorage.getItem(databaseKey)) || []
if (!article) {
    // Missing article payload: redirect back to index
    alert('No articles found. Redirecting to homepage.')
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 3000)
}

// Element bindings for injecting article data into the DOM
const articleImage = document.getElementById('article-image')
const articleTitle = document.getElementById('article-title')
const articleDescription = document.getElementById('description')
const profileImage = document.getElementById('profile-image')
const authorName = document.getElementById('author-name')
const articleContent = document.getElementById('article-content')

// Insert the article data into the page (fields expected to be present on the saved object)
articleImage.src = article.image
articleTitle.textContent = article.title
articleDescription.textContent = article.description
profileImage.src = article.authorImage
authorName.textContent = article.authorName
articleContent.innerHTML = article.content
