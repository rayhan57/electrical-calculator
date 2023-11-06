import React from "react";
import { Button, Label } from "flowbite-react";

const MyForm = ({ handleInputChange, handleHitung, formData }) => {
  return (
    <>
      <form
        className="flex max-w-sm flex-col gap-4 mx-auto bg-white border p-5 rounded-lg shadow-lg"
        onSubmit={handleHitung}
      >
        <h1 className="font-bold text-black text-center text-xl">
          Electrical Calculator
        </h1>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="perkwh"
              className="text-black"
              value="Harga Perkwh"
            />
          </div>
          <input
            id="perkwh"
            type="number"
            min={0}
            placeholder="Mis: Rp1000"
            className="w-full border-b-slate-400 border-t-0 border-x-0 focus:border-b-indigo-500 focus:border-b-2 focus:ring-0 text-sm"
            required
            value={formData.perkwh}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="watt" className="text-black" value="Berapa Watt?" />
          </div>
          <input
            id="watt"
            type="number"
            min={0}
            placeholder="Mis: 400 Watt"
            className="w-full border-b-slate-400 border-t-0 border-x-0 focus:border-b-indigo-500 focus:border-b-2 focus:ring-0 text-sm"
            required
            value={formData.watt}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="jam" className="text-black" value="Berapa Jam?" />
          </div>
          <input
            id="jam"
            type="number"
            min={0}
            placeholder="Mis: 4 Jam"
            className="w-full border-b-slate-400 border-t-0 border-x-0 focus:border-b-indigo-500 focus:border-b-2 focus:ring-0 text-sm"
            required
            value={formData.jam}
            onChange={handleInputChange}
          />
        </div>

        <Button
          gradientDuoTone="purpleToBlue"
          pill
          type="submit"
          className="active:ring-2 active:ring-indigo-500"
        >
          Hitung
        </Button>
      </form>
    </>
  );
};

export default MyForm;
