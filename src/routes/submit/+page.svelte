<script>
  import InputField from "../../lib/inputField.svelte";
  import TcButton from "../../lib/tcButton.svelte";
  import ArrowRight from "$lib/static/arrowRight.svelte";
  import { goto } from "$app/navigation";

  let tmbImage = "";
  let content = "";
  let contentTitle = "";

  function handleSubmit(event) {
    const data = {
      tmbImage: tmbImage,
      content: content,
      contentTitle: contentTitle,
    }
    console.log(data);
    navigate();
  }

  function navigate() {
    goto("/submit/proof");
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
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
    bind:content={content}
  />

  <InputField
    title="Title Field"
    description="Your title must not be misleading, exaggerated, or clickbait."
    inputType="singleText"
    placeholder="The fall of the Roman Empire"
    bind:contentTitle={contentTitle}
  />

  <div class="lastButton">
    <TcButton text="the proof" action={handleSubmit}>
      <ArrowRight />
    </TcButton>
  </div>
</form>

<style>
  .lastButton {
    align-self: flex-end;
    margin-right: 35rem;
  }
</style>
