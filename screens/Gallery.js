import React, { useState, useEffect } from 'react';
import { connect }                    from 'react-redux';
import { SafeAreaView, FlatList }     from 'react-native';
import { getPhotos }                  from '../redux/actions/photos';
import PropTypes                      from 'prop-types';

import GalleryBlock from '../components/GalleryBlock';
import Loader       from '../components/Loader';


function Gallery(props) {
	const [isRefrashing, setIsRefrashing] = useState(false);

	const handleRefrash = async () => {
		setIsRefrashing(true);
		await props.getPhotos();
		setIsRefrashing(false);
	};

	useEffect(() => {
		props.getPhotos();
	}, []);

	if (!props.photos) return <Loader />;

	return (
		<SafeAreaView>
			<FlatList
				data={props.photos}
				renderItem={({ item }) => <GalleryBlock navigation={props.navigation} photoUrl={item.url} />}
				keyExtractor={(item) => item.id}
				numColumns={2}
				onRefresh={() => handleRefrash()}
				refreshing={isRefrashing}
			/>
		</SafeAreaView>
	);
}

Gallery.propTypes = {
	photos     : PropTypes.array.isRequired,
	navigation : PropTypes.object.isRequired,
	getPhotos  : PropTypes.func.isRequired,
};

function mapStateToProps(state) {
	return({
		photos : state.photos.photos
	});
}

export default connect(mapStateToProps, {getPhotos})(Gallery);
