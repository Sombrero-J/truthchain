<script>
  import InputField from "$lib/inputField.svelte";
  import TcButton from "$lib/tcButton.svelte";
  import {contentSubmission} from "../../formStore.js"

  let stake = 0;

  function handleSubmit() {
    contentSubmission.update((data) => {
      data.stake = stake;
      return data;
    });
    console.log($contentSubmission);
  }
</script>

<InputField
  title="Stake Field"
  description="Enter the amount of stake you would like to put. 
  (Minimum 25Tz)"
  inputType="numberInput"
  bind:stake={stake}
/>

<div class="lastButton">
  <TcButton text="submit" action={handleSubmit} />
</div>

<style>
  .lastButton {
    align-self: flex-end;
    margin-right: 35rem;
  }
</style>
