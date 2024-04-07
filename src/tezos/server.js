import dotenv from "dotenv";
dotenv.config();
import { InMemorySigner } from "@taquito/signer";
import { TezosToolkit } from "@taquito/taquito";
// import { BeaconWallet } from "@taquito/beacon-wallet";

let tezosToolkit = new TezosToolkit("https://ghostnet.ecadinfra.com");

// const options = {
//   name: "TruthChain",
//   iconUrl: "https://taquito.io/img/favicon.svg",
//   network: { type: "ghostnet" },
//   eventHandlers: {
//     PERMISSION_REQUEST_SUCCESS: {
//       handler: async (data) => {
//         console.log("permission data:", data);
//       },
//     },
//   },
// };
// const wallet = new BeaconWallet(options);
// tezosToolkit.setProvider({ wallet });

async function main() {
  const privateKey = process.env.PRIVATE_KEY;

  const signer = await InMemorySigner.fromSecretKey(privateKey);

  //   const pkh = await signer.publicKeyHash();

  //   const pkh = await wallet.getPKH();

  tezosToolkit.setProvider({ signer });

  //   const contract = await tezosToolkit.wallet.at('KT1TBxaaeikEUcVN2qdQY7n9Q21ykcX1NLzY');

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

// main().catch(console.error);
