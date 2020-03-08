import produce 		  from 'immer';
import { GET_PHOTOS } from '../types';

const initialState = {
	photos 	    : []
};

/* eslint-disable no-param-reassign, default-case, no-case-declarations */
export default function recipes(state = initialState, action) {
	return produce(state, (draftState) => {
		switch (action.type) {
		case GET_PHOTOS:
			draftState.photos = [...action.payload.photos] ;
			break;
		}
	});
}
