<script>
  import TcButton from "./tcButton.svelte";

  export let title = "Title";
  export let description = "Description";
  export let inputType = "image";
  let isUploaded = false;

  let uploadedImage = null;

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      // Create a URL for the file
      uploadedImage = URL.createObjectURL(file);
      isUploaded = true;
    } else {
      console.error("File is not a PNG or JPEG");
    }
  }
</script>

<div class="bigBox">
  {#if inputType === "image"}
    <label class="main-label" for="file-upload">{title}</label>
    <p>{description}</p>
    <div class="image-upload-box" class:uploaded={isUploaded}>
      {#if uploadedImage}
        <img src={uploadedImage} alt="thumbnail" class="uploaded-image" />
        <TcButton
          text="Reupload"
          action={() => console.log("Reupload button clicked")}
        />
      {:else}
        <div class="placeholder-text">No Image Uploaded</div>
        <label for="file-upload" class="custom-file-upload">
          Upload an image
        </label>
        <input
          type="file"
          id="file-upload"
          on:change={handleFileChange}
          accept="image/png, image/jpeg"
        />
      {/if}
    </div>
  {:else if inputType === "text"}
    <label class="main-label" for="text-field">{title}</label>
    <p>{description}</p>
    <textarea
      type="text"
      id="text-field"
      placeholder="There's something you need to know..."
      minlength="150"
      spellcheck="true"
      required
    ></textarea>
    {:else if inputType === "numberInput"}
      <label class="main-label" for="number-field">{title}</label>
      <p>{description}</p>
      <input
        type="number"
        id="number-field"
        min="20"
        placeholder="minimum: 20"
        value="25"
        step="20"
        required
      />
    {:else if inputType === "buttonInput"}
      <label class="main-label" for="number-field">{title}</label>
      <p>{description}</p>
      <slot></slot>
    {/if}

</div>

<style lang="scss">
  .bigBox {
    font-family: $ff-primary;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }

  p {
    margin-top: 0;
  }

  .main-label {
    font-size: $fs-large;
    font-weight: 600;
    margin-bottom: 0.3em;
  }
  .image-upload-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    border: 1.5px dashed $primary;
    width: 16rem;
    min-height: 10rem;
    border-radius: $border-radius;
  }
  .uploaded {
    border: none;
  }

  .custom-file-upload {
    padding: 0.5em 1em;
    background-color: $primary;
    color: white;
    border-radius: $border-radius;
    cursor: pointer;
  }

  input[type="file"] {
    display: none;
  }

  input[type="number"] {
    border-radius: $border-radius;
    border: 1px solid $secondary;
    padding: 0.5em;
  }

  textarea {
    padding: 0.5em 1em;
    border-radius: $border-radius;
    border: 3px solid $primary;
    width: 45rem;
    height: 27rem;
    resize: none;
  }

  textarea:focus {
    outline: none;
  }
</style>
