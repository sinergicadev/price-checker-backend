const express = require('express');
const sql = require('mssql')
const routes = express.Router()

routes.get("/check_price_store",async (req,res)=>{
    (async () => {
        try {
            // make sure that any items are correctly URL encoded in the connection string
            await sql.connect('mssql://sa:apache*@190.97.188.215:5531/QTSRV/QTDATA')
           
        } catch (err) {
            console.log(err)
        }
    })();
})

module.exports = routes