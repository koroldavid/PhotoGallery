import React, { useState, useEffect, memo } from 'react';
import { connect }                           from 'react-redux';
import { FlatList }            				 from 'react-native';
import * as PhotosActions                    from '../redux/actions/photos';
import PropTypes                             from 'prop-types';

import GalleryBlock from '../components/GalleryBlock';
import Loader       from '../components/Loader';


function Gallery(props) {
	const [isRefrashing, setIsRefrashing] = useState(false);

	const handleRefrash = async () => {
		setIsRefrashing(true);
		await props.getNewPhotos();
		setIsRefrashing(false);
	};

	useEffect(() => {
		props.getNewPhotos();
	}, []);

	if (!props.photos) return <Loader />;

	return (
		<FlatList
			data={props.photos}
			renderItem={({ item }) => <GalleryBlock navigation={props.navigation} urls={item.urls} name={item.name} />}
			keyExtractor={(item) => item.id}
			numColumns={2}
			initialNumToRender={10}
			onRefresh={() => handleRefrash()}
			refreshing={isRefrashing}
			onEndReachedThreshold={0.75}
			onEndReached={() => props.getMorePhotos()}
		/>
	);
}

Gallery.propTypes = {
	photos        : PropTypes.array.isRequired,
	navigation    : PropTypes.object.isRequired,
	getNewPhotos  : PropTypes.func.isRequired,
	getMorePhotos : PropTypes.func.isRequired,
};

function mapStateToProps(state) {
	return({
		photos : state.photos.photos
	});
}

export default connect(mapStateToProps, PhotosActions)(memo(Gallery));
