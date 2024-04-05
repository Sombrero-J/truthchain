<script>
  import HomeButton from "$lib/homeButton.svelte";
  import SideMenu from "$lib/sideMenu.svelte";
  import PageTitle from "$lib/pageTitle.svelte";
  import SearchBar from "../../lib/searchBar.svelte";
  import Hamburger from "$lib/static/hamburger.svelte";
  import TcButton from "$lib/tcButton.svelte";
  import ArrowRight from "../../lib/static/arrowRight.svelte";
</script>

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
  <div class="sideBarFooter">
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
  <div class="form-section">
    <slot />
  </div>
  <div class="lastButton">
    <TcButton text="the stake">
      <ArrowRight />
    </TcButton>
  </div>
  <footer>
    <p>copyright 2024 © truthchain</p>
  </footer>
</div>

<!-- </div> -->

<style lang="scss">
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
    height: 100%;
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
    width: 55%;
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
    margin-top: 10rem;
    // position: absolute;
    // bottom: 0;
  }

  .lastButton {
    align-self: flex-end;
    margin-right: 35rem;
  }

  .sideBarFooter {
    width: 100%;
    height: 50px;
    background-color: $secondary;
    position: absolute;
    bottom: 0px;
  }
</style>
