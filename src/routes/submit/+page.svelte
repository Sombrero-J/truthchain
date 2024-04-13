<script>
  import InputField from "$lib/components/inputField.svelte";
  import TcButton from "$lib/components/tcButton.svelte";
  import ArrowRight from "$lib/svg/arrowRight.svelte";
  import { goto } from "$app/navigation";
  import { contentSubmission } from "../formStore.js";
  import { setContext } from "svelte";

  setContext("pageTitle", "the content");

  let tmbImage = "";
  let content = "";
  let contentTitle = "";

  function handleSubmit(event) {
    contentSubmission.update((data) => {
      data.tmbImage = tmbImage;
      data.content = content;
      data.contentTitle = contentTitle;
      return data;
    });
    console.log($contentSubmission);
    navigate();
  }

  function navigate() {
    goto("/submit/proof");
  }
</script>

<InputField
  title="Thumbnail Field"
  description="The thumbnail must be relevant to your topic."
  inputType="image"
  bind:tmbImageFC={tmbImage}
/>

<InputField
  title="Content Field"
  description="Your content must obey the rules written in the content rules section."
  inputType="text"
  bind:content
/>

<InputField
  title="Title Field"
  description="Your title must not be misleading, exaggerated, or clickbait."
  inputType="singleText"
  placeholder="The fall of the Roman Empire"
  bind:singleTextValue={contentTitle}
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
