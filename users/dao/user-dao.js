import { CustomError } from "../models/custom-error.js";

export class UserDao {
    async getUsers() {
        //make an api call to get data from server
        try {
            const response = await fetch('https://redddqres.in/api/users');
            const rawJson = await response.json();
            return rawJson;
        } catch(error) {
            /*const errorResponse = {
                httpErrorCode: 500,
                errorMessage: 'Failed to get list of users'
            };*/
            console.error('fetch API call failed in UserDao->getUsers()');
            throw new CustomError(500, 'Failed to get list of users');
        }
        finally {
            console.error('UserDao->getUsers() completed');
        }
    }
}

