<script>
  import InputField from "$lib/components/inputField.svelte";
  import TcButton from "$lib/components/tcButton.svelte";
  import { contentSubmission } from "../../formStore.js";
  import {setContext} from "svelte";
  import {goto} from "$app/navigation";

  setContext("pageTitle", "the stake");

  let stake = 25;

  async function handleSubmit() {
    contentSubmission.update((data) => {
      data.stake = stake;
      return data;
    });
    const jsonBody = JSON.stringify($contentSubmission);
    const response = await fetch("../../api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonBody,
    });
    const data = await response.json();
    navigateToHome();
  }

  function navigateToHome(){
    goto("/");

  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <InputField
    title="Stake Field"
    description="Enter the amount of stake you would like to put. 
  (Minimum 25Tz)"
    inputType="numberInput"
    bind:stake
  />

  <div class="lastButton">
    <TcButton text="submit" type="submit" />
  </div>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 40%;
  }
  .lastButton {
    align-self: flex-end;
    margin-top: 5rem;
  }
</style>
