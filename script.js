var CurrentPrice

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    console.log(data)
    console.log(data.bpi)
    console.log(data.bpi["USD"])
    console.log(data.bpi["USD"].rate_float)
    showPrice(data.bpi["USD"].rate_float,"BTC")
    showPrice(data.bpi["EUR"].rate_float,"EUR")
  })
  .catch((err) => {
    // Do something for an error here
  })
  
  function showPrice(f,currency){
    CurrentPrice = f
    if (currency =="BTC"){
      document.getElementById("btcPrice").innerText = f
    }
    else if(currency = "EUR"){
      document.getElementById("btcPriceEUR").innerText = f
    }
    
  }

  function calcPL(){
    var value = document.getElementById("Buy_Price").value

    var profitLossInPercent = CurrentPrice/value
    document.getElementById("Profit/Loss").innerText = parseInt(profitLossInPercent*100)
  }



 /*  window.localStorage.setItem("price",JSON.stringify(5454))

  console.log(window.localStorage.getItem("price"))
   */
