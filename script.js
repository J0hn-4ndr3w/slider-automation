

/*----BTC----*/
function getBitcoinPrice() {
    const url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD';
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.querySelector("#bitcoin-price").innerHTML = `BTC $${data.USD} `;
    });
  }
  getBitcoinPrice();


  /*----ETH----*/
  
  function getETHPrice() {
          const xhr = new XMLHttpRequest();
          xhr.open("GET", "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", true);
          xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
              const data = JSON.parse(xhr.responseText);
              document.getElementById("ethPrice").innerHTML = `ETH $${data.USD}`;
            }
          };
          xhr.send();
        }
        getETHPrice();
        
       
        
  /*----LTC----*/
        
        function getLTCPrice() {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", "https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd", true);
          xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
              var data = JSON.parse(xhr.responseText);
              var ltcPrice = data.litecoin.usd;
              document.getElementById("ltc-price").innerHTML = "LTC $" + ltcPrice;
            }
          };
          xhr.send();
        }
        
        getLTCPrice();
        
  
  /*----DOGE----*/
          const url = 'https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD';
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("doge-price").innerHTML = `DOGE $${data.USD}`;
    });
    


    /*----YFI----*/
    function getYFIPrice() {
    const url = 'https://min-api.cryptocompare.com/data/price?fsym=YFI&tsyms=USD';
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.querySelector("#YFI-price").innerHTML = `YFI $${data.USD}`;
    });
    };
    getYFIPrice();
  
  
  /*----LINK----*/
  function getLinkPrice(){
    const url = 'https://min-api.cryptocompare.com/data/price?fsym=LINK&tsyms=USD';
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.querySelector("#link-price").innerHTML = `LINK $${data.USD}`;
    });
  }
  getLinkPrice();

  function getLink(){
    const url = 'https://min-api.cryptocompare.com/data/price?fsym=LINK&tsyms=USD';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.querySelector("#link-price").innerHTML = `LINK $${data.USD}`;
        localStorage.setItem("linkPrice", data.USD);
      });
  }
  
  window.onload = function() {
    var url1 = 'https://min-api.cryptocompare.com/data/price?fsym=LINK&tsyms=USD';

  
    fetch(url1)
      .then(response => response.json())
      .then(data => {
        const currentPrice = data.USD;
        if (localStorage.getItem("linkPrice")) {
            const change = currentPrice - localStorage.getItem("linkPrice");
      const percentageChange = (change / localStorage.getItem("linkPrice")) * 100;
            document.querySelector("#percentage-change").innerHTML = `(${percentageChange.toFixed(2)}%)`;
         } 
      });
      
  };
  setTimeout(function() {
    window.location.assign(window.location.href);
  }, 25000);