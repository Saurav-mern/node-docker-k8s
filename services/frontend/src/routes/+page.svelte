<script>
  let result = null;

  async function callApi() {
    const res = await fetch('/api/process');
    result = await res.json();
  }
</script>

<h1>Checkout Demo</h1>

<button on:click={callApi}>Call Backend</button>

{#if result}
  <pre>{JSON.stringify(result, null, 2)}</pre>
{/if}
