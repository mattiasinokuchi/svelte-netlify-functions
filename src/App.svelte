<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  let callVisible = false;
  let answerVisible = false;
  let call;
  let answer;
  let date;

  onMount(async () => {
    await delay(2000);
    call = "Hello serverless function!";
    await delay(1000);
    let response = await fetch("/api/hello");
    let object = await response.json();
    answer = object.greeting;
    await delay(2000);
    call = "What day is it?";
    await delay(1000);
    response = await fetch("/api/date");
    const newDate = await response.text();
    answer = newDate;
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
  {#if call}
    <h2 transition:fade>{call}</h2>
  {/if}
  {#if answer}
    <p transition:fade>{answer}</p>
  {/if}
</main>
