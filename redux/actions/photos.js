import { GET_PHOTOS } from '../types';
import api            from '../../apiSingleton';

export const getPhotos = () => async dispatch => {
	const data = await api.photos.list();

	const photos = data.map(photoData => {
		return {url : photoData.urls.regular, id: photoData.id};
	});

	dispatch({
		type : GET_PHOTOS,
		payload : {
			photos
		}
	});
};
