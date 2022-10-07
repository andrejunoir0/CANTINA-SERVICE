import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Teste from '../components/Teste'
import { Provider } from '../context/dataContext'

const Menu = () => {
  return (
    <View>
      <Text>menu</Text>
        <Provider>
            <Teste/>
        </Provider>
    </View>
  )
}

export default Menu;

const styles = StyleSheet.create({})