<script>
  import InputField from "$lib/components/inputField.svelte";
  import TcButton from "$lib/components/tcButton.svelte";
  import ArrowRight from "$lib/svg/arrowRight.svelte";
  import { goto } from "$app/navigation";
  import {contentSubmission} from "../../formStore.js"
  import {setContext} from "svelte";

  setContext("pageTitle", "the proof");

  let uploadedImage = [];
  let refURL = "";

  function handleSubmit() {
    contentSubmission.update((data) => {
      data.images = uploadedImage;
      data.references = refURL;
      return data;
    });
    navigate();
  }
  
  function navigate() {
    goto("/submit/stake");
  }
</script>

  <InputField
    title="Images Field"
    description="Upload images that support your content."
    inputType="image"
    multipleImage={true}
    bind:uploadedImage={uploadedImage}
  />

  <InputField
    title="Reference Field"
    description="You must provide references or source of content."
    inputType="singleText"
    placeholder="https://www.example.com"
    bind:singleTextValue={refURL}
  />

  <div class="lastButton">
    <TcButton text="the proof" action={handleSubmit}>
      <ArrowRight />
    </TcButton>
  </div>

<style>
  .lastButton {
    align-self: flex-end;
    margin-right: 35rem;
  }
</style>
