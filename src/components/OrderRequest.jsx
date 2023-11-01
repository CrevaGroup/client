import React, { useState } from "react";

function OrderRequest() {
  const [orderData, setOrderData] = useState({
    productName: "",
    quantity: 0,
  });

  // Función para manejar los cambios en los campos del pedido
  const handleOrderChange = (e) => {
    const { name, value } = e.target;
    setOrderData({
      ...orderData,
      [name]: name === "quantity" ? parseInt(value, 10) : value,
    });
  };

  // Función para enviar la solicitud de pedido
  const submitOrderRequest = () => {
    // Aquí se puede agregar la lógica para enviar la solicitud de pedido
    // Por ejemplo, puedes enviar los datos al servidor
    // o almacenarlos en el almacenamiento local del navegador.
    // En este ejemplo, solo mostramos los datos en la consola.
    console.log("Solicitud de Pedido:", orderData);
  };

  return (
    <div>
      <h2>Solicitud de Pedido</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-gray-600">
            Nombre del Producto:
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={orderData.productName}
            onChange={handleOrderChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-600">
            Cantidad:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={orderData.quantity}
            onChange={handleOrderChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="button"
          onClick={submitOrderRequest}
          className="bg-dark-violet text-white px-4 py-2 rounded-md"
        >
          Enviar Solicitud de Pedido
        </button>
      </form>
    </div>
  );
}

export default OrderRequest;
