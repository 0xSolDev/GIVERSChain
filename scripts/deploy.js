// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const GiversChain = await hre.ethers.getContractFactory("GiversChain");
  const root = await GiversChain.deploy(
    "0xa1e49833f82cb344706b68ff937d6502d0eeb66b",
    "0x406d07c7a547c3da0bacfcc710469c63516060f0",
    "0xd99d1c33f9fc3444f8101754abc46c52416550d1"
  );

  await root.deployed();

  console.log("Claiming deployed to:", root.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
