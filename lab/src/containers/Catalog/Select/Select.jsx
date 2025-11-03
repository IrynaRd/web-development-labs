import React from "react"
import { Select } from "antd"

const Filter = ({placeholder, options}) => (
    <Select
        placeholder = {placeholder}
        // allowClear
        // onChange={onChange}
        options ={options}
    />

)

export default Filter;