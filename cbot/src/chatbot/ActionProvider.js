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
  WhatCanDo = () => {
    const msg1 = this.createChatBotMessage("I can help you get information about Crypto");
    const msg2 = this.createChatBotMessage("These are some prompts that you can use to communicate with me easily");
    const msg3 = this.createChatBotMessage("!help (use this to get the list of commands)");
    this.addMessageToState(msg1);
    this.addMessageToState(msg2);
    this.addMessageToState(msg3);
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
    const msg2 = this.createChatBotMessage("When a currency is only moved or circulated online, some additional protections are needed with technology the same way physical security is necessary with large amounts of physical cash.");
    const msg3 = this.createChatBotMessage("  These digital assets can be used in financial transactions since they are secured with the cryptography to make them safer.");
    this.addMessageToState(msg1);
    this.addMessageToState(msg2);
    this.addMessageToState(msg3);
    
  }
  MoneyGo = () => {
    const message = this.createChatBotMessage("The money goes to the people who sell; some of them got their crypto for free through mining, airdrops, or if they were the ones to start the currency - all depending in each particular case.");
    this.addMessageToState(message);
  }
  WhereToStart = () => {
    const msg1 = this.createChatBotMessage("Step 1 : Open an account on any platforms like Kraken or type !platform to get more info");
    const msg2 = this.createChatBotMessage("Step 2 : Buy your first whole or part BTC, LTC, ETH or other supported cryptocurrencies");
    const msg3 = this.createChatBotMessage("Step 3 : Move the longer term investment (non-trading) portion to a wallet you control ")
    this.addMessageToState(msg1);
    this.addMessageToState(msg2);
    this.addMessageToState(msg3);
  }
  getBtc = () => {
    const message = this.createChatBotMessage("Current Price of Bitcoin is :");
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
      const msg = this.createChatBotMessage("₹" + price.c);
      this.addMessageToState(msg);
      ws.close();
      return;
    } 
  }
  getEth = () => {
    const message = this.createChatBotMessage("Current Price of Ethereum is :");
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
      const msg = this.createChatBotMessage("₹" + price.c);
      this.addMessageToState(msg);
      ws.close();
      return;
    }

  }
  getBnb = () => {
    const message = this.createChatBotMessage("Current Price of BNB Coin is :");
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
      const msg = this.createChatBotMessage("₹" + price.c);
      this.addMessageToState(msg);
      ws.close();
      return;
    } 
  }
  getDoge = () => {
    const message = this.createChatBotMessage("Current Price of Doge Coin is :");
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
      const msg = this.createChatBotMessage("₹" + price.c);
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

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;