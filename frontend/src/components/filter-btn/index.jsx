"use client";
import { Radio } from "antd";
import React, { useState } from "react";

const FilterBtn = () =>{
    const [selectedValue, setSelectedValue] = useState("ativo");
    const setTaskList = (e) => {
        console.log(e.target.value);
        let value = e.target.value
        setSelectedValue(value)
    };
    return (
        <Radio.Group onChange={setTaskList} value={selectedValue}>
          <Radio.Button value="ativo">Ativo</Radio.Button>
          <Radio.Button value="inativo">Inativo</Radio.Button>
        </Radio.Group>
    )
}

export default FilterBtn