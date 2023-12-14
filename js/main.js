var text = [
    {quote:"“Be yourself; everyone else is already taken.”" , author: "― Oscar Wilde"},
    {quote:"“So many books, so little time.”" , author: "― Frank Zappa"},
    {quote:"“A room without books is like a body without a soul.”" , author: "― Marcus Tullius Cicero"},
    {quote:"“Be the change that you wish to see in the world.”" , author: "― Mahatma Gandhi"},
    {quote:"“You only live once, but if you do it right, once is enough.”" , author: "― Mae West"},
    {quote:"“If you tell the truth, you don't have to remember anything.”" , author: "― Mark Twain"},
    {quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”" , author: "― Marilyn Monro"}
];

function quoteGenerate() {
        var randomQuote = Math.floor(Math.random() * text.length);
        document.getElementById("quote").innerHTML=text[randomQuote].quote;
        document.getElementById("author").innerHTML=text[randomQuote].author;
};