import { StyleProvider } from '@ant-design/cssinjs';
import 'antd/dist/reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from './hello';
import './styles.css';

ReactDOM.render(
  <StyleProvider layer>
    <Hello />
  </StyleProvider>,
  document.body
)
