require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-gas-reporter")
require("hardhat-deploy")
require("hardhat-contract-sizer")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xKey"

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1,
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/kzkV77tLcCfjAUzwR0SrMd0P74m_bEfC",
      accounts: [PRIVATE_KEY],
      chainId: 5,
      blockConfirmations: 6,
      gas: 6000000,
    },
  },
  gasReporter: {
    enabled: false,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
  mocha: {
    timeout: 2000000,
  },
}
