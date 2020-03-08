import ApiClient  from './ApiClient.js';

import PhotosAPI from './Photos.js';


export default function ({ apiEndpoint, apiPrefix } = {}) {
	if (!apiEndpoint) throw new Error('[apiEndpoint] required');

	const api = new ApiClient({ endpoint: apiEndpoint, prefix: apiPrefix });

	return {
		apiClient     : api,
		photos        : new PhotosAPI({ apiClient: api })
	};
}