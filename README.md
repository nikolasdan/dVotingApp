# dVote

A decentralized voting app made in ReactJS usind solidity smart contract.


## Installation

```shell
npm install
```

Compile the contract and upload it to the blockchain network.

```shell
npx hardhat compile
npx hardhat run --network volta scripts/deploy.js
```

Once the contract is uploaded to the blockchain, copy the contract address in the /Constant/constant.js file. 

Once you have pasted your private key and the API url in the .env file, run the command from bellow.

```shell
npm start
```
