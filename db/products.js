let productList = [];

function all() {
  return productList;
}

function current(currentId) {
  let product = [];
  productList.forEach(e => {
    if (e.id === parseInt(currentId)) {
      return product.push(e);
    }
  });
  return product[0];
}

function exists(currentName) {
  let product = [];
  productList.forEach(e => {
    if (e.name === currentName) {
      return product.push(e);
    }
  });
  return product[0];
}

let i = 0;
function add(newProduct) {
  productList.push({
    ...newProduct,
    id: i++
  });
  return productList;
}

function edit(editId, editBody) {
  let productList2 = [];
  let products = productList.forEach(e => {
    if (e.id === parseInt(editId)) {
      e = editBody;
      e.id = parseInt(editId);
    }
    productList2.push(e);
  });
  productList = productList2;
  return products;
}

function remove(deleteProduct) {
  productList = productList.filter(current => {
    return current.id !== parseInt(deleteProduct);
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
