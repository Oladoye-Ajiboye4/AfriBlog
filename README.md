# AfriBlog

AfriBlog is a simple static blog prototype focused on publishing and browsing articles for an African audience. It is a front-end only project (HTML/CSS/JavaScript) meant for demonstration and learning purposes.

## Project description

- **Purpose:** Demo blog with pages for homepage, categories, article details, creating articles, and user profile.
- **Tech stack:** Plain HTML, CSS, and vanilla JavaScript. No build step or backend required.

## Setup instructions

1. Clone the repository or download the project files.

2. Open the project locally. You can either open `index.html` directly in your browser or run a simple static server. Example using Python 3:

```bash
cd afriBlog
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

3. Navigate the site using the links on the pages. No additional configuration is required.

## Files and folders

- `index.html` — Landing page for the site.
- `homepage/` — Contains homepage assets (`script.js`, `style.css`) used by the main entry views.
- `create_article/` — UI for creating a new article (`create_article.html`, `script.js`, `style.css`).
- `category/` — Category listing and navigation (`category.html`, `script.js`, `style.css`).
- `article_details/` — Template for viewing a full article (`article.html`, `script.js`, `style.css`).
- `profile/` — User profile page (`profile.html`, `style.css`).

Each folder contains a standalone HTML file and accompanying scripts/styles. These are static pages intended to show UX flows rather than provide persistent storage.

## Presentation / Demo video

Paste your presentation or demo video link below:

Presentation video: [<INSERT YOUR VIDEO LINK HERE>](https://drive.google.com/file/d/1ea0px_1y2MGVDdwH2NmpVkYcoJh0IAei/view?usp=drive_link)

---

If you'd like, I can also add a CONTRIBUTING or LICENSE file, or wire up a small static server configuration for deployment (GitHub Pages instructions). Let me know which you'd prefer.
