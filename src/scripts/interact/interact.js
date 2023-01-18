import { ethers } from "ethers";
import abi from '../../../lib/abi.json' assert { type: "json"}

import {MATIC_TESTNET_ALCHEMY_RPC_URL, PRIVATE_KEY} from '../../../secrets.js'

export default async function interact() {
    const contractAddress = "0x465ceC24aff06f3B6a0202c679A1bb488b8d5F89";
    const provider = ethers.getDefaultProvider(MATIC_TESTNET_ALCHEMY_RPC_URL);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    const contract = new ethers.Contract(contractAddress, abi, signer);

    const sendTransaction = await contract.deployAndMintCnft("0xaCFCC27FA9ec31c40B38289808cC15e4AEafe05a"); // <<----------------------

    const transaction = await sendTransaction.wait();
    const txhash = transaction.transactionHash
    console.log(txhash)
    return { txhash: txhash }
}