import React          from 'react';
import { StyleSheet } from 'react-native';
import Image          from 'react-native-image-progress';
import PropTypes      from 'prop-types';


function Photo({route}) {
	return (
		<Image 
			style={styles.image}
			source={{uri: route.params.photoUrl}}
		/>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	}
});

Photo.propTypes = {
	route : PropTypes.object.isRequired
};

export default React.memo(Photo);
