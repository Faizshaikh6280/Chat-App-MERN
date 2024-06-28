import React from "react";

function Checkox({ selectedGender, onCheckboxChange }) {
  return (
    <div className="flex items-center gap-3">
      <div className="form-control ">
        <label className={`label cursor-pointer flex gap-2 `}>
          <span className="label-text">Male </span>
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => onCheckboxChange("male")}
            checked={selectedGender === "male"}
          />{" "}
        </label>
      </div>
      <div className="form-control ">
        <label className={`label cursor-pointer flex gap-2 `}>
          <span className="label-text">Female </span>
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => onCheckboxChange("female")}
            checked={selectedGender === "female"}
          />
        </label>
      </div>
    </div>
  );
}

export default Checkox;
