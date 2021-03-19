<script>
  export let showTyping;
</script>

{#if showTyping}
  <li class:is-ai={true} class="animation">
    <span class:chatbot__arrow--left={true} class="chatbot__arrow" />
    <span class="chatbot__message">
      <div class="ticontainer">
        <div class="tiblock">
          <div class="tidot" />
          <div class="tidot" />
          <div class="tidot" />
        </div>
      </div>
    </span>
  </li>
{/if}

<style>
  .tiblock {
    align-items: center;
    display: flex;
    height: 17px;
  }

  .ticontainer .tidot {
    background-color: #90949c;
  }

  .tidot {
    animation: mercuryTypingAnimation 1.5s infinite ease-in-out;
    border-radius: 2px;
    display: inline-block;
    height: 4px;
    margin-right: 2px;
    width: 4px;
  }

  @keyframes mercuryTypingAnimation {
    0% {
      transform: translateY(0px);
    }
    28% {
      transform: translateY(-5px);
    }
    44% {
      transform: translateY(0px);
    }
  }

  .tidot:nth-child(1) {
    animation-delay: 200ms;
  }
  .tidot:nth-child(2) {
    animation-delay: 300ms;
  }
  .tidot:nth-child(3) {
    animation-delay: 400ms;
  }
</style>
