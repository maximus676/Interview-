import * as axios from "axios";
import React from "react";

const instance2 = axios.create({
    baseURL: `https://reqres.in/api/`,

});

export const  usersAPI = {
    getProfileC(userId){
        return instance2.get(`users/${userId}`)
            .then(response => {
                return response.data;
            });
    },

    getUsers (currentPage = 1, pageSize = 10, pageNumber) {
        return instance2.get(`users?page=${currentPage}&per_page=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}
