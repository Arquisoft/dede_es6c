var request = require('request');

const Shippy = () => {
    request({
        method: 'POST',
        url: 'https://www.shippypro.com/api',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic < Enter your Basic Authorization string here >'
        },
body:"{ \"Method\": \"Ship\", \"Params\": { \"to_address\": { \"name\": \"John Doe\", \"company\": \"\", \"street1\": \"123 Main St\", \"street2\": \"\", \"city\": \"Park City\", \"state\": \"UT\", \"zip\": \"84060\", \"country\": \"US\", \"phone\": \"5551231234\", \"email\": \"johndoe@gmail.com\" }, \"from_address\": { \"name\": \"John Doe\", \"company\": \"\", \"street1\": \"123 Main St\", \"street2\": \"\", \"city\": \"Park City\", \"state\": \"UT\", \"zip\": \"84060\", \"country\": \"US\", \"phone\": \"5551231234\", \"email\": \"johndoe@gmail.com\" }, \"parcels\": [ { \"length\": 5, \"width\": 5, \"height\": 5, \"weight\": 10 } ], \"TotalValue\": \"123 EUR\", \"TransactionID\": \"ORDER2365\", \"ContentDescription\": \"Milk\", \"Insurance\": 0, \"InsuranceCurrency\": \"EUR\", \"CashOnDelivery\": 0, \"CashOnDeliveryCurrency\": \"EUR\", \"CashOnDeliveryType\": 0, \"CarrierName\": \"DHLExpress\", \"CarrierService\": \"EXPRESS DOMESTIC\", \"CarrierID\": 23, \"OrderID\": \"\", \"RateID\": \"14922625303744\", \"Incoterm\": \"DAP\", \"BillAccountNumber\": \"\", \"PaymentMethod\": \"Paypal\", \"Note\": \"Ship by 25/06/2018\", \"Async\": false }}"      }, function (error: any, response: { statusCode: any; headers: any; }, body: any) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
      });
}

export default Shippy