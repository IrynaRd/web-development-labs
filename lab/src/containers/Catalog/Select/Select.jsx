import React from "react"
import { Select } from "antd"

const Filter = () => (
    <Select
        // onChange={onChange}
        options={[
            { value: '1', label: <span>Option 1</span> },
            { value: '2', label: <span>Option 2</span> },
        ]}
    />

)

export default Filter;