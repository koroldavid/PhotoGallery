import React                from 'react';
import { StyleSheet, View } from 'react-native';
import Image                from 'react-native-image-progress';
import PropTypes            from 'prop-types';


export default function Photo({route}) {
	return (
		<View style={styles.container}>
			<Image 
				style={styles.image}
				source={{uri: route.params.photoUrl}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%'
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	}
});

Photo.propTypes = {
	route : PropTypes.object.isRequired
};