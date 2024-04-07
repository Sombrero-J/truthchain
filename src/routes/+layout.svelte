<script>
  import HomeButton from "$lib/homeButton.svelte";
  import SideMenu from "$lib/sideMenu.svelte";
  import PageTitle from "$lib/pageTitle.svelte";
  import SearchBar from "../lib/searchBar.svelte";
  import Hamburger from "$lib/static/hamburger.svelte";
</script>

<div class="sideBar">
  <HomeButton />
  <div class="sidemenu">
    <SideMenu
      title="content submission"
      subtitles={[
        {name: "Home", link: "/", bigTitle: true},
        { name: "Rules", link: "/rules", bigTitle: true},
        { name: "Content Submission", link: "/submit", bigTitle: true},
        // { name: "the proof", link: "/submit/proof" },
        // { name: "the stake", link: "/submit/stake" },
      ]}
    />
  </div>
</div>
<div class="bigBody">
  <div class="mainBar">
    <nav>
      <PageTitle title="home" />
      <div class="navSide">
        <SearchBar />
        <Hamburger />
      </div>
    </nav>
    <div class="form-section">
      <slot />
    </div>
  </div>
  <footer>
    <p>copyright 2024 © truthchain</p>
  </footer>
</div>

<style lang="scss">
  .bigBody {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }
  .sideBar {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 22rem;
    height: 100%;
    padding: 1.125rem;
  }

  .sidemenu {
    position: relative;
    margin: auto 0;
  }

  .mainBar {
    margin-left: 22rem;
    // min-height: 100dvh;
    flex-grow: 1;
    // padding: 0 2rem;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 0rem 1rem;
    margin-top: 1.8rem;
    position: sticky;
  }

  .navSide {
    display: flex;
    gap: 1rem;
    margin-right: 3rem;
  }

  .form-section {
    // width: 55%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem 0;
  }

  footer {
    font-family: $ff-secondary;
    display: flex;
    width: 100%;
    padding: 0.5em 3em;
    justify-content: center;
    align-items: center;
    background-color: $secondary;
    // position: absolute;
    // bottom: 0px;
    margin-top: 10rem;
  }
</style>
