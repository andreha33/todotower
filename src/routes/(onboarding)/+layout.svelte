<script>
  let { children } = $props();
</script>

<div class='min-h-dvh'>
  <header class='flex justify-between ~px-4/8 py-4 max-w-screen-2xl mx-auto'>
    <a href='/'>Logo</a>
    <nav class='flex gap-8'>
      <a href='/'>home</a>
      <a href='/app'>app</a>
      <a href='/about'>about</a>
    </nav>
  </header>
  <main>
  {@render children()}
  </main>
</div>

<footer class='~px-4/8 py-4'>
  © ESS Studios {new Date().getFullYear()}
</footer>

