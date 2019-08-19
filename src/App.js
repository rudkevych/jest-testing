import axios from 'axios';

export const add = (x, y) => {
    return x + y;
};

export const total = (shipping, subTotal) => {
    return "$" + add(shipping, subTotal)
};

export const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = {
            firstName: 'Oksana'
        };
        user.lastName = 'Rudkevych';
        return user;
    },
    fetchUser: () => axios.get('http://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')

};