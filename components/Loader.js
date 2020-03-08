import React                                   from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default function Loader() {
	return (
		<View style={styles.loaderContainer}>
			<ActivityIndicator size='large' color='#1890ff' />
		</View>
	);
}

const styles = StyleSheet.create({
	loaderContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%'
	}
});

