const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayNews(data.articles);
    console.log(data.articles);
  } catch (error) {
    console.error('There was an error!', error);
  }
}

fetchNews();

function displayNews(articles) {
  const newsDiv = document.querySelector('#news');
  for (const article of articles) {
      const articleDiv = document.createElement('div');
      articleDiv.classList.add("news-article");

      const image = document.createElement('img');
      image.src = article.urlToImage;
      articleDiv.appendChild(image);

      //create and append a headline to the articleDiv
      const title = document.createElement('h4');
      title.textContent = article.title;
      articleDiv.appendChild(title);

      const description = document.createElement('p');
      description.textContent = article.description;
      articleDiv.appendChild(description);

      const author = document.createElement('p');
      author.textContent = article.author;
      articleDiv.appendChild(author);
      
  
    // TODO: Use document.createElement and appendChild to create and append more elements

    newsDiv.appendChild(articleDiv);
  }
}


