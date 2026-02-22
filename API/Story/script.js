// Select elements
const storyContainer = document.querySelector(".story-container");

const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");
const randomBtn = document.getElementById("random-btn");

const resultParagraph = document.getElementById("result");


// Story object
const storyObj = {

    scary: {
        story: "In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.",
        borderColor: "#ee4b2b"
    },

    funny: {
        story: "During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.",
        borderColor: "#f1be32"
    },

    adventure: {
        story: "Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife while solving ancient clues.",
        borderColor: "#acd157"
    }

};


// Display function
function displayStory(genre) {

    if (storyObj.hasOwnProperty(genre)) {

        resultParagraph.textContent = storyObj[genre].story;

        storyContainer.style.borderColor =
            storyObj[genre].borderColor;
    }
}


// Random story function
function displayRandomStory() {

    const genres = Object.keys(storyObj);

    const randomGenre =
        genres[Math.floor(Math.random() * genres.length)];

    displayStory(randomGenre);
}


// Event listeners
scaryStoryBtn.addEventListener("click", () => displayStory("scary"));
funnyStoryBtn.addEventListener("click", () => displayStory("funny"));
adventureStoryBtn.addEventListener("click", () => displayStory("adventure"));

randomBtn.addEventListener("click", displayRandomStory);