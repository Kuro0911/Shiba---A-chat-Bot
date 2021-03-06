class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello hooman!!!");
    this.addMessageToState(message);
  };
  goodbye = () => {
    const message = this.createChatBotMessage("Thank you for using our services");
    this.addMessageToState(message);
  };
  CheckError = () => {
    const message = this.createChatBotMessage("Sorry I didn't quite catch that!!");
    this.addMessageToState(message);
  };
  GetSource = () => {
      window.open("https://github.com/Kuro0911/Shiba---A-chat-Bot");
  }
  WhatCanDo = () => {
    const msg1 = this.createChatBotMessage("I can help you get information about Crypto");
    const msg2 = this.createChatBotMessage("!help (use this to get the list of commands)",
      {
        widget:"source",
      }
    );
    this.addMessageToState(msg1);
    this.addMessageToState(msg2);
  };
  GetMine = () => {
    const msg1 = this.createChatBotMessage("Crypto mining is the process of creating individual blocks added to the blockchain by solving complex mathematical problems.");
    const msg2 = this.createChatBotMessage("The purpose of mining is to verify cryptocurrency transactions and show proof of work, adding this information to a block on the blockchain, which acts as a ledger for mining transactions.");
    const msg3 = this.createChatBotMessage(" This process uses a node run on a device with extremely high processing power called a mining rig or a Bitcoin mining app.");
    this.addMessageToState(msg1);
    this.addMessageToState(msg2);
    this.addMessageToState(msg3);
    
  }
  GoToBinace = () => {
    window.open("https://accounts.binance.com");
  }
  GoToCoinbase = () => {
    window.open("https://www.coinbase.com");
  }
  GoToKraken = () => {
    window.open("https://www.kraken.com/sign-up");
  }
  GoToWazirX = () => {
    window.open("http://www.wazirx-signup.us/");
  }
  WhatIsCrypto = () => {
    const msg1 = this.createChatBotMessage("Cryptocurrency is a currency that has cryptography (encrypted code) in it to protect it.");
    const msg3 = this.createChatBotMessage("  These digital assets can be used in financial transactions since they are secured with the cryptography to make them safer.");
    this.addMessageToState(msg1);
    this.addMessageToState(msg3);
    
  }
  MoneyGo = () => {
    const message = this.createChatBotMessage("The money goes to the people who sell; some of them got their crypto for free through mining, airdrops, or if they were the ones to start the currency - all depending in each particular case.");
    this.addMessageToState(message);
  }
  WhereToStart = () => {
    const msg1 = this.createChatBotMessage("Step 1 : Open an account on any platforms like Kraken or type platforms to know more",{
      withAvatar: true,
    });
    const msg2 = this.createChatBotMessage("Step 2 : Buy your first whole or part BTC, LTC, ETH or other supported cryptocurrencies To know the real time price look below",
    {
      widget: "real",
      withAvatar: true,
      delay: 1500
    },
    );
    const msg3 = this.createChatBotMessage("Step 3 : You are ready to start trading",{
      withAvatar: true,
      delay: 3000
    })
    this.addMessageToState(msg1);
    this.addMessageToState(msg2);
    this.addMessageToState(msg3);
  }
  getBtc = () => {
    const message = this.createChatBotMessage("Current Price of Bitcoin is :",{
      withAvatar: true,
    });
    this.addMessageToState(message);
    const base = 'wss://stream.wazirx.com/stream';
    const ws = new WebSocket(base);
    ws.addEventListener('open' , () => {
      ws.send(JSON.stringify({ event: 'subscribe', streams : ["!ticker@arr"]}));
    });
    ws.onmessage = (event) => {
      const res = JSON.parse(event.data)
      const { data } = res;
      if (!Array.isArray(data)) return;
      const btcInr = data.filter((obj) => {
        return obj.s === "btcinr"
      })
      if (btcInr.length === 0) return;
      const [price] = btcInr;
      console.log(price.c);
      const msg = this.createChatBotMessage("???" + price.c);
      this.addMessageToState(msg);
      ws.close();
      return;
    } 
  }
  getEth = () => {
    const message = this.createChatBotMessage("Current Price of Ethereum is :",{
      withAvatar: true,
    });
    this.addMessageToState(message);
    const base = 'wss://stream.wazirx.com/stream';
    const ws = new WebSocket(base);
    ws.addEventListener('open' , () => {
      ws.send(JSON.stringify({ event: 'subscribe', streams : ["!ticker@arr"]}));
    });
    ws.onmessage = (event) => {
      const res = JSON.parse(event.data)
      const { data } = res;
      if (!Array.isArray(data)) return;
      const ethInr = data.filter((obj) => {
        return obj.s === "ethinr"
      })
      if (ethInr.length === 0) return;
      const [price] = ethInr;
      console.log(price.c);
      const msg = this.createChatBotMessage(`??? ${price.c}`);
      this.addMessageToState(msg);
      ws.close();
      return;
    }

  }
  getBnb = () => {
    const message = this.createChatBotMessage("Current Price of BNB Coin is :",{
      withAvatar: true,
    });
    this.addMessageToState(message);
    const base = 'wss://stream.wazirx.com/stream';
    const ws = new WebSocket(base);
    ws.addEventListener('open' , () => {
      ws.send(JSON.stringify({ event: 'subscribe', streams : ["!ticker@arr"]}));
    });
    ws.onmessage = (event) => {
      const res = JSON.parse(event.data)
      const { data } = res;
      if (!Array.isArray(data)) return;
      const bnbInr = data.filter((obj) => {
        return obj.s === "bnbinr"
      })
      if (bnbInr.length === 0) return;
      const [price] = bnbInr;
      console.log(price.c);
      const msg = this.createChatBotMessage(`??? ${price.c}`);
      this.addMessageToState(msg);
      ws.close();
      return;
    } 
  }
  getDoge = () => {
    const message = this.createChatBotMessage("Current Price of Doge Coin is :",{
      withAvatar: true,
    });
    this.addMessageToState(message);
    const base = 'wss://stream.wazirx.com/stream';
    const ws = new WebSocket(base);
    ws.addEventListener('open' , () => {
      ws.send(JSON.stringify({ event: 'subscribe', streams : ["!ticker@arr"]}));
    });
    ws.onmessage = (event) => {
      const res = JSON.parse(event.data)
      const { data } = res;
      if (!Array.isArray(data)) return;
      const dogeInr = data.filter((obj) => {
        return obj.s === "dogeinr"
      })
      if (dogeInr.length === 0) return;
      const [price] = dogeInr;
      console.log(price.c);
      const msg = this.createChatBotMessage(`??? ${price.c}`);
      this.addMessageToState(msg);
      ws.close();
      return;
    } 
  }
  
  GetPrice = () => {
    const message = this.createChatBotMessage(
      "Choose the coin for which you want to know the price ",
      {
        widget: "real",
      }  
    );
    this.addMessageToState(message);
  }
  GetPlat = () => {
    const message = this.createChatBotMessage(
      "Some platforms where you can invest ",
      {
        widget: "plat",
      }  
    );
    this.addMessageToState(message);
  }
  GetHelp = () => {
    const message = this.createChatBotMessage(
      "Some commands you can give me ",
      {
        widget: "commands",
      }  
    );
    this.addMessageToState(message);
  };
  GetStat = () => {
    const msg1 = this.createChatBotMessage("please choose the coin for which you want to know the complete Stats ",{
      widget: "Vcoins",
    });
    this.addMessageToState(msg1);
  }
  getBtcStr = () => {
    const message = this.createChatBotMessage("Fetching data *this might take a while*",{
      withAvatar: true,
    });
    this.addMessageToState(message);
    const base = 'wss://stream.wazirx.com/stream';
    const ws = new WebSocket(base);
    ws.addEventListener('open' , () => {
      ws.send(JSON.stringify({ event: 'subscribe', streams : ["!ticker@arr"]}));
    });
    ws.onmessage = (event) => {
      const res = JSON.parse(event.data)
      const { data } = res;
      if (!Array.isArray(data)) return;
      const btcInr = data.filter((obj) => {
        return obj.s === "btcinr"
      })
      if (btcInr.length === 0) return;
      const [price] = btcInr;
      console.log(price.c);
      const msg = this.createChatBotMessage("Current Price of Bitcoin is : ???" + price.c);
      console.log(price.a);
      console.log(price.b);
      console.log(price.h);
      console.log(price.l);

      const msg1 = this.createChatBotMessage("Best sell Price for BTC today is : ??? " + price.a,{
        delay: 1500,
      },);
      const msg2 = this.createChatBotMessage("Best buy Price for BTC today is : ??? " + price.b,{
        delay:3000,
      },);
      const msg3 = this.createChatBotMessage("Best highest price for BTC today was : ??? " + price.h + " and the lowest was : ???" + price.l,{
        delay:4500,
      },);

      this.addMessageToState(msg);
      this.addMessageToState(msg1);
      this.addMessageToState(msg2);
      this.addMessageToState(msg3);
    
      if( price.c < (price.b + 5000) ){
        const msg4 = this.createChatBotMessage("It is a good time to sell BTC",{
          delay:6000,
        },);
        this.addMessageToState(msg4);
      }else if( price.c > (price.a - 5000)){
        const msg5 = this.createChatBotMessage("It is a good time to buy BTC",{
          delay:6000,
        },);
        this.addMessageToState(msg5);
      }
      const msg6 = this.createChatBotMessage("This is all the information right now",{
        delay:7500,
      },)
      this.addMessageToState(msg6);
      ws.close();
      return;
    } 
  }
  getEthStr = () => {
    const message = this.createChatBotMessage("Fetching data *this might take a while*",{
      withAvatar: true,
    });
    this.addMessageToState(message);
    const base = 'wss://stream.wazirx.com/stream';
    const ws = new WebSocket(base);
    ws.addEventListener('open' , () => {
      ws.send(JSON.stringify({ event: 'subscribe', streams : ["!ticker@arr"]}));
    });
    ws.onmessage = (event) => {
      const res = JSON.parse(event.data)
      const { data } = res;
      if (!Array.isArray(data)) return;
      const ethInr = data.filter((obj) => {
        return obj.s === "ethinr"
      })
      if (ethInr.length === 0) return;
      const [price] = ethInr;
      console.log(price.c);
      const msg = this.createChatBotMessage("Current Price of Ethereum is : ???" + price.c);
      console.log(price.a);
      console.log(price.b);
      console.log(price.h);
      console.log(price.l);

      const msg1 = this.createChatBotMessage("Best sell Price for ETH today is : ???" + price.a,{
        delay:1500,
      },);
      const msg2 = this.createChatBotMessage("Best buy Price for ETH today is: ???" + price.b,{
        delay:3000,
      },);
      const msg3 = this.createChatBotMessage("Best highest price for ETH today was : ??? " + price.h + " and the lowest was : ???" + price.l,{
        delay:4500
      });

      this.addMessageToState(msg);
      this.addMessageToState(msg1);
      this.addMessageToState(msg2);
      this.addMessageToState(msg3);
    
      if( price.c < (price.b + 5000) ){
        const msg4 = this.createChatBotMessage("It is a good time to sell ETH",{
          delay:6000,
        },);
        this.addMessageToState(msg4);
      }else if( price.c > (price.a - 5000)){
        const msg5 = this.createChatBotMessage("It is a good time to buy ETH",{
          delay:6000,
        },);
        this.addMessageToState(msg5);
      }
      const msg6 = this.createChatBotMessage("This is all the information right now",{
        delay:7500,
      },)
      this.addMessageToState(msg6);
      ws.close();
      return;
    } 

  }
  getBnbStr = () => {
    const message = this.createChatBotMessage("Fetching data *this might take a while*",{
      withAvatar: true,
    });
    this.addMessageToState(message);
    const base = 'wss://stream.wazirx.com/stream';
    const ws = new WebSocket(base);
    ws.addEventListener('open' , () => {
      ws.send(JSON.stringify({ event: 'subscribe', streams : ["!ticker@arr"]}));
    });
    ws.onmessage = (event) => {
      const res = JSON.parse(event.data)
      const { data } = res;
      if (!Array.isArray(data)) return;
      const bnbInr = data.filter((obj) => {
        return obj.s === "bnbinr"
      })
      if (bnbInr.length === 0) return;
      const [price] = bnbInr;
      console.log(price.c);
      const msg = this.createChatBotMessage("Current Price of Binance Coin is : ???" + price.c);
      console.log(price.a);
      console.log(price.b);
      console.log(price.h);
      console.log(price.l);

      const msg1 = this.createChatBotMessage("Best sell Price for BNB today : ??? " + price.a,{
        delay:1500,
      },);
      const msg2 = this.createChatBotMessage("Best buy Price for BNB today : ??? " + price.b,{
        delay:3000,
      },);
      const msg3 = this.createChatBotMessage("Best highest price for BNB today was : ??? " + price.h + " and the lowest was : ???" + price.l,{
        delay:4500
      },);

      this.addMessageToState(msg);
      this.addMessageToState(msg1);
      this.addMessageToState(msg2);
      this.addMessageToState(msg3);
    
      if( price.c < (price.b + 5000) ){
        const msg4 = this.createChatBotMessage("It is a good time to sell BNB",{
          delay:6000,
        });
        this.addMessageToState(msg4);
      }else if( price.c > (price.a - 5000)){
        const msg5 = this.createChatBotMessage("It is a good time to buy BNB",{
          delay:6000,
        });
        this.addMessageToState(msg5);
      }
      const msg6 = this.createChatBotMessage("This is all the information right now",{
        delay:7500,
      },)
      this.addMessageToState(msg6);
      ws.close();
      return;
    } 
  }
  getDogeStr = () => {
    const message = this.createChatBotMessage("Fetching data *this might take a while*",{
      withAvatar: true,
    });
    this.addMessageToState(message);
    const base = 'wss://stream.wazirx.com/stream';
    const ws = new WebSocket(base);
    ws.addEventListener('open' , () => {
      ws.send(JSON.stringify({ event: 'subscribe', streams : ["!ticker@arr"]}));
    });
    ws.onmessage = (event) => {
      const res = JSON.parse(event.data)
      const { data } = res;
      if (!Array.isArray(data)) return;
      const dogeInr = data.filter((obj) => {
        return obj.s === "dogeinr"
      })
      if (dogeInr.length === 0) return;
      const [price] = dogeInr;
      console.log(price.c);
      const msg = this.createChatBotMessage("Current Price of Dogecoin is : ???" + price.c);
      console.log(price.a);
      console.log(price.b);
      console.log(price.h);
      console.log(price.l);

      const msg1 = this.createChatBotMessage("Best sell Price for Doge today : ??? " + price.a,{
        delay:1500,
      },);
      const msg2 = this.createChatBotMessage("Best buy Price for Doge today : ??? " + price.b,{
        delay:3000,
      },);
      const msg3 = this.createChatBotMessage("Best highest price for Doge today was : ??? " + price.h + " and the lowest was : ???" + price.l,{
        delay:4500,
      },);

      this.addMessageToState(msg);
      this.addMessageToState(msg1);
      this.addMessageToState(msg2);
      this.addMessageToState(msg3);
    
      if( price.c < (price.b + 5000) ){
        const msg4 = this.createChatBotMessage("It is a good time to sell Doge",{
          delay:6000,
        },);
        this.addMessageToState(msg4);
      }else if( price.c > (price.a - 5000)){
        const msg5 = this.createChatBotMessage("It is a good time to buy Doge",{
          delay:6000,
        },);
        this.addMessageToState(msg5);
      }
      const msg6 = this.createChatBotMessage("This is all the information right now",{
        delay:7500,
      },)
      this.addMessageToState(msg6);
      ws.close();
      return;
    } 
  }
  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;