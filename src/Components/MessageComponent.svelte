<script>
  export let message;
</script>

<li class:is-ai={message.bot} class:is-user={!message.bot} class="animation">
  {#if !message.bot}
    <span class="chatbot__message">
      {message.text}
    </span>
  {/if}
  <span
    class:chatbot__arrow--left={message.bot}
    class:chatbot__arrow--right={!message.bot}
    class="chatbot__arrow"
  />
  {#if message.bot}
    <span class="chatbot__message">
      {@html message.text}
    </span>
  {/if}
</li>
