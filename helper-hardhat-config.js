const { ethers } = require("hardhat")

const networkConfig = {
  5: {
    name: "goerli",
    vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane:
      "0x114f3da0a805b6a67d6e9cd2ec746f7028f1b7376365af575cfea3550dd1aa04s",
    subscriptionId: "0",
    callBackGasLimit: "500000",
    interval: "30",
  },
  31337: {
    name: "hardhat",
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane:
      "0x114f3da0a805b6a67d6e9cd2ec746f7028f1b7376365af575cfea3550dd1aa04s",
    callBackGasLimit: "500000",
    interval: "30",
  },
}

const developmentChains = ["hardhat", "localhost"]
module.exports = {
  networkConfig,
  developmentChains,
}
