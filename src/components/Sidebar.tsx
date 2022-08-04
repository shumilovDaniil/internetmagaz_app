import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-white flex-auto p-4">
      <h4 className="font-medium text-2xl mb-2">Категория</h4>
      <ul className="flex flex-col gap-1">
        <li>
          <div className="flex items-center">
            <input className="mr-2" id="kat1" type="checkbox" />
            <label htmlFor="kat1">Крем (884)</label>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <input className="mr-2" id="kat2" type="checkbox" />
            <label htmlFor="kat2">Крем (44)</label>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <input className="mr-2" id="kat3" type="checkbox" />
            <label htmlFor="kat3">Крем (124)</label>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <input className="mr-2" id="kat4" type="checkbox" />
            <label htmlFor="kat4">Крем (484)</label>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <input className="mr-2" id="kat5" type="checkbox" />
            <label htmlFor="kat5">Крем (4)</label>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <input className="mr-2" id="kat6" type="checkbox" />
            <label htmlFor="kat6">Крем (14)</label>
          </div>
        </li>
      </ul>
      <h4 className="font-medium text-2xl mb-2">Категория</h4>
      <ul className="flex flex-col gap-1">
        <li>
          <div className="flex items-center">
            <input className="mr-2" id="kat1" type="checkbox" />
            <label htmlFor="kat1">Крем (884)</label>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <input className="mr-2" id="kat2" type="checkbox" />
            <label htmlFor="kat2">Крем (44)</label>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <input className="mr-2" id="kat3" type="checkbox" />
            <label htmlFor="kat3">Крем (124)</label>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <input className="mr-2" id="kat4" type="checkbox" />
            <label htmlFor="kat4">Крем (484)</label>
          </div>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;