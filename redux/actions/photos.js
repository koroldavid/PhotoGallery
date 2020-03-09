import { GET_NEW_PHOTOS, GET_MORE_PHOTOS } from '../types';
import api            					   from '../../apiSingleton';

export const getNewPhotos = () => async dispatch => {
	const data = await api.photos.list();

	const photos = data.map(photo => {
		const { urls, id, user } = photo;

		return {urls, id, name: user.name };
	});

	dispatch({
		type : GET_NEW_PHOTOS,
		payload : {
			photos
		}
	});
};

export const getMorePhotos = () => async dispatch => {
	const data = await api.photos.list();

	const photos = data.map(photo => {
		const { urls, id, user } = photo;

		return {urls, id, name: user.name };
	});

	dispatch({
		type : GET_MORE_PHOTOS,
		payload : {
			photos
		}
	});
};
