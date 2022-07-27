import { List, Avatar } from 'react-native-paper';
import { captalizeFirstLetter } from '../Util';
import { StyleSheet } from 'react-native';

const ListItem = props => {

	const { people } = props;
	const { title, first, last } = people.name;
	
	return (
		<List.Item style={styles.line}
			title={
				`${captalizeFirstLetter(title)
				} ${captalizeFirstLetter(first)
				} ${captalizeFirstLetter(last)
				}`
			}
			description={people.email}
			descriptionStyle={styles.descriptionStyle}
			left={props => <Avatar.Image size={45} source={{ uri: people.picture.thumbnail }} />}
		/>
	)
};
const styles = StyleSheet.create({

	descrptionStyle: {
		color: '#A9A9A9'
	},

	line: {
		height: 60,
		alignItems: 'center',
		flexDirection: 'row',
	},
});


export default ListItem;