<script>
  import SearchSVG from "$lib/static/search.svelte";
</script>

<div class="searchBox">
  <SearchSVG />
</div>

<style lang="scss">
  .searchBox {
    display: flex;
    width: 10.40625rem;
    padding: 0.41294rem 0.66069rem;
    min-height: 3rem;
    align-items: center;
    gap: 0.66069rem;
    border-radius: 0.5rem;
    border: 1px solid $secondary;
  }
</style>