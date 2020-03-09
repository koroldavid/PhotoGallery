import React                            	  from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Image                            	  from 'react-native-image-progress';
import PropTypes                       	 	  from 'prop-types';

export default function Gallery({navigation, urls, name}) {
	const handleTabPhoto = () => {
		navigation.navigate('Photo', { photoUrl: urls.regular });
	};

	return (
		<TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={handleTabPhoto}>
			<Image
				style={styles.image}
				source={{uri: urls.small}}
			/>
			<Text style={styles.author}>{name}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '48%',
		margin: '1%'
	},
	image : {
		width: '100%',
		height: 150,
		resizeMode: 'contain'
	},
	author : {
		textAlign: 'center'
	}
});

Gallery.propTypes = {
	urls       : PropTypes.object.isRequired,
	name       : PropTypes.string.isRequired,
	navigation : PropTypes.object.isRequired
};
