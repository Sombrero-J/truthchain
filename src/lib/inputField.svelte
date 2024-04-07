<script>
  import AddSVG from "$lib/static/add.svelte";
  import ReuploadSVG from "$lib/static/reupload.svelte";
  import UploadSVG from "$lib/static/upload.svelte";

  export let placeholder = "Placeholder";
  export let title = "Title";
  export let description = "Description";
  export let inputType = "image";
  let isUploaded = false;
  let imgID = 0;
  export let multipleImage = false;

  let contentID = 0;
  export let content = "";
  export let tmbImageFC = "";
  export let uploadedImage = [];
  let imgDetails = "";
  let refID = 0;
  export let stake = 25;
  export let singleTextValue = "";

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      if (multipleImage) {
        let fileObject = {
          imgID: imgID,
          imgURL: URL.createObjectURL(file),
          imgDetails: imgDetails,
        };
        uploadedImage = [...uploadedImage, fileObject];
        imgID++;
      } else {
        tmbImageFC = URL.createObjectURL(file);
      }
      isUploaded = true;
    } else {
      console.error("File is not a PNG or JPEG");
    }
  }

  function reloadImage(event, id) {
    const file = event.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      uploadedImage = uploadedImage.map((image) =>
        image.imgID === id
          ? { ...image, imgURL: URL.createObjectURL(file) }
          : image
      );
    }
  }

  function reloadThumbnail(event) {
    const file = event.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      tmbImage = URL.createObjectURL(file);
    }
  }
</script>

<div class="bigBox">
  {#if inputType === "image"}
    <label class="main-label" for="file-upload">{title}</label>
    <p>{description}</p>
    {#if tmbImageFC}
      <img src={tmbImageFC} alt="thumbnail" class="uploaded-image" />
      <label for="file-upload" class="custom-file-upload">
        <ReuploadSVG />
      </label>
      <input
        type="file"
        id="file-upload"
        on:change={(e) => reloadThumbnail(e)}
        accept="image/*"
        required
      />
    {:else if uploadedImage.length > 0}
      <div class="imageGallery">
        {#each uploadedImage as image (image.imgID)}
          <div class="imageTextBox">
            <img src={image.imgURL} alt="proof" class="uploaded-image" />
            <div class="imageTextBox-sideBar">
              <div class="imageTextBox-sideBar-textInput">
                <label class="secondary-label" for={`image-text-${image.id}`}
                  >Please provide necessary details of this image</label
                >
                <textarea
                  bind:value={image.imgDetails}
                  class="imageTextArea"
                  type="text"
                  id={`image-text-${image.imgID}`}
                  placeholder="This image... "
                  minlength="30"
                  spellcheck="true"
                  required
                ></textarea>
                <div class="imageTextBox-sideBar-buttonBox">
                  <label for="file-upload" class="custom-file-upload">
                    <ReuploadSVG />
                  </label>
                  <input
                    type="file"
                    id="file-upload"
                    on:change={(e) => reloadImage(e, image.imgID)}
                    accept="image/png, image/jpeg"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
      {#if multipleImage}
        <label for="file-add" class="custom-file-upload">
          <AddSVG />
        </label>
        <input
          type="file"
          id="file-add"
          on:change={handleFileChange}
          accept="image/png, image/jpeg"
          required
        />
      {/if}
    {:else}
      <div class="image-upload-box" class:uploaded={isUploaded}>
        <div class="placeholder-text">No Image Uploaded</div>
        <label for="file-upload" class="custom-file-upload">
          <UploadSVG />
        </label>
        <input
          type="file"
          id="file-upload"
          on:change={handleFileChange}
          accept="image/png, image/jpeg"
          required
        />
      </div>
    {/if}
  {:else if inputType === "text"}
    <label class="main-label" for="text-field">{title}</label>
    <p>{description}</p>
    <textarea
      type="text"
      id="text-field"
      placeholder="There's something you need to know..."
      minlength="150"
      spellcheck="true"
      bind:value={content}
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
      bind:value={stake}
      required
    />
  {:else if inputType === "buttonInput"}
    <label class="main-label" for="number-field">{title}</label>
    <p>{description}</p>
    <slot />
  {:else if inputType === "singleText"}
    <label class="main-label" for="stext-field">{title}</label>
    <p>{description}</p>
    <input
      type="text"
      id="stext-field"
      bind:value={singleTextValue}
      {placeholder}
      required
    />
  {/if}
</div>

<style lang="scss">
  input[type="text"]:focus {
    outline: none;
  }
  input[type="text"] {
    border-radius: $border-radius;
    border: 1px solid $primary;
    min-width: 20rem;
    padding: 0.5em 1em;
  }
  .imageGallery {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .imageTextBox-sideBar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .secondary-label {
    font-size: $fs-small;
  }
  img {
    max-width: 15rem;
  }
  .imageTextArea {
    min-width: 30rem;
    height: 5rem;
    resize: vertical;
  }
  .imageTextBox {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .bigBox {
    font-family: $ff-primary;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }

  // .imageGallery {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  // }

  p {
    margin-top: 0;
    max-width: 50rem;
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
    flex-grow: 0;
    padding: 2px;
    display: flex;
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

  input[type="number"]:focus {
    outline: none;
  }

  textarea {
    padding: 0.5em 1em;
    border-radius: $border-radius;
    border: 1px solid $primary;
    width: 45rem;
    height: 27rem;
    resize: vertical;
  }

  textarea:focus {
    border: 3px solid $primary;
  }

  textarea:focus {
    outline: none;
  }
</style>
