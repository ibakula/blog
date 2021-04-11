import * as actions from '../actions/article-actions';
import axios from 'axios';
import store from '../store';

function splitTextData(text) {
  const data = {
    img: '',
    text
  }

  const start = data.text.search("<img");
  if (start > -1) {
    const end = data.text.search("/>");
    data.img = data.text.slice(start, end+2);
    if (start > 0) {
      data.text = text.slice(0, start);
      data.text = text.slice(end);
    }
    else {
      data.text = data.text.slice(end+2);
    }
  }

  return data;
}

function getArticleById(id) {
  return axios.get('/api/posts' + id != null ? `/${id}` : '/last');
}

function fetchSingleArticleData(article, fetchAuthor = false) {
  const textData = splitTextData(article.text);
  const nArticle = Object.assign({}, article);
  nArticle.img = textData.img;
  nArticle.text = textData.text;
  delete nArticle.views;

  return (fetchAuthor ? axios.get(`/api/users/${article.authorId}`)
    .then(response => {
      nArticle.author = `${response.data.first_name} ${response.data.last_name}`;
      return nArticle;
    }) : Promise.resolve(nArticle));
}

function fetchArticlesFromId(startId) {
  let state = getArticleById(startId);
  let states = [];
  for (let i = startId-1; i > 0 && i > (stardId-5); --i) {
    states.push(state);
    state = state.then(() => getArticleById(i));
  }

  return Promise.all(states);
}

export function getArticles(id) {
  return getArticleById(id).then(response => {
    let articles = [];
    if (id != null) {
      return fetchSingleArticleData(response.data, true)
        .then(article => {
          articles.push(article);
          store.dispatch(actions.getArticlesSuccess(articles));
          return articles;
        });      
    }
    else {
      return fetchArticlesFromId(response.data.id).then(responses => {
        responses.map(response => {
          fetchSingleArticleData(response.data).then((article) => {
            articles.push(article);
          });
        })
        store.dispatch(actions.getArticlesSuccess(articles));
        return articles;
      });
    }
  })
  .catch(error => {
    store.dispatch(actions.getArticlesFail());
    throw error;
  });
};