<script>
  console.log("Hello from +page.svelte");
  import TcButton from "$lib/components/tcButton.svelte";
  import AnchorSVG from "$lib/svg/anchor.svelte";
  import CrookSVG from "$lib/svg/crook.svelte";
  import Delete from "$lib/svg/delete.svelte";
  import { writable } from "svelte/store";

  import { onMount } from "svelte";
  import { TezosToolkit } from "@taquito/taquito";
  import { BeaconWallet } from "@taquito/beacon-wallet";
  import { BeaconEvent } from "@airgap/beacon-sdk";

  let preferredNetwork;

  // import("@airgap/beacon-dapp")
  // .then((module) => {
  //   const { NetworkType } = module;
  //   preferredNetwork = NetworkType.GHOSTNET;
  //   // You can now use NetworkType here within this scope
  //   console.log(NetworkType);
  // })
  // .catch((error) => {
  //   console.error("Failed to load module:", error);
  // });

  export let data;

  let contents = writable(data.contents);

  async function handleDelete(id) {
    const response = await fetch(`../api/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      contents.update((currentContents) => {
        return currentContents.filter((content) => content.id !== id);
      });
    } else {
      console.error("Failed to delete content");
    }
  }

  // onMount(() => {
  //   initWallet();
  // });

  // const options = {
  //   name: "My First Wallet",
  //   network: {
  //     type: "ghostnet",
  //   },
  //   enableMetrics: true,
  // };

  // const wallet = new BeaconWallet(options);

  // const initWallet = async () => {
  //   try {
  //     let Tezos = new TezosToolkit("https://ghostnet.ecadinfra.com");
  //     console.log("Requesting permissions");
  //     wallet
  //       .requestPermissions()
  //       .then((_) => wallet.getPKH())
  //       .then((address) => println(`Your address: ${address}`));
  //     Tezos.setWalletProvider(wallet);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // wallet.subscribeToEvent(
  //   BeaconEvent.ACTIVE_ACCOUNT_SET,
  //   async (account) => {
  //     // An active account has been set, update the dApp UI
  //     console.log(`${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `, account);
  //   }
  // );

  // onMount(() => {
  //   const initWallet = async () => {
  //     const wallet = new BeaconWallet({
  //       name: "My dApp",
  //       preferredNetwork: preferredNetwork,
  //       disableDefaultEvents: false,
  //       enableMetrics: true,
  //     });
  //     Tezos.setWalletProvider(wallet);
  //   };

  //   initWallet();
  // });

  // onMount(async () => {
  // if (wallet) {
  //   try {
  //     await wallet.requestPermissions({
  //       network: {
  //         type: preferredNetwork,
  //         rpcUrl: "https://ghostnet.ecadinfra.com",
  //       },
  //     });
  //     const userAddress = await wallet.getPKH();
  //     // setUserAddress(userAddress);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // });
</script>

{#if $contents.length === 0}
  <div id="nocontent">No contents found</div>
{:else}
  {#each $contents as content (content.id)}
    <div class="bigBox">
      <div class="title">{content.title}</div>
      <div class="date">{content.createdAt}</div>
      <img
        class="thumbnail"
        src={content.thumbnailImg}
        alt={content.images[0].text_details}
      />
      <div class="text">
        {content.contentText}
      </div>
      <div class="source">
        {content.references[0].link}
        <div class="imageBox">
          {#each content.images as image (image.id)}
            <img
              src={image.imageURL}
              alt={image.text_details}
              width="100"
              height="100"
            />
            <p>{image.text_details}</p>
          {/each}
        </div>
      </div>
      <div class="buttonBox">
        <button>Hitch</button>
        <button>Crook</button>
      </div>
      <button class="deleteButton" on:click={() => handleDelete(content.id)}>
        <Delete />
      </button>
    </div>
  {/each}
{/if}

<TcButton text="Connect to Wallet" />

<style lang="scss">
  #nocontent {
    font-family: $ff-primary;
    font-size: $fs-large;
    font-weight: 700;
  }
  .deleteButton {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  div {
    padding: 0.5em 1em;
    border-radius: $border-radius;
  }

  .bigBox {
    font-family: $ff-secondary;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    gap: 0.5rem;
    background-color: rgb(242, 242, 242);
    box-shadow: 0 0 1rem rgb(0, 0, 0, 0.1);
    position: relative;
  }

  .title {
    font-size: $fs-xlarge;
    font-weight: 700;
  }

  .date {
    font-family: "Times New Roman", Times, serif;
    font-size: $fs-small;
    font-weight: 300;
  }

  .thumbnail {
    width: 100%;
    height: auto;
  }

  .text {
    font-size: $fs-small;
    font-family: sans-serif;
    font-weight: 200;
    text-align: justify;
  }

  .source {
    // background-color: rgb(230, 220, 184);
    border: 2px solid rgb(230, 220, 184);
    font-size: $fs-small;
    font-family: sans-serif;
    font-weight: 200;
    max-width: 90%;
    color: black;
  }

  .buttonBox {
    display: flex;
    gap: 0.5rem;
    background-color: rgb(222, 222, 222);
    min-width: 12rem;
    border-radius: 10px;
  }

  button {
    cursor: pointer;
    font-family: sans-serif;
    padding: 0.5em 0.75em;
    background-color: transparent;
    color: $primary;
    border: none;
    border-radius: $border-radius;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  button:hover {
    background-color: $primary;
    color: white;
  }
</style>
