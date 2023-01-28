const { network, ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")

const BASE_FEE = ethers.utils.parseEther("0.25")
const GAS_PRICE_LINK = 1e9
// Calculate value based on the gas price of the chains
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    if (developmentChains.includes(network.name)) {
        console.log("Local network detected! Deploying mocks..")
        const args = [BASE_FEE, GAS_PRICE_LINK]
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            args: args,
            log: true,
        })
        console.log("Mocks Deployed")
        console.log("------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
