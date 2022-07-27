import React from 'react';
import { Card } from 'react-native-paper';
import Line from './Line';
import { View, StyleSheet, Image } from 'react-native';

const PeopleCard = props => {

  const { people } = props;
  return (
    <View >
      <Card style={Styles.card}>
        <Image source={{ uri: people.picture.large }}
          style={Styles.avatar} />
        <View >
          <Line label="Email:" content={people.email} />
          <Line label="Cidade:" content={people.location.city} />
          <Line label="Estado:" content={people.location.state} />
          <Line label="Tel:" content={people.phone} />
          <Line label="Cel:" content={people.cell} />
          <Line label="Nacionalidade:" content={people.nat} />
        </View>
      </Card>
    </View>
  );
}

export default PeopleCard;


const Styles = StyleSheet.create({
 
  conteiner: {
    backgroundColor: 'white',
    borderWidth: 10,
    padding: 20,
  },

  card: {
    width: 380,
    alignSelf: 'center',
    borderWidth: 10,
    borderColor: 'white',
    marginTop: 15,
    elevation:5,
  },

  avatar: {
    aspectRatio: 1,
    borderRadius: 200,
    marginBottom: 15,
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 10,
  },
});