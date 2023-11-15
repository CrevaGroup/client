import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "../Redux/Actions/actions";

function Sales() {
  
  const dispatch = useDispatch()

  const transactions = useSelector(state => state?.allTransactions)
  console.log(transactions);

  useEffect(()=>{
    dispatch(getTransaction())
  },[])

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Ventas</h2>
      <div className="bg-white p-4 rounded shadow mt-4">
        <div className="grid grid-cols-5 p-2 mb-5 rounded-md" style={{background:"#C2A3D1"}}>
          <p className="font-bold">Servicio</p>
          <p className="font-bold">Email</p>
          <p className="font-bold">Cliente</p>
          <p className="font-bold">Status</p>
          <p className="font-bold">Fecha</p>
        </div>
        {transactions?transactions.map((transaction, index)=><div key={index} className="grid grid-cols-5 p-2 mb-5 rounded-md bg-light-violet/40 hover:bg-light-violet/70">
          <p className="font-bold">{transaction?.Services[0]?.name}</p>
          <p className="font-bold">{transaction?.user?.email}</p>
          <p className="font-bold">${transaction.amount}{" "}{transaction.currency}</p>
          <p className="font-bold">{transaction.status}</p>
          <p className="font-bold">{transaction?.createdAt.split('T')[0].split("-").reverse().join("-")}</p>
        </div>):null}
      </div>
    </div>
  );
}

export default Sales;
