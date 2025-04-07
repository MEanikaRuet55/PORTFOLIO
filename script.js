
const toggleBtn = document.getElementById("dark-mode-toggle");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

  
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

const quotes = [
    '"And that there is not for man except that [good] for which he strives" (Surah An-Najm: 39)',
    '"If you are grateful, I will surely increase you [in favor].": (Quran 14:7)' ,
    '“When a man says I cannot, he has made a suggestion to himself. He has weakened his power of accomplishing that which otherwise would have been accomplished.”-Mohammad Ali',
    '"The only person you are destined to become is the person you decide to be." — Ralph Waldo Emerson',
    '"Indeed, with hardship [will be] ease.": (Quran 94:6) ',
    '“I find that the harder I work, the more luck I seem to have.” –Thomas Jefferson',
    '“And whoever fears Allah – He will make for him a way out and will provide for him from where he does not expect. And whoever relies upon Allah – then He is sufficient for him…"[Quran: Surah At-Talaq 65: Ayahs 2-3 ]'
];

let quoteIndex = 0;
const quoteText = document.getElementById("quote-text");
const nextQuoteBtn = document.getElementById("next-quote");
const prevQuoteBtn = document.getElementById("prev-quote");

function changeQuote(direction) {
    quoteText.style.opacity = 0; 

    setTimeout(() => {
        quoteIndex = (quoteIndex + direction + quotes.length) % quotes.length;
        quoteText.textContent = quotes[quoteIndex];
        quoteText.style.opacity = 1; 
    }, 500);
}

setInterval(() => changeQuote(1), 5000);

nextQuoteBtn.addEventListener("click", () => changeQuote(1));
prevQuoteBtn.addEventListener("click", () => changeQuote(-1));

document.querySelectorAll(".details-btn").forEach(button => {
    button.addEventListener("click", function () {
        const details = this.parentElement.querySelector(".project-details");
        details.style.display = details.style.display === "block" ? "none" : "block";
    });
});

