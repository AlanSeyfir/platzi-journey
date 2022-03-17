var articles = [
    {name: "Bycicle", price: 3000},
    {name: "TV", price: 2500},
    {name: "Book", price: 320},
    {name: "Cellphone", price: 10000},
    {name: "Microphone", price: 3000},
    {name: "Laptop", price: 20000},
    {name: "Keyboard", price: 500},
    {name: "Headphones", price: 1700},
]

var filterArticles = articles.filter(function(article){
    return article.price <=500;
})
filterArticles

var nameArticle = articles.map(function(article) {
    return article.name;
})
nameArticle

var findArticle = articles.find(function(article){
    return article.name === "Laptop";

});
findArticle

articles.forEach(function(article){
    console.log(article.name);
});

var cheapArticles = articles.some(function(article){
    return article.price <= 700
});
cheapArticles