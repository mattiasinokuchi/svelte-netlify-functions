<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  let showText;

  onMount(async () => {
    await delay(1000);
    showText = "Hello serverless function!";
    await delay(2000);
    showText = false;
    let response = await fetch("/api/hello");
    let object = await response.json();
    showText = object.greeting;
    await delay(2000);
    showText = false;
    await delay(1000);
    showText = "What day is it?";
    await delay(1000);
    showText = false;
    response = await fetch("/api/day");
    let day = await response.text();
    showText = day;
    await delay(2000);
    showText = false;
    await delay(1000);
    showText = "Where am I?";
    await delay(1000);
    showText = false;
    await delay(1000);
    response = await fetch("http://ip-api.com/json/");
    let place = await response.json();
    showText = place.city + " in " + place.country + "?";
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
  {#if showText}
    <h2 transition:fade>{showText}</h2>
  {/if}
</main>
