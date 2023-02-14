function nextLoad(){

  /*----BTC----*/
  function getBitcoinPrice() {
      const url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD';
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.querySelector("#bitcoin-price").innerHTML = `BTC $${data.USD} `;

        const standardCurrency = 21744.664925;
        const currentPrice = `${data.USD}`;
        const change = currentPrice - standardCurrency;
        const percentage = (change / standardCurrency) * 100;
        document.querySelector("#percentage").innerHTML = `(${percentage.toFixed(2)}%)`;
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

                const standardCurrency = 1486.28;
                const currentPrice = `${data.USD}`;
                const change = currentPrice - standardCurrency;
                const percentage = (change / standardCurrency) * 100;
                document.querySelector("#percentageEth").innerHTML = `(${percentage.toFixed(2)}%)`;
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

                const standardCurrency = 91.10;
                const currentPrice = `${data.litecoin.usd}`;
                const change = currentPrice - standardCurrency;
                const percentage = (change / standardCurrency) * 100;
                document.querySelector("#percentageLtc").innerHTML = `(${percentage.toFixed(2)}%)`;
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

        const standardCurrency = 0.081286;
                const currentPrice = `${data.USD}`;
                const change = currentPrice - standardCurrency;
                const percentage = (change / standardCurrency) * 100;
                document.querySelector("#percentageDoge").innerHTML = `(${percentage.toFixed(2)}%)`;
      });
      
  
  
      /*----YFI----*/
      function getYFIPrice() {
      const url = 'https://min-api.cryptocompare.com/data/price?fsym=YFI&tsyms=USD';
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.querySelector("#YFI-price").innerHTML = `YFI $${data.USD}`;

        const standardCurrency = 6765.46;
                const currentPrice = `${data.USD}`;
                const change = currentPrice - standardCurrency;
                const percentage = (change / standardCurrency) * 100;
                document.querySelector("#percentageYFI").innerHTML = `(${percentage.toFixed(2)}%)`;
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

        const standardCurrency = 6.61;
                const currentPrice = `${data.USD}`;
                const change = currentPrice - standardCurrency;
                const percentage = (change / standardCurrency) * 100;
                document.querySelector("#percentageLink").innerHTML = `(${percentage.toFixed(2)}%)`;
      });
    }
    getLinkPrice();
  
  }
  
    setInterval(nextLoad, 5000);