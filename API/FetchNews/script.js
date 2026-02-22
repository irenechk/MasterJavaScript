const newsBox = document.getElementById("newsBox");
const tickerText = document.getElementById("tickerText");
const searchInput = document.getElementById("searchInput");

let allArticles = [];

// Different RSS feeds for categories
const feeds = {
    general: "http://feeds.bbci.co.uk/news/rss.xml",
    business: "http://feeds.bbci.co.uk/news/business/rss.xml",
    technology: "http://feeds.bbci.co.uk/news/technology/rss.xml",
    sports: "http://feeds.bbci.co.uk/sport/rss.xml",
    health: "http://feeds.bbci.co.uk/news/health/rss.xml",
    science: "http://feeds.bbci.co.uk/news/science_and_environment/rss.xml"
};


// Load news
async function loadNews(category = "general") {

    newsBox.innerHTML = "<h2>Loading news...</h2>";

    try {

        const rssUrl = feeds[category];

        const response = await fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`
        );

        const data = await response.json();

        allArticles = data.items;

        displayNews(allArticles);

        if (allArticles.length > 0) {
            tickerText.innerText = "Breaking: " + allArticles[0].title;
        }

    } catch (error) {
        newsBox.innerHTML = "<h2>Failed to load news.</h2>";
        console.error(error);
    }
}


// Display news cards
function displayNews(articles) {

    newsBox.innerHTML = "";

    articles.forEach(article => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${article.thumbnail || 'https://via.placeholder.com/300'}">
            <div class="card-content">
                <h3>${article.title}</h3>
                <p>${article.description.replace(/<[^>]*>?/gm, '').substring(0, 120)}...</p>
                <a href="${article.link}" target="_blank">Read More →</a>
            </div>
        `;

        newsBox.appendChild(card);
    });
}


// Search
searchInput.addEventListener("input", () => {

    const text = searchInput.value.toLowerCase();

    const filtered = allArticles.filter(article =>
        article.title.toLowerCase().includes(text)
    );

    displayNews(filtered);
});


// Category buttons
function loadCategory(cat) {
    loadNews(cat);
}


// Auto load default
loadNews("general");