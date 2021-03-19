<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  let date;
  let greeting;

  onMount(async () => {
    await fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => (greeting = data.greeting));
    const res = await fetch("/api/date");
    const newDate = await res.text();
    date = newDate;
  });
</script>

<main>
  <h1>
    Deployed with
    <a href="https://vercel.com/docs" target="_blank" rel="noreferrer noopener">
      Vercel
    </a>
    !
  </h1>
  <p>
    <a
      href="https://github.com/vercel/vercel/tree/master/examples/svelte"
      target="_blank"
      rel="noreferrer noopener"
    >
      This project
    </a>
    is a
    <a href="https://svelte.dev/">Svelte</a>
    app which contains two serverless
    <a href="https://nodejs.org/en/">Node.js</a>
    functions.
  </p>
  <br />
  <h2 transition:fade>Hello serverless function!</h2>
  {#if greeting}
    <p>{greeting}</p>
  {/if}
  {#if greeting}
    <h2 transition:fade>What day is it?</h2>
  {/if}
  {#if greeting && date}
    <p>{date}</p>
  {/if}
</main>
