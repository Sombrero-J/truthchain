<script>
  export let title = "Title";
  export let description = "Description";
  export let inputType = "image";

  let uploadedImage = null;
  let textvalue = "Hello";

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      // Create a URL for the file
      uploadedImage = URL.createObjectURL(file);
    } else {
      console.error("File is not a PNG or JPEG");
    }
  }
</script>

<div class="bigBox">
  {#if inputType === "image"}
    <label class="main-label" for="file-upload">{title}</label>
    <p>{description}</p>
    <div class="image-upload-box">
      {#if uploadedImage}
        <img src={uploadedImage} alt="thumbnail" class="uploaded-image" />
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
    <div>
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
    </div>
  {/if}
</div>

<style lang="scss">
  .bigBox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
    outline: 1px solid $primary;
    max-width: 45rem;
  }

  p{
    margin-top: 0;
  }

  .main-label {
    color: $primary;
    font-family: Exo;
    font-size: 1.75rem;
    font-weight: 600;
  }
  .image-upload-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border: 1px dotted $primary;
    max-width: 16rem;
    padding: 3rem;
    border-radius: $border-radius;
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

  textarea {
    padding: 0.5em 1em;
    border-radius: $border-radius;
    border: 1px solid $primary;
    width: 45rem;
    height: 27rem;
    resize: none;
  }

  textarea:focus {
    outline: none;
  }
</style>
