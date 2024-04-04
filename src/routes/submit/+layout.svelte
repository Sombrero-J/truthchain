<script>
  import HomeButton from "$lib/homeButton.svelte";
  import SideMenu from "$lib/sideMenu.svelte";
  import PageTitle from "$lib/pageTitle.svelte";
  import SearchBar from "../../lib/searchBar.svelte";
  import Hamburger from "$lib/static/hamburger.svelte";
</script>

<div class="bigBox">
  <div class="sideBar">
    <HomeButton />
    <div class="sidemenu">
      <SideMenu
        title="post submission"
        subtitles={[
          { name: "the content", link: "/submit" },
          { name: "the stake", link: "/submit/stake" },
          { name: "the submission", link: "/submit/finalSubmission" },
        ]}
      />
    </div>
  </div>
  <div class="mainBar">
    <nav>
      <PageTitle title="the content" />
      <div class="navSide">
        <SearchBar />
        <Hamburger />
      </div>
    </nav>
    <slot />
  </div>
</div>

<style lang="scss">
  .bigBox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
  }

  .sidemenu {
    position: relative;
    margin: auto 0;
  }

  .sideBar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    height: 100%;
    padding: 1.125rem;
  }
  .mainBar {
    width: 80%;
    height: 100%;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 1rem;
    margin-top: 1.8rem;
  }

  .navSide {
    display: flex;
    gap: 1rem;
    margin-right: 2rem;
  }
</style>
