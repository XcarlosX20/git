const articles = document.querySelector('#articles');
const dataUserDev = {
    apiKey:'af7c5eb8bc63c607f955c859fe9711dbae5f8881:7o^7Pt5XhiNcurl',
    id: "6192ce672b380503dfe05214"
}
const {apiKey, id} = dataUserDev;
let allArticles = [];
//GET FOR ARTICLE: https://docsapi.helpscout.net/v1/articles/${number};
document.addEventListener("DOMContentLoaded", () => {
    getArticles();
});
const getArticles = async () => {
    const url = await fetch(`https://docsapi.helpscout.net/v1/collections/${id}/articles`, {
        method: 'GET',
        headers: {
            Authorization: "Basic YWY3YzVlYjhiYzYzYzYwN2Y5NTVjODU5ZmU5NzExZGJhZTVmODg4MTp4"
        }
    });
    const res = await url.json();
    dataArticles = res.articles.items;
    renderArticles();
}
const renderArticles = () => {
    let arrArticles = []
        dataArticles.map(async (item) => {
            const url = await fetch(`https://docsapi.helpscout.net/v1/articles/${item.id}`, {
                method: 'GET',
                headers: {
                    Authorization: "Basic YWY3YzVlYjhiYzYzYzYwN2Y5NTVjODU5ZmU5NzExZGJhZTVmODg4MTp4"
                }
            });
            const res = await url.json();
            arrArticles.push(res.article);
            FilterByCategories(arrArticles);
            //render
            const {name, text} = res.article;
            let card = `
                <div class="card">
                <div class="card-body">
                 <h3>${name}</h3>
                 <h3>${text}</h3>
                </div>
              </div>`
            articles.innerHTML += card;
           
        });  
}
const FilterByCategories = (arrArticles) => {  
    //foreach
    arrArticles.map(element => {
        console.log(element.categories[0]);
    });
    //filter

    //fx render
}