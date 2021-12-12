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
    else if (lowercase.includes("!news") || lowercase.includes("news")) {
      this.actionProvider.GetNews();
    }
    else if (lowercase.includes("!about") || lowercase.includes("about")) {
      this.actionProvider.GetNews();
    }
    else if (lowercase.includes("!cryptoMine") || lowercase.includes("Cryptomine")) {
      this.actionProvider.GetMine();
    }
    else if (lowercase.includes("!platforms") || lowercase.includes("where to invest")) {
      this.actionProvider.GetPlat();
    }
    else{
      this.actionProvider.CheckError();
    }
  }
}

export default MessageParser;