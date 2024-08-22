/*
const sampleData = [
    {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
        "id": 4,
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
        "id": 5,
        "email": "charles.morris@reqres.in",
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
        "id": 6,
        "email": "tracey.ramos@reqres.in",
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }
];
*/

import { User } from '../models/user.js';
import { UserDao } from '../dao/user-dao.js'

export class UserService {

    //dependency injection
    constructor(userDao) {
        this.userDao = userDao;
        this.users = [];
    }

    async getUsers() {

        const rawJson = await this.userDao.getUsers();
        this.users = rawJson.data;

        const usersArray = this.users.map(user => new User(
            user.id,
            user.first_name + " " + user.last_name,
            user.email,
            user.avatar
        ))
        return usersArray;
    }

    addUser() {

    }

    updateUser() {

    }

    deleteUser() {

    }

}