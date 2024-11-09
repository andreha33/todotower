<script>
import Item from './Item.svelte';

let data = [
  'This is a test',
  'This is a test',
  'This is a test',
]

let grid;

$effect(async() => {
  const Muuri = (await import('muuri')).default
  new Muuri(grid, {
    dragEnabled: true
  })
})

</script>
<div class='p-4'>
  <h1 class='mb-4'>Todo list</h1>
  <div class='relative w-[20em]' bind:this={grid}>
    {#each data as card}
      <Item text={card}/>
    {/each}
  </div>
</div>

<style>
  :global(.muuri-item-dragging) {
    z-index: 3;
  }

  :global(.muuri-item-releasing) {
    z-index: 2;
  }

  :global(.muuri-item-hidden) {
    z-index: 0;
  }
</style>