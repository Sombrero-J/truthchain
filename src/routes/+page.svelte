<script>
  import TcButton from "$lib/tcButton.svelte";
  import AnchorSVG from "$lib/static/anchor.svelte";
  import CrookSVG from "$lib/static/crook.svelte";
</script>

<div class="bigBox">
  <div class="title">Lorem ipsum dolor sit amet.</div>
  <div class="date">03-05-2024</div>
  <img
    class="thumbnail"
    src="https://static01.nyt.com/images/2013/07/07/world/07plane_7/07plane_7-superJumbo.jpg"
    alt="plane crash"
  />
  <div class="text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, vel.
    Voluptas, magni labore corporis corrupti qui earum dolorum voluptate
    incidunt adipisci, hic sit dolores voluptatum laborum aliquid quod rerum a
    amet, explicabo itaque sed inventore nihil non. Nisi asperiores fuga unde
    libero. Corporis accusamus debitis deleniti cupiditate asperiores dolorum
    repellat quas ea doloribus alias necessitatibus laboriosam vel praesentium
    perferendis vitae tempora, amet aliquid. Obcaecati ipsam voluptatum
    repellendus, nam tempore perspiciatis, quas consequatur voluptates ullam
    error repellat tempora suscipit id laborum sint eaque facilis dolorum nisi,
    magni cum ut nemo. Aliquam enim reprehenderit voluptatibus placeat accusamus
    soluta laboriosam sed quas delectus qui itaque esse veniam fuga explicabo
    natus deleniti, at voluptatem earum amet eum nam in ex sunt. Dolor,
    perspiciatis. Accusantium nobis sint numquam quas, amet provident soluta a
    obcaecati natus magni odit adipisci dolorum iusto eum fuga! Mollitia alias
    molestiae ipsum! Atque dolor placeat excepturi eum totam? Hic, perspiciatis
    commodi!
  </div>
  <div class="source">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quisquam
    laborum commodi temporibus sit corrupti possimus fuga reiciendis pariatur
    distinctio. Consequuntur eos totam, accusamus, nihil, nisi ipsum iusto sed
    quia ipsa reprehenderit magni molestiae velit perspiciatis rerum aperiam.
    Unde, facere!
  </div>
  <div class="buttonBox">
    <button>Hitch</button>
    <button>Crook</button>
  </div>
</div>

<style lang="scss">
  div {
    padding: 0.5em 1em;
    border-radius: $border-radius;
  }

  .bigBox {
    font-family: $ff-secondary;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    gap: 0.5rem;
    background-color: rgb(242, 242, 242);
    box-shadow: 0 0 1rem rgb(0, 0, 0, 0.1);
  }

  .title {
    font-size: $fs-xlarge;
    font-weight: 700;
  }

  .date {
    font-family: "Times New Roman", Times, serif;
    font-size: $fs-small;
    font-weight: 300;
  }

  .thumbnail {
    width: 100%;
    height: auto;
  }

  .text {
    font-size: $fs-small;
    font-family: sans-serif;
    font-weight: 200;
    text-align: justify;
  }

  .source {
    // background-color: rgb(230, 220, 184);
    border: 2px solid rgb(230, 220, 184);
    font-size: $fs-small;
    font-family: sans-serif;
    font-weight: 200;
    max-width: 90%;
    color: black;
  }

  .buttonBox {
    display: flex;
    gap: 0.5rem;
    background-color: rgb(222, 222, 222);
    min-width: 12rem;
    border-radius: 10px;
  }

  button {
    cursor: pointer;
    font-family: sans-serif;
    padding: 0.5em 0.75em;
    background-color: transparent;
    color: $primary;
    border: none;
    border-radius: $border-radius;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  button:hover {
    background-color: $primary;
    color: white;
  }
</style>
