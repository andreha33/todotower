<svelte:head>
  <title>TodoTower</title>
</svelte:head>

<script>
  import '../app.css';
  let { children } = $props();
</script>

{@render children()}