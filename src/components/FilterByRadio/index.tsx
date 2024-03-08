import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { filterTodos } from "../../redux/actions";

import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";

const options = [
  { label: "All", value: "ALL" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Current", value: "INCOMPLETE" },
];

export const FilterByRadio: React.FC = () => {
  const dispatch = useDispatch();

  const [valueRadio, setValueRadio] = useState("ALL");

  const onChangeRadio = ({ target: { value } }: RadioChangeEvent) => {
    dispatch(filterTodos(value));
    setValueRadio(value);
  };

  return (
    <div>
      <Radio.Group
        options={options}
        onChange={onChangeRadio}
        value={valueRadio}
        optionType="button"
      />
    </div>
  );
};
