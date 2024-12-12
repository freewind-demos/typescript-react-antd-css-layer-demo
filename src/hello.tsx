import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

export function Hello() {
  return (
    <Select
      defaultValue="option1"
      style={{ width: 200 }}
    >
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  );
};
