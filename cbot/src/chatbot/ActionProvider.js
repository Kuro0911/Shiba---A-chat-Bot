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
    const message = this.createChatBotMessage("I can help you get information about Crypto some prompts that you can use to communicate with me easily are !help (use this to get the list of commands) !about(use this to get a basic introduction of Crypto");
    this.addMessageToState(message);
  };
  GetNews = () => {
    const message = this.createChatBotMessage("Bitcoin, BTC to USD, rose by 4.73% on Saturday. Reversing a 0.82% loss from Friday, Bitcoin ended the day at $49,426.");
    this.addMessageToState(message);
  }
  GetAbout = () => {
    const message = this.createChatBotMessage("A cryptocurrency, crypto-currency, or crypto is a collection of binary data which is designed to work as a medium of exchange. Individual coin ownership records are stored in a ledger, which is a computerized database using strong cryptography to secure transaction records, to control the creation of additional coins, and to verify the transfer of coin ownership.");
    this.addMessageToState(message);
  }
  GetMine = () => {
    const message = this.createChatBotMessage("Crypto mining is the process of creating individual blocks added to the blockchain by solving complex mathematical problems. The purpose of mining is to verify cryptocurrency transactions and show proof of work, adding this information to a block on the blockchain, which acts as a ledger for mining transactions. This process uses a node run on a device with extremely high processing power called a mining rig or a Bitcoin mining app. As an incentive, miners receive a reward in cryptocurrency for each block added to the chain. This reward is how new coins are generated and put into circulation. ");
    this.addMessageToState(message);
  }
  GoToBinace = () => {
    const message = this.createChatBotMessage("Binace link");
    this.addMessageToState(message);
  }
  GoToCoinbase = () => {
    const message = this.createChatBotMessage("CoinBase Link");
    this.addMessageToState(message);
  }
  GoToKraken = () => {
    const message = this.createChatBotMessage("Kraken link");
    this.addMessageToState(message);
  }
  GoToWazirX = () => {
    const message = this.createChatBotMessage("WazirX link");
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

  handleBasicQuiz = () => {
    const message = this.createChatBotMessage(
      "here are some steps which can help you start",
      {
        widget: "BasicQuiz",
      }
    );

    this.addMessageToState(message);
  };
  handleInvestQuiz = () => {
    const message = this.createChatBotMessage(
      "how to invest quiz",
      {
        widget: "InvestQuiz",
      }
    );

    this.addMessageToState(message);
  };
  handleThirdQuiz = () => {
    const message = this.createChatBotMessage(
      "some important terms",
      {
        widget: "ThirdQuiz",
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