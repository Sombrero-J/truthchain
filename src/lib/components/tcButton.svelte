<script>
  export let action = () => {}; // A default action if none is provided
  export let text = ""; // Default button text
  export let type = "button"; // Default to 'button' if not specified
</script>

<button {type} on:click={action}>
  {text}<slot />
</button>

<style lang="scss">
  button {
    cursor: pointer;
    font-family: $ff-secondary;
    padding: 0.5em 0.75em;
    background-color: $primary;
    color: $accent;
    border: 1px solid transparent; // Set a transparent border
    border-radius: $border-radius;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    background-color: $accent;
    border: 1px solid $primary;
    color: $primary;
  }
</style>
