import React, { useState, useEffect } from "react";

const CheckBox = ({ id, onChange, checkedAll }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(checkedAll);
  }, [checkedAll]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(id, !isChecked);
  };

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
  );
};

export default CheckBox;
