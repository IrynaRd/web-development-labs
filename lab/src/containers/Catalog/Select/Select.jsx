import React from "react"
import { Select } from "antd"

const Filter = ({placeholder, options, onChange}) => (
    <Select
        placeholder = {placeholder}
        allowClear
        onChange={onChange}
        options ={options}
    />

)

export default Filter;