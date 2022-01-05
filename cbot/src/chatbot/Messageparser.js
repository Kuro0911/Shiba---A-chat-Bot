class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello") || lowercase.includes("hi") || lowercase.includes("hey")) {
      this.actionProvider.greet();
    }
    else if (lowercase.includes("thanks") || lowercase.includes("Thank You")) {
      this.actionProvider.goodbye();
    }
    else if (lowercase.includes("what can you do") || lowercase.includes("what can you do") || lowercase.includes("!funcs")) {
      this.actionProvider.WhatCanDo();
    }
    else if (lowercase.includes("!help") || lowercase.includes("help")) {
      this.actionProvider.GetHelp();
    }
    else if (lowercase.includes("!price") || lowercase.includes("price")) {
      this.actionProvider.GetPrice();
    }
    else if (lowercase.includes("what is crypto?") || lowercase.includes("crypto")) {
      this.actionProvider.WhatIsCrypto();
    }
    else if (lowercase.includes("!cryptoMine") || lowercase.includes("Cryptomine")) {
      this.actionProvider.GetMine();
    }
    else if (lowercase.includes("!platforms") || lowercase.includes("where to invest") || lowercase.includes("platform")) {
      this.actionProvider.GetPlat();
    }
    else if (lowercase.includes("Get stats")) {
      this.actionProvider.GetStat();
    }
    else if (lowercase.includes("BTC stats")) {
      this.actionProvider.getBtcStr();
    }
    else if (lowercase.includes("BNB stats")) {
      this.actionProvider.getBnbStr();
    }
    else if (lowercase.includes("doge stats")) {
      this.actionProvider.getDogeStr();
    }
    else if (lowercase.includes("Eth stats")) {
      this.actionProvider.getEthStr();
    }
    else if (lowercase.includes("BTC price right now") || lowercase.includes("btc price")) {
      this.actionProvider.getBtc();
    }
    else if (lowercase.includes("ETH price right now") || lowercase.includes("Eth price")) {
      this.actionProvider.getEth();
    }
    else if (lowercase.includes("bnb price right now") || lowercase.includes("bnb price")) {
      this.actionProvider.getBnb();
    }
    else if (lowercase.includes("Doge price right now") || lowercase.includes("doge price")) {
      this.actionProvider.getDoge();
    }
    
    else{
      this.actionProvider.CheckError();
    }
  }
}

export default MessageParser;