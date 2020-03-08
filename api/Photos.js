import Base from './Base.js';

const client_id = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

export default class Borrowers extends Base {
    list = async (params = {}) => {
        try {
            const queryParams = {
                client_id,
                count: 20
            }

            return await this.apiClient.get('/photos/random', queryParams);
        } catch (error) {
           throw error
        }
    }
}
