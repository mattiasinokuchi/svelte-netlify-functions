<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  let text;
  let date;

  onMount(async () => {
    await delay(2000);
    text = "Hello serverless function!";
    await delay(1000);
    let response = await fetch("/api/hello");
    let object = await response.json();
    text = object.greeting;
    await delay(2000);
    text = "What day is it?";
    await delay(1000);
    response = await fetch("/api/date");
    const newDate = await response.text();
    text = newDate;
  });

  function delay(delayInms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }
</script>

<main>
  <p>
    This is a
    <a href="https://svelte.dev/">Svelte</a>
    app deployed with
    <a
      href="https://github.com/vercel/vercel/tree/master/examples/svelte"
      target="_blank"
      rel="noreferrer noopener"
    >
      Vercel
    </a>
    which contains two serverless
    <a href="https://nodejs.org/en/">Node.js</a>
    functions.
  </p>
  <br />
  {#if text}
    <h2 transition:fade>{text}</h2>
  {/if}
</main>
