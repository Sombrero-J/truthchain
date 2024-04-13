import dotenv from "dotenv";
dotenv.config();
import { InMemorySigner } from "@taquito/signer";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
// import { TezosOperationType } from "@airgap/beacon-sdk";

let tezosToolkit = new TezosToolkit("https://ghostnet.ecadinfra.com");

export async function callContractWithInMemSigner() {
  const privateKey = process.env.PRIVATE_KEY;

  const signer = await InMemorySigner.fromSecretKey(privateKey);

  tezosToolkit.setProvider({ signer });

  tezosToolkit.contract
    .at("KT1Q8Y5nk7t2VFYe4my6mSn8YS8BfkNQ57sA")
    .then((c) => {
      console.log("in contract");
      c.methodsObject.addIDtoMap(777).send();
      //   let methods = c.parameterSchema.ExtractSignatures();
      //   console.log(JSON.stringify(methods, null, 2));
    })
    .then((op) => {
      console.log(`Hash: ${op.opHash}`);
      return op.confirmation();
    })
    .then((result) => {
      console.log(result);
      if (result.completed) {
        console.log(`Transaction correctly processed!
      Block: ${result.block.header.level}
      Chain ID: ${result.block.chain_id}`);
      } else {
        console.log("An error has occurred");
      }
    })
    .catch((err) => console.log(err));
}

export const useWallet = async () => {
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  tezosToolkit.setWalletProvider(wallet);

  let myAddress;

  // This code should be called every time the page is loaded or refreshed to see if the user has already connected to a wallet.
  const activeAccount = await wallet.client.getActiveAccount();
  if (activeAccount) {
    // If defined, the user is connected to a wallet.
    // You can now do an operation request, sign request, or send another permission request to switch wallet
    console.log("Already connected:", activeAccount.address);
    myAddress = activeAccount.address;
  } else {
    await wallet.requestPermissions();
    myAddress = await wallet.getPKH();
    console.log("New connection:", myAddress);
  }

  // At this point we are connected to an account.
  // Let's send a simple transaction to the wallet that sends 1 mutez to ourselves.
  // const hash = await wallet.sendOperations([
  //   {
  //     kind: TezosOperationType.TRANSACTION,
  //     destination: myAddress, // Send to ourselves
  //     amount: "1", // Amount in mutez, the smallest unit in Tezos
  //   },
  // ]);
};
