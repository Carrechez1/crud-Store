const Store = require("../models/store.models");
const uuid = require("uuid");

const getAllProducts = async () => {
  const data = await Store.findAll();
  return data;
};

// getAllProducts()
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

const createProduct = async (data) => {
  const newProduct = await Store.create({
    id: uuid.v4(),
    name: data.name,
    category: data.category,
    price: data.price,
    isAvaible: data.isAvaible,
  });
  return newProduct;
};

// createProduct({
//   name: "fridge",
//   category: "appliance",
//   price: "399.99",
//   isAvaible: true,
// })
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

const getProductById = async (id) => {
  const data = await Store.findOne({
    where: {
      id,
    },
  });
  return data;
};
// getProductById("b4a27647-3cda-415d-bb71-8a1e8c20afa0")
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

const editProduct = async (id, data) => {
  const info = await Store.update(data, {
    where: {
      id,
    },
  });
  return info;
};
// editProduct("b4a27647-3cda-415d-bb71-8a1e8c20afa0", {
//   name: "computer",
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => console.log(err));

const deleteProduct = async (id) => {
  const data = await Store.destroy({
    where: {
      id,
    },
  });
  return data;
};
// deleteProduct("b4a27647-3cda-415d-bb71-8a1e8c20afa0")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => console.log(err));

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  editProduct,
  deleteProduct,
};
