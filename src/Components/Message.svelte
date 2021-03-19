<script>
  import Card from './Card.svelte';
  import MessageComponent from './MessageComponent.svelte';
  import Embed from './Embed.svelte';
  // import Image from './Image.svelte';
  export let messages;
  // export let cardData;
</script>

{#each $messages as message}
  {#if message.text}
    <MessageComponent {message} />
  {/if}
  {#if message.richCard}
    <Card cardData={message.cardData} />
  {/if}
  {#if message.videoCard}
    <Embed data={message.data} />
  {/if}
{/each}

<!-- <Card {cardData} /> -->
<!-- <Image />
<Embed /> -->
