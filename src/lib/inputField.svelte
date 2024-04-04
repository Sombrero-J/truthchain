<script>
  export let title = "Title";
  export let description = "Description";

  let uploadedImage = null;

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

<h3>
  {title}
</h3>
<p>{description}</p>

<div class="image-upload-box">
  {#if uploadedImage}
    <img src={uploadedImage} alt="thumbnail" class="uploaded-image" />
  {:else}
    <div class="placeholder-text">No Image Uploaded</div>
  {/if}

  <label for="file-upload" class="custom-file-upload"> Upload an image </label>
  <input
    type="file"
    id="file-upload"
    on:change={handleFileChange}
    accept="image/png, image/jpeg"
  />
</div>

<style lang="scss">
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

    input[type=file]{
        display: none;
    }
</style>