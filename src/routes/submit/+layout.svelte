<script>
  import HomeButton from '$lib/homeButton.svelte';
  import SideMenu from '$lib/sideMenu.svelte';
</script>

<div class="bigBox">
  <div class="sideBar">
    <HomeButton />
    <div class="sidemenu">
      <SideMenu title="post submission" subtitles={['the content', 'the stake', 'the submission']} />
    </div>
  </div>
  <div class="mainBar">
    <slot></slot>
  </div>
</div>

<style lang="scss">

  .bigBox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
  }

  .sidemenu{
    position: relative;
    margin: auto 0;
  }

  .sideBar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    height: 100%;
    background-color: #f0f0f0;
  }
  .mainBar {
    width: 80%;
    height: 100%;
    background-color: aqua;
  }
</style>