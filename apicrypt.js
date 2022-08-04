//const ckeys = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,ETH,BCH,BSV&api_key=4bafb3a08cc1187ebd41d15bfc8ff7945801311500ffbfe9081733bec4cff'
const crypt_comp_url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BSV,ETH,BTC,BCH&tsyms=USD,EUR,GBP"
const my_api_key = "&api_key=49a839b5b7395a830c0a3a61819d8a657950ef22ae68d5e6c1364ccc60117584"

const my_crypto_url  = crypt_comp_url + my_api_key

async function getwoc(){
    const response = await fetch(my_crypto_url);
    const data = await response.json();
    document.getElementById('prcG').textContent=data.BSV.GBP;
    document.getElementById('prcU').textContent=data.BSV.USD;
    document.getElementById('prcE').textContent=data.BSV.EUR;
    document.getElementById('prcG2').textContent=data.BTC.GBP;
    document.getElementById('prcU2').textContent=data.BTC.USD;
    document.getElementById('prcE2').textContent=data.BTC.EUR;
    document.getElementById('prcG3').textContent=data.ETH.GBP;
    document.getElementById('prcU3').textContent=data.ETH.USD;
    document.getElementById('prcE3').textContent=data.ETH.EUR;
    document.getElementById('prcG4').textContent=data.BCH.GBP;
    document.getElementById('prcU4').textContent=data.BCH.USD;
    document.getElementById('prcE4').textContent=data.BCH.EUR;

}
getwoc();