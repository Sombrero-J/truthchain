<script>
  import InputField from "$lib/inputField.svelte";
  import { getContext } from "svelte";
  import TcButton from "$lib/tcButton.svelte";
  import ArrowRight from "$lib/static/arrowRight.svelte";

  let stake = "";

  function handleSubmit() {
    const data = {
      stake: stake,
    };
    console.log(data);
  }

  const updateHrefLink = getContext("updateHref");
  updateHrefLink("/submit/");
  let updateText = getContext("text");
  updateText("submit");
</script>

<InputField
  title="Stake Field"
  description="Enter the amount of stake you would like to put. 
  (Minimum 25Tz)"
  inputType="numberInput"
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
