import produce 		  from 'immer';
import { GET_NEW_PHOTOS, GET_MORE_PHOTOS } from '../types';

const initialState = {
	photos 	    : []
};

/* eslint-disable no-param-reassign, default-case, no-case-declarations */
export default function recipes(state = initialState, action) {
	return produce(state, (draftState) => {
		switch (action.type) {
		case GET_NEW_PHOTOS:
			draftState.photos = [...action.payload.photos] ;
			break;
		case GET_MORE_PHOTOS:
			draftState.photos = [...state.photos, ...action.payload.photos] ;
			break;
		}
	});
}
