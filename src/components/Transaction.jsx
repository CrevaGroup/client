import React from "react";

const Transaction = () => {
  const transactions = [
    { id: 1, description: "Compra de producto A", amount: 50.0 },
    { id: 2, description: "Pago de factura de servicios", amount: 120.0 },
    { id: 3, description: "Transferencia de fondos", amount: 75.5 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Transacciones</h2>
      <div className="bg-white p-4 rounded shadow mt-4">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left">ID</th>
              <th className="text-left">Descripción</th>
              <th className="text-left">Monto</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.description}</td>
                <td>${transaction.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
