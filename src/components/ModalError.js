import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ModalError = () => {

  return (
    <View>
      <Text style={Styles.aviso}>Algo deu errado, reinicie o aplicativo.</Text>
    </View>
  );
}

export default ModalError;
const Styles = StyleSheet.create({

  aviso: {
    textAlign: 'center',
    color: '#ff0000',
  },

});
