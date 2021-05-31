/******************************************
        Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/

 const quotes = [
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        source: "Steve Jobs",
        citation: "Apple",
        year: "2008",
        tag: "success",
    },
    {
        quote: "I have no special talent. I am only passionately curious.",
        source: "Albert Einstein",
        citation: "",
        year: "2021",
        tag: "talent",
    },
    {
        quote: "If you judge people, you have no time to love them.",
        source: "Mother Teresa",
        citation: "",
        year: "2021",
        tag: "love",
    },
    {
        quote: "Stay hungry, stay foolish.",
        source: "Steve Jobs",
        citation: "",
        year: "2021",
        tag: "motivation",
    },
    {
        quote: "Insanity: doing the same thing over and over again and expecting different results.",
        source: "Albert Einstein",
        citation: "",
        year: "2021",
        tag: "success",
    },
    {
        quote: "Those who dare to fail miserably can achieve greatly.",
        source: "John F. Kennedy",
        citation: "",
        year: "2021",
        tag: "success",
    },
    {
        quote: "A lot of companies have chosen to downsize, and maybe that was the right thing for them. We chose a different path. Our belief was that if we kept putting great products in front of customers, they would continue to open their wallets.",
        source: "Steve Jobs",
        citation: "Apple",
        year: "2002",
        tag: "technology",
    },
    {
        quote: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
        source: "Albert Einstein",
        citation: "",
        year: "1876",
        tag: "technology",
    },
    {
        quote: "It has become appallingly obvious that our technology has exceeded our humanity.",
        source: "Albert Einstein",
        citation: "Techpikk",
        year: "1987",
        tag: "technology",
    },
    {
        quote: "Peace begins with a smile.",
        source: "Mother Teresa",
        citation: "",
        year: "1987",
        tag: "peace",
    }
];

/***
* Getting All Elements
***/

const searchText            = document.querySelector("#search");
const searchBtn             = document.querySelector("#search-btn");
const suggetionsContainer   = document.querySelector(".suggetions");
const loadBtn               = document.getElementById("load-quote");
const mainBody              = document.querySelector(".main-container");

/***
* `searchSuggetion` function
***/
function searchSuggetion(event){
    const searchValue = searchText.value;
    if(Boolean(searchValue)){
        const suggetions = quotes.filter(function(quote){
            return quote.tag.toLowerCase().includes(searchValue.toLowerCase());
        });

        let prevTag = "";
        var uniqueKeys = suggetions.filter(function(value, index, arr){ 
            if(value.tag == prevTag){ }
            else{
                prevTag = value.tag;
                return value.tag;
            }
        });

        uniqueKeys.forEach(function(keys){
            const suggetionDiv = document.createElement('div');
            suggetionDiv.innerHTML = keys.tag;
            suggetionsContainer.appendChild(suggetionDiv);
        });
    }
    else{
        suggetionsContainer.innerHTML = '';
    }
}

/***
* `Search Button Action`
***/
function search(event){
    event.preventDefault();
    const searchValue = searchText.value;
    if(Boolean(searchValue)){
        mainBody.innerHTML = '';
        const suggetions = quotes.filter(function(quote){
            return quote.tag.toLowerCase().includes(searchValue.toLowerCase());
        });

        suggetions.forEach(function(keys){
            const quoteDiv = document.createElement('div');
            quoteDiv.classList.add('container');
            const quoteBox = document.createElement('div');
            quoteDiv.classList.add('quote-box');
            const quoteP = document.createElement('p');
            quoteP.classList.add('quote');
            quoteP.innerHTML = keys.quote;
            const sourceP = document.createElement('p');
            sourceP.classList.add('source');
            sourceP.innerHTML = keys.source;
            
            if(Boolean(keys.citation)){
                const citationSp = document.createElement('span');
                citationSp.classList.add('citation');
                citationSp.innerHTML = keys.citation;
                sourceP.appendChild(citationSp);
            }
            if(Boolean(keys.year)){
                const yearSp = document.createElement('span');
                yearSp.classList.add('year');
                yearSp.innerHTML = keys.year;
                sourceP.appendChild(yearSp);
            }

            quoteBox.appendChild(quoteP);
            quoteBox.appendChild(sourceP);
            quoteDiv.appendChild(quoteBox);

            mainBody.appendChild(quoteDiv);
        });
    }
    else{
        suggetionsContainer.innerHTML = '';
    }
}

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(event){
    if(quotes.length > 0){
        const quoteObj = {
            qt: quotes[Math.floor(Math.random() * quotes.length)],
            clr: colors[Math.floor(Math.random() * colors.length)]
        }
        return quoteObj;
    }
}

/***
 * `printQuote` function
 ***/
 function printQuote(quote){
    const quoteContent = quote.qt;
    const quoteDiv = document.createElement('div');
    quoteDiv.classList.add('container');
    console.log(quote.clr);
    quoteDiv.style.background = quote.clr;
    const quoteBox = document.createElement('div');
    quoteBox.classList.add('quote-box');
    const quoteP = document.createElement('p');
    quoteP.classList.add('quote');
    quoteP.innerHTML = quoteContent.quote;
    const sourceP = document.createElement('p');
    sourceP.classList.add('source');
    sourceP.innerHTML = quoteContent.source;
    
    if(Boolean(quoteContent.citation)){
        const citationSp = document.createElement('span');
        citationSp.classList.add('citation');
        citationSp.innerHTML = quoteContent.citation;
        sourceP.appendChild(citationSp);
    }
    if(Boolean(quoteContent.year)){
        const yearSp = document.createElement('span');
        yearSp.classList.add('year');
        yearSp.innerHTML = quoteContent.year;
        sourceP.appendChild(yearSp);
    }

    quoteBox.appendChild(quoteP);
    quoteBox.appendChild(sourceP);
    quoteDiv.appendChild(quoteBox);

    mainBody.appendChild(quoteDiv);
}

/***
 * click event listener for the print quote button
 ***/
