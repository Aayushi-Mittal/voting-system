const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Voter = await ethers.getContractFactory("Voter");
    const voter = await Voter.deploy("Hello, world!");
    await voter.deployed();

    expect(await voter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await voter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await voter.greet()).to.equal("Hola, mundo!");
  });
});
