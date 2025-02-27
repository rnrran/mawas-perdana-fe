"use client";
import getNiceSelectValue from "@/libs/getNiceSelectValue";
import { useEffect } from "react";

const selectInputs = [
  {
    value: "default",
    name: "Urutan Default",
  },
  {
    value: "popularity",
    name: "Urutkan Berdasarkan Popularitas",
  },
  {
    value: "new",
    name: "Urutkan Berdasarkan Tanggal Rilis",
  },
  {
    value: "price ascending",
    name: "Dari Harga Terendah",
  },
  {
    value: "price descending",
    name: "Dari Harga Tertinggi",
  },
];
const ShopShortSelect = ({ setArrangeInput }) => {
  useEffect(() => {
    getNiceSelectValue(setArrangeInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="short-by text-center">
      <select className="nice-select">
        {selectInputs?.map(({ value, name }, idx) => (
          <option value={value} key={idx}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ShopShortSelect;
