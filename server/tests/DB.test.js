// const supertest = require('supertest')
const { dbBuild } = require("../database/config/build");
const { pool } = require('../database/config/connection');
const { getCustomers } = require('../database/queries/getCustomers')
const { addCustomer } = require('../database/queries/postCustomer')
const { deletePackage } = require('../database/queries/deletePackage')


beforeEach(()=>{
    return dbBuild();
});
afterAll(()=>{
    return pool.end();
});

test('TEST GET CUSTOMER',() =>{
   return getCustomers()
    .then(data => {
        expect(data.rowCount).toBe(2)
    })
})

test('POST GET CUSTOMER', () =>{
    return addCustomer('Mona','0597092748','Gaza')
    .then((data) =>{
        console.log(data)
        expect(data.rows[0].name).toBe('Mona');
    })
 })
 test('TEST delete Packages',() =>{
    return deletePackage(1)
     .then(data => {
         expect(data.rowCount).toBe(1)

     })
 })