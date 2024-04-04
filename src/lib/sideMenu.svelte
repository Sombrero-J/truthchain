<script>
  export let title;
  export let subtitles;
</script>

<div class="bigBox">
  <h2>
    {title}
  </h2>
  <div class="subtitlesBox">
    {#each subtitles as st}
      <p>{st}</p>
    {/each}
  </div>
</div>

<style>
  .bigBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    outline: 1px solid black;
  }

  h2 {
    font-family: "kallisto", sans-serif;
    font-size: 1.875rem;
    font-style: italic;
    font-weight: 500;
  }

  p {
    margin: 0.5rem 0;
    font-family: "kallisto", sans-serif;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
  }

  p:hover {
    font-weight: 700;
  }

  .subtitlesBox {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-top: 3.12rem;
  }
</style>
