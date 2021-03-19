<script>
  export let data;
</script>

<div class="Embed-container">
  <div class="iframe-container">
    <iframe
      title="youtube video"
      width="560"
      height="315"
      src={data.iframe}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      loading="lazy"
    />
  </div>
  {#if data.title}
    <h3 class="padding">{data.title}</h3>
  {/if}
  {#if data.description}
    <h4 class="padding">{@html data.description}</h4>
  {/if}
</div>

<style>
  .iframe-container {
    width: 323px;
    position: relative;
    height: 0px;
    padding-bottom: calc(100% / (16 / 9));
    display: flex;
    overflow: hidden;
    border-radius: 8px 8px 0px 0px;
    /* box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 1px 3px 1px rgb(60 64 67 / 15%); */
  }
  .Embed-container {
    border-radius: 8px;
    width: 323px;
    background-color: #fbfafa;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 1px 3px 1px rgb(60 64 67 / 15%);
    margin-bottom: 15px;
  }
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* border-radius: 8px; */
  }
  .padding {
    font-family: 'Poppins', sans-serif;
    padding: 5px 12px;
  }
  h3 {
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1rem;
  }
</style>
