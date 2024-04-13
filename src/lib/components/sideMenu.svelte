<script>
  export let subtitles;

  let selected = "Home";

  function handleClick(st) {
    selected = st.name;
  }
</script>

<div class="bigBox">
  <div class="titleBox">
    <h2>
      {selected}
    </h2>
  </div>
  <div class="subtitlesBox">
    {#each subtitles as st (st.name)}
      <a href={st.link} class:bigTitle={st.bigTitle} on:click={() => handleClick(st)}>{st.name}</a>
    {/each}
  </div>
</div>

<style lang="scss">
  .bigBox {
    min-height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 10rem;
  }

  .titleBox {
    max-width: 12.5rem;
  }

  .bigTitle {
    font-size: 1.125rem;
  }

  h2 {
    font-family: "kallisto", sans-serif;
    font-size: 1.875rem;
    font-style: italic;
    font-weight: 500;
    text-align: right;
  }

  a {
    font-family: "kallisto", sans-serif;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    text-decoration: none;
    color: $primary;
  }

  a:hover {
    text-shadow: 0 0 1px currentColor; // Adjust color and spread as needed
  }

  .subtitlesBox {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  }
</style>
