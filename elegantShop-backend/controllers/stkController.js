
// MPESA PAYBILL API CONFIGS

// @desc    Get user to pay with stk mpesa online
// @route   GET /api/stk

import asyncHandler from 'express-async-handler'
// import Product from '../models/productModel.js'



export const getStkPayment = asyncHandler(async (access, (req, res) => {
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
        auth = "Bearer " + req.access_token
    let date = new Date()
    const timestamp = date.getFullYear() + "" + "" + date.getMonth() + "" + "" + date.getDate() + "" + "" + date.getHours() + "" + "" + date.getMinutes() + "" + "" + date.getSeconds()
    const password = new Buffer.from('174379' + 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919' + timestamp).toString('base64')

    request(
        {
            url: url,
            method: "POST",
            headers: {
                "Authorization": auth
            },
            json: {
                "BusinessShortCode": "174379",
                "Password": password,
                "Timestamp": timestamp,
                "TransactionType": "CustomerPayBillOnline",
                "Amount": "1",
                "PartyA": "254718697987",
                "PartyB": "174379",
                "PhoneNumber": "254718697987",
                "CallBackURL": "http://105.163.26.162:801/stk_callback",
                "AccountReference": "Test",
                "TransactionDesc": "TestPay"
            }
        },
        function (error, response, body) {
            if (error) {
                console.log(error)
            }
            else {
                res.status(200).json(body)
            }
        }
    )
}))




// app.get('/stk', access, (req, res) => {
    // const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
        // auth = "Bearer " + req.access_token
    // let date = new Date()
    // const timestamp = date.getFullYear() + "" + "" + date.getMonth() + "" + "" + date.getDate() + "" + "" + date.getHours() + "" + "" + date.getMinutes() + "" + "" + date.getSeconds()
    // const password = new Buffer.from('174379' + 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919' + timestamp).toString('base64')
// 
    // request(
        // {
            // url: url,
            // method: "POST",
            // headers: {
                // "Authorization": auth
            // },
            // json: {
                // "BusinessShortCode": "174379",
                // "Password": password,
                // "Timestamp": timestamp,
                // "TransactionType": "CustomerPayBillOnline",
                // "Amount": "1",
                // "PartyA": "254718697987",
                // "PartyB": "174379",
                // "PhoneNumber": "254718697987",
                // "CallBackURL": "http://105.163.26.162:801/stk_callback",
                // "AccountReference": "Test",
                // "TransactionDesc": "TestPay"
            // }
        // },
        // function (error, response, body) {
            // if (error) {
                // console.log(error)
            // }
            // else {
                // res.status(200).json(body)
            // }
        // }
    // )
// })