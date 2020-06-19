const Quotes = [
    {
        name: "Stephen King",
        qoute: "Get busy living or get busy dying",
    },
    {
        name: "John Kennedy",
        qoute: "Those who dare to fail miserably can acheive greately",
    },
    {
        name: "Abraham Lincoln",
        qoute: "I'm a successful person but not all are.",
    },
    {
        name: "Leonardo",
        qoute: "abc def ghi jkl",
    },
    {
        name: "Leo Tolstoy",
        qoute: "u v w x y z",
    },

]
const quoteBtn = document.getElementById('quoteBtn');
const quote = document.getElementById('quote');
const quoteAuthor = document.getElementById('quoteAuthor');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*Quotes.length);
   // console.log(number);
     //every time I press the btn it gives random number which 
    //is in between our Quotes.length

    quoteAuthor.innerHTML = Quotes[number].name;
    quote.innerHTML = Quotes[number].qoute;
}
