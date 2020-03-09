import React, { useState, useEffect, memo  } from 'react';
import { connect }                           from 'react-redux';
import { SafeAreaView, FlatList }            from 'react-native';
import * as PhotosActions                    from '../redux/actions/photos';
import PropTypes                             from 'prop-types';

import GalleryBlock from '../components/GalleryBlock';
import Loader       from '../components/Loader';


function Gallery(props) {
	const [isRefrashing, setIsRefrashing] = useState(false);
	const [isLoading, setIsLoadin] = useState(true);

	const handleRefrash = async () => {
		setIsRefrashing(true);
		await props.getNewPhotos();
		setIsRefrashing(false);
	};

	useEffect(() => {
		props.getNewPhotos();
		setIsLoadin(false);
	}, []);

	if (!props.photos || isLoading) return <Loader />;

	return (
		<SafeAreaView>
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
		</SafeAreaView>
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
