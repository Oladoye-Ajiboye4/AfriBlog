// Grab form elements used across the editor
const categorySelect = document.getElementById('article-category')
const titleInput = document.getElementById('article-title')
const contentInput = document.getElementById('story-body')
const draftStatus = document.getElementById('draft-status')
const authorBio = document.getElementById('author-bio')
const authorName = document.getElementById('author-name')

// In-memory holders for image data URLs and persisted drafts
let imageUrl = '';
let authorImageUrl = '';
let allData = JSON.parse(localStorage.getItem('articleDrafts')) || []

// Validate and save the current article as a draft in localStorage
const saveDraft = () => {
    if (!titleInput.value || !contentInput.value || !categorySelect.value || !imageUrl || !authorImageUrl || !authorName.value || !authorBio.value) {
        draftStatus.textContent = 'Please fill in all required fields.'
        draftStatus.style.color = 'red'
        setTimeout(() => {
            draftStatus.textContent = ''
        }, 3000)
        return
    }

    draftStatus.textContent = 'Draft saved successfully!'
    draftStatus.style.color = 'green'

    // Draft payload saved under a general list and an individual key
    const draftData = {
        title: titleInput.value,
        content: contentInput.value,
        category: categorySelect.value,
        image: imageUrl,
        authorImage: authorImageUrl,
        authorName: authorName.value,
        authorBio: authorBio.value
    }

    allData.push(draftData)
    localStorage.setItem('articleDrafts', JSON.stringify(allData))
    const draftKey = `articleDraft - ${draftData.title}`
    localStorage.setItem(draftKey, JSON.stringify(draftData))

    setTimeout(() => {
        draftStatus.textContent = ''
        window.location.href = '../category/category.html';
    }, 3000)


    // Helpful debug message during development
    console.log('Draft saved!')
}

// Featured image upload handling: converts selected file to a data URL for preview and storage
const imageInput = document.getElementById('featured-image')
const preview = document.getElementById('featured-preview')
const imageButton = document.querySelector('.image-dropzone')

imageButton.addEventListener('click', () => imageInput.click())

imageInput.addEventListener('change', () => {
    const file = imageInput.files[0]
    if (!file) return

    // Reset the input and prepare preview container
    imageInput.value = ''
    imageInput.style.display = 'none'
    preview.style.width = '100%'
    preview.style.height = '100%'

    const reader = new FileReader()
    reader.onload = () => {
        const dataUrl = reader.result
        imageUrl = dataUrl
        preview.src = dataUrl
        preview.hidden = false
    }
    reader.readAsDataURL(file)
})


// Author profile picture handling (same approach as featured image)
const authorImageInput = document.getElementById('author-image')
const authorPreview = document.getElementById('profile-preview')
const authorImageButton = document.querySelector('.author-profile-preview')

authorImageButton.addEventListener('click', () => authorImageInput.click())

authorImageInput.addEventListener('change', () => {
    const file = authorImageInput.files[0]
    if (!file) return

    authorImageInput.value = ''
    authorImageInput.style.display = 'none'
    authorPreview.style.width = '100%'
    authorPreview.style.height = '100%'

    const reader = new FileReader()
    reader.onload = () => {
        const dataUrl = reader.result
        authorImageUrl = dataUrl
        authorPreview.src = dataUrl
        authorPreview.hidden = false
    }
    reader.readAsDataURL(file)
})


