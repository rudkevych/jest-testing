import {add, total} from './App';
import {functions} from "./App";

test('add', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, 2)).toBe(7);
    expect(add(10, 2)).toBe(12);
});

test('total', () => {
    expect(total(5, 20)).toBe('$25');
    expect(total(5, 30)).toBe('$35');
    expect(total(5, 50)).toBe('$55');
});

test('Add 2 + 2 to NOT equal 5 ', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
    expect(functions.checkValue(null)).toBeFalsy();
    expect(functions.checkValue(undefined)).toBeFalsy();
    expect(functions.checkValue('Hello Jest')).not.toBeFalsy();
});


// toBe is for primitive types like String or Number
// for object and arrays (reference types)  we use toEqual
test('User should be Oksana Rudkevych', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Oksana',
        lastName: 'Rudkevych'
    });
});

//less than and greater than

test('Should be under 1600 or equal', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//regexp
// case-sensitive
test('There is no I in team', () => {
    expect('teami').not.toMatch(/I/);
});

//arrays
test('Admin should be in usernames and oksana shouldnt', () => {
    const usernames = ['john', 'anna', 'admin'];
    expect(usernames).toContain('admin');
    expect(usernames).not.toContain('oksana');
});

//working with async data

//promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         })
// });

//async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});
