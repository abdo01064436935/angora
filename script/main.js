



var quotecontainer = document.getElementById("quote-box")
document.getElementById("loadQuote")


var quotes = [{
    quote : `"Resentment is like drinking poison and waiting for your enemies to die."`,
    source : `― Nelson Mandela`
},
{
    quote : `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    source : `― Marilyn Monroe`
},
{
    quote : `“So many books, so little time.”`,
    source : `― Frank Zappa
`
},
{
    quote : `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    source : `― Albert Einstein`
},
{
    quote : `“A room without books is like a body without a soul.”`,
    source : `― Marcus Tullius Cicero`
},
{
    quote : `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    source : `― Bernard M. Baruch`
},
{
    quote : `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    source : `― Dr. Seuss`
},
{
    quote : `“You only live once, but if you do it right, once is enough.”`,
    source : `― Mae West`
},

];

function getrandomquote(){
    var randomnumber = Math.floor(Math.random()* (quotes.length))
    var randomquote = quotes[randomnumber]
    return randomquote ;
}

function printquote(){
var quotes = getrandomquote()

var quotestring =`<p class = "quote"> ${quotes.quote} </p>
<p class= "source"> ${quotes.source}`

if (quotes.citation){
    quotestring += `<span class= "citation"> ${quotes.citation} </span>`
}else {
    quotestring += `</p>`
}
quotecontainer.innerHTML = quotestring ;

}








