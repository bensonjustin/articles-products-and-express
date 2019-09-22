let articleList = [];

function all() {
  return articleList;
}

function current(currentTitle) {
  let article = [];
  articleList.forEach(e => {
    if (e.urlTitle === currentTitle) {
      return article.push(e);
    }
  });
  return article[0];
}

function exists(currentTitle) {
  let article = [];
  articleList.forEach(e => {
    if (e.title === currentTitle) {
      return article.push(e);
    }
  });
  return article[0];
}

function add(newArticle) {
  articleList.push({
    ...newArticle,
    urlTitle: encodeURI(newArticle.title)
  });
  console.log(articleList);
  return articleList;
}

function edit(editTitle, editBody) {
  let articleList2 = [];
  let articles = articleList.forEach(e => {
    if (e.urlTitle === editTitle) {
      e = editBody;
      e.urlTitle = editTitle;
    }
    articleList2.push(e);
  });
  articleList = articleList2;
  return articles;
}

function remove(deleteArticle) {
  articleList = articleList.filter(current => {
    return current.urlTitle !== deleteArticle;
  });
}

module.exports = {
  all,
  current,
  exists,
  add,
  edit,
  remove
};
