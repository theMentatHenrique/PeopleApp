import React from 'react';
import { View} from 'react-native';
import PeopleCard from '../components/PeopleCard'

export default class PeopleDetailPage extends React.Component {

    render() {
        const { people } = this.props.navigation.state.params;

        return (
              <View>
        <PeopleCard people={people}/>
        </View>

        );

    }
}
