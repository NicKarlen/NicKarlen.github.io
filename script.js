
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    /* console.log(data)
    console.log(data.bpi)
    console.log(data.bpi["USD"])
    console.log(data.bpi["USD"].rate_float) */
    showBtcPrice(data.bpi["USD"].rate_float)
  })
  .catch((err) => {
    // Do something for an error here
  })
  
  function showBtcPrice(f){
    document.getElementById("btcPrice").innerText = f
    console.log(f)
  }
  
