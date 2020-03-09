import Base from './Base.js';

const client_id = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

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
