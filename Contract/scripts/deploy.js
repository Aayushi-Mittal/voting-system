const hre = require("hardhat");

async function main() {

  const Voter = await hre.ethers.getContractFactory("Voter");
  const voter = await Voter.deploy("Hello, Hardhat!");

  await voter.deployed();

  console.log("Voter deployed to:", voter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
