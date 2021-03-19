<script>
  export let faqs;
  export let updateFromFaq;
</script>

<div class="faq">
  <div class="title">Frequently Asked Questions</div>
  <div class="container-faq">
    {#each faqs as faq}
      <button on:click={updateFromFaq(`${faq}`)} class="faqbox" title={faq}>
        {faq}
      </button>
    {/each}
  </div>
</div>

<style>
  .faq {
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    padding: 10px;
    text-align: center;
    margin: 5px;
    border-radius: 10px;
    background-color: #ebebeb;
  }
  .title {
    margin: 0 0 10px;
  }
  .faqbox {
    padding: 5px 10px;
    margin: 5px;
    border-radius: 10px;
    color: #fff;
    box-shadow: 0 -6px 99px -17px rgba(0, 0, 0, 0.68);
    background-color: #09d15e;
  }
  .faqbox:hover {
    box-shadow: 0 1px 5px 0 rgb(0 0 0);
  }
  button {
    border: 0px;
    cursor: pointer;
  }
  .container-faq {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
