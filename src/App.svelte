<script>
  import Spinner from './Components/Spinner.svelte';
  import { fade } from 'svelte/transition';
  let showChatBot = false;
  let loading = true;
  let DobbyUI = null;

  const handleClick = async () => {
    showChatBot = !showChatBot;

    if (showChatBot && !DobbyUI) {
      let module = await import('./Components/DobbyIO.svelte');
      DobbyUI = module.default;
    }
    if (DobbyUI && loading) loading = false;
  };
</script>

<!-- DobbyIO -->
<div
  class="chatbot"
  style="z-index:999;top:auto"
  class:max-height={showChatBot}
>
  <div on:click={handleClick} class={`chatbot__header`}>
    <h5 class="mt-3 ellipse">
      <strong>Feeling Bored ?</strong>
      <span class="font-weight-bold">Dobby's Here 😋</span>
    </h5>

    <!-- Close icon -->
    {#if showChatBot}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="24px"
        height="24px"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    {/if}
  </div>
  <div>
    {#if loading && showChatBot}
      <div class="spinner-container">
        <Spinner />
      </div>
    {/if}
  </div>
  {#if showChatBot}
    <div in:fade class="message_container">
      <svelte:component this={DobbyUI} />
    </div>
  {/if}
</div>

<!-- /DobbyIO -->
<style>
  .spinner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 494px;
    height: 100%;
    background: transparent;
    backdrop-filter: blur(9px);
  }
  .max-height {
    height: auto;
  }
  @media (max-width: 647px) {
    .max-height {
      height: 100%;
    }
  }
  .message_container {
    height: 100%;
  }
  .ellipse {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
