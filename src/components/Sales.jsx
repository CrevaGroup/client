import React from "react";

function Sales() {
  const salesData = [
    { id: 1, product: "Producto A", amount: 150.0 },
    { id: 2, product: "Producto B", amount: 220.5 },
    { id: 3, product: "Producto C", amount: 120.75 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Ventas</h2>
      <div className="bg-white p-4 rounded shadow mt-4">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left">ID</th>
              <th className="text-left">Producto</th>
              <th className="text-left">Monto</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.id}</td>
                <td>{sale.product}</td>
                <td>${sale.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sales;
