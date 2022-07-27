import React from 'react';
import { TouchableOpacity } from 'react-native';
import ListItem from './ListItem';


const PeopleListItem = props => {
	const { people, navigateToPeopleDetail } = props;
	return (
		<TouchableOpacity onPress={() => {
			navigateToPeopleDetail({ people });
		}} >
			<ListItem people={people} />
		</TouchableOpacity>
	);
}

export default PeopleListItem; 
