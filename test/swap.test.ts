import { assert, expect } from "chai"
import { ethers, getNamedAccounts } from "hardhat"
import { Swap } from "../typechain-types"
// import { Swap__factory } from "../typechain-types"

describe("uniswap v3", () => {
    // Swap__factory swapFactory = await ethers.getContractFactory("Swap", deployer )
    let swapContract: Swap
    let owner: string
    beforeEach(async () => {
        const { deployer } = await getNamedAccounts()
        owner = deployer
        swapContract = await ethers.getContractAt("Swap", owner)
    })

    it("swap one side, swapExactInputSingle", async () => {})
})
