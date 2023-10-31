import React, { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Producto A",
      price: 10,
      description: "Descripción A",
      image: null,
    },
    {
      id: 2,
      name: "Producto B",
      price: 20,
      description: "Descripción B",
      image: null,
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const deleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const addProduct = () => {
    if (newProduct.name && newProduct.price > 0) {
      // Generate a unique ID for the new product
      const newProductId =
        Math.max(...products.map((product) => product.id)) + 1;
      const updatedProducts = [
        ...products,
        { id: newProductId, ...newProduct },
      ];
      setProducts(updatedProducts);
      // Reset the new product form
      setNewProduct({ name: "", price: 0, description: "", image: null });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // You can handle the image file here, e.g., upload it to a server or store it in state.
      setNewProduct({ ...newProduct, image: file });
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-custom-violet p-4 rounded shadow-md my-8">
      <h3 className="text-dark-violet text-2xl font-semibold mb-2">
        Lista de Productos
      </h3>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <strong className="text-030303 text-lg">{product.name}</strong>
                <p className="text-030303">
                  Descripción: {product.description}
                </p>
              </div>
              <div>
                <span className="text-7411a2 font-semibold">
                  Precio: ${product.price}
                </span>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-accbff text-white px-2 py-1 ml-2 rounded-md hover:bg-custom-blue focus:outline-none"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 p-8">
        <h3 className="text-dark-violet text-xl font-semibold mb-2">
          Agregar Producto
        </h3>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Nombre del producto"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="rounded-md p-2 border border-custom-blue mr-2 mb-2"
          />
          <input
            placeholder="Precio"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                price: parseFloat(e.target.value),
              })
            }
            className="rounded-md p-2 border border-custom-blue mr-2 mb-2"
          />
          <input
            type="text"
            placeholder="Descripción"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            className="rounded-md p-2 border border-custom-blue mr-2 bm-2"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2"
          />
          <button
            onClick={addProduct}
            className="bg-gray-900  text-white px-2 py-1 rounded-md hover:bg-accbff focus:outline-none m-4"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
