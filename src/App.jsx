import React, { useState } from "react";
import MyForm from "./assets/components/MyForm";
import Result from "./assets/components/Result";

const App = () => {
  const [formData, setFormData] = useState({ perkwh: "", watt: "", jam: "" });
  const [cost, setCost] = useState({ sehari: "", seminggu: "", sebulan: "" });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleHitung = (e) => {
    e.preventDefault();
    const wattHour = (formData.watt / 1000) * formData.jam * formData.perkwh;

    const sehari = Math.round(wattHour);
    const seminggu = Math.round(wattHour * 7);
    const sebulan = Math.round(wattHour * 30);

    setCost({ sehari: sehari, seminggu: seminggu, sebulan: sebulan });
  };

  return (
    <>
      <div className="w-screen min-h-screen bg-gradient-to-br from-cyan-400 to-purple-600">
        <div className="container py-4">
          <MyForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleHitung={handleHitung}
          />
          <Result cost={cost} />
        </div>
      </div>
    </>
  );
};

export default App;
