import React                            from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Image                            from 'react-native-image-progress';
import PropTypes                        from 'prop-types';

export default function Gallery({navigation, photoUrl}) {
	const handleTabPhoto = () => {
		navigation.navigate('Photo', { photoUrl });
	};

	return (
		<TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={handleTabPhoto}>
			<Image
				style={styles.image}
				source={{uri: photoUrl}}
			/>
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
	}
});


Gallery.propTypes = {
	photoUrl   : PropTypes.string.isRequired,
	navigation : PropTypes.object.isRequired
};