const quoteContainer = document.getElementById("quote-container");
const quoteContent = document.getElementById("quote-content");
const quoteAuthor = document.getElementById("quote-author");
const twitterButton = document.getElementById("twitter");
const whatsappButton = document.getElementById("whatsapp");
const newButton = document.getElementById("new-quote");
const loader = document.getElementById("loader");

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function complete() {
    if (!loader.hidden) {
        loader.hidden = true;
        quoteContainer.hidden = false;
    }
}
async function getQuote() {
    loading()
    const url = "http://api.quotable.io/random";
    try {
        const r = await fetch(url);
        const data = await r.json();
        quoteAuthor.innerText = data.author;
        // data.length = 150;
        if (data.length > 120) {
            // console.log(quoteContent);
            // console.log(quoteContent.classList.add("long-quote"));
            // console.log(quoteContent.classList);
            quoteContent.classList.add("long-quote");
        }
        else {
            quoteContent.classList.remove("long-quote");
        }
        quoteContent.innerText = data.content;
        complete()
    } catch (e) {
        console.log(Error);
    }
}
function tweetQuote() {
    const tweetURL = `https://twitter.com/intent/tweet?text=${quoteContent.innerText}%0a  - ${quoteAuthor.innerText}`;
    window.open(tweetURL, '_blank');
}
function wappQuote() {
    // const tweetURL = `https://instagram.com/send?text=${quoteContent.innerText}%0a - ${quoteAuthor.innerText}`;
    const tweetURL = `https://api.whatsapp.com/send?text=${quoteContent.innerText}%0a - ${quoteAuthor.innerText}`;

    window.open(tweetURL, '_blank');
}
newButton.addEventListener("click", getQuote);
twitterButton.addEventListener("click", tweetQuote);
whatsappButton.addEventListener("click", wappQuote);
getQuote();

