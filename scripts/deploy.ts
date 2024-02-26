// scripts/deploy-and-interact.ts
import { ethers } from 'hardhat';

async function main(): Promise<void> {
  const TokenFactory = await ethers.getContractFactory("TokenFactory");
  const tokenFactory = await TokenFactory.deploy();
  await tokenFactory.deployed();

  console.log("TokenFactory deployed to:", tokenFactory.address);

  // Create a new token
  const tx = await tokenFactory.createToken("MyNewToken", "MNT", 1000000);
  await tx.wait();

  console.log("New token created!");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
