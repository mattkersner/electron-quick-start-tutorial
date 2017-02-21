// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const axios = require('axios');

function getStockData(symbol) {
  axios.get(`http://finance.yahoo.com/d/quotes.csv?s=${symbol}&f=sabo`)
    .then((response) => {
      console.log(response);
      let stockInfo = response.data;
      let div = document.createElement('div');
      let content = document.createTextNode(stockInfo);
      div.appendChild(content);
      document.body.appendChild(div);
    }).catch((err) => {
      console.log(err);
    })
}

let stock = document.getElementById('stockForm');
let symbol = document.getElementById('symbol');
stock.addEventListener("submit", function(e) {
  e.preventDefault();
  getStockData(symbol.value);
})





