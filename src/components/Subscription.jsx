import React, { useState } from "react";

function Subscription() {
  const [subscriptionType, setSubscriptionType] = useState("Gratis");
  const [showSubscriptionInfo, setShowSubscriptionInfo] = useState(false);

  const handleSubscriptionChange = (event) => {
    setSubscriptionType(event.target.value);
  };

  const handleShowSubscriptionInfo = () => {
    setShowSubscriptionInfo(true);
  };

  return (
    <div className="p-4">
      <h2>Elige tu plan de suscripción</h2>
      <div className="mt-4">
        <label
          htmlFor="subscriptionType"
          className="block text-gray-700 font-bold"
        >
          Tipo de suscripción:
        </label>
        <select
          id="subscriptionType"
          value={subscriptionType}
          onChange={handleSubscriptionChange}
          className="w-full border rounded-md py-2 px-3"
          disabled={!showSubscriptionInfo}
        >
          <option value="Gratis">Gratis</option>
          <option value="Plata">Plata</option>
          <option value="Oro">Oro</option>
          <option value="Diamante">Diamante</option>
        </select>
      </div>
      <div className="mt-4">
        <button
          onClick={handleShowSubscriptionInfo}
          className="bg-blue-500 hover-bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Editar
        </button>
      </div>
      {showSubscriptionInfo && (
        <div className="mt-4">
          <h3>Información de la suscripción actual</h3>
          <ul>
            <p>Gratuita</p>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Subscription;
