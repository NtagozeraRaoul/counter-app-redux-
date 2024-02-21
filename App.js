import React, {  useState } from 'react'
import {  StyleSheet } from 'react-native';
import Counter from './component/Counter';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function App() {
  const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);

  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}
const styles = StyleSheet.create({});
