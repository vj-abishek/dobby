<script>
  export let cardData;
  let inner = null;
  let isStart = true;
  let isEnd = false;

  $: scrollWidth = inner?.scrollWidth;

  const handleScroll = () => {
    const isScrollEnd = scrollWidth - inner?.offsetWidth === inner?.scrollLeft;

    if (inner.scrollLeft <= 5) {
      isStart = true;
      return;
    }

    if (isScrollEnd) {
      isEnd = true;
      return;
    }
    isEnd = false;
    isStart = false;
  };

  const handlePrev = () => {
    if (isStart) return;

    inner.scrollLeft -= 320;
  };
  const handleNext = () => {
    if (isEnd) return;

    inner.scrollLeft += 320;
  };
</script>

<!-- Another way to implement horizontal scrolling 
https://css-tricks.com/pure-css-horizontal-scrolling/ -->

{#if cardData}
  <div class="slider-container">
    <div class="inner" on:scroll={handleScroll} bind:this={inner}>
      {#each cardData as card}
        <div class="slide-content">
          <header>
            <div
              class="banner"
              style={`--banner: url(http://3.7.93.62/guvi2.0/images/webps/courseList/${card.logo}.webp)`}
            />
            <article>
              <h5 style="font-weight:bold">
                {card.name}
              </h5>
              <div class="actual_price">
                Actual Price :
                <strike><span class="price">{card.price}</span></strike>
              </div>
              <div class="discount">
                Your Price :
                <span class="price">{card.discount_price}</span>
              </div>
              <a
                href="http://3.7.93.62/guvi2.0/courses-product.html?course={card.ckey}&itm_source=courses_page&itm_medium=click"
                >Enroll now</a
              >
            </article>
          </header>
        </div>
      {/each}
    </div>

    <div class="button_controls">
      <button
        disabled={isStart}
        class="previous"
        on:click={handlePrev}
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        disabled={isEnd}
        class="next"
        on:click={handleNext}
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
{/if}

<style>
  .slider-container {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .slider-container button {
    background-color: transparent;
    border: 0px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 2px 5px 6px rgba(0, 0, 0, 0.1);
    outline: none;
    transition: all 0.25s ease;
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.25;
  }

  .slider-container button svg {
    fill: #0dba4b;
    height: 30px;
    width: 30px;
    -webkit-transition: fill 0.2s ease;
    transition: fill 0.2s ease;
  }
  .button_controls {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 5px;
    position: relative;
    top: -150px;
    overflow: hidden;
    flex-direction: row;
  }
  .inner {
    scroll-snap-type: mandatory;
    scroll-snap-points-x: repeat(323px);
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .slide-content {
    flex-basis: 323px;
    flex-shrink: 0;
    scroll-snap-align: start;
    background: #ebebeb;
    margin: 5px;
    border-radius: 3px;
  }

  .slide-content header {
    padding: 10px;
  }
  .banner {
    background-color: #000;
    height: 100px;
    width: 100%;
    position: relative;
  }
  .banner::before {
    content: '';
    position: absolute;
    top: 0;
    width: 323px;
    height: 100px;
    background-image: var(--banner) !important;
    background-position: 100% 0;
    right: 0;
    background-size: 170% 100%;
  }
  .banner::after {
    content: '';
    position: absolute;
    top: 0;
    width: 323px;
    height: 100px;
    background-image: var(--banner) !important;
  }
  .slide-content article {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  a {
    width: 100%;
    color: #fff;
    background-color: #0dba4b;
    border-color: #0dba4b;
    min-width: 9.2rem;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    text-decoration: none;
    text-align: center;
    border: 1px solid transparent;
  }

  .actual_price {
    color: #6c757d !important;
    font-size: 0.875rem;
    padding-bottom: 10px;
  }

  .price::before {
    content: '\20B9';
    padding-right: 0.2rem;
  }
  .price::after {
    content: ' /-';
  }

  .discount {
    font-weight: bold;
    padding-bottom: 10px;
  }

  .discount .price {
    color: #ff4136 !important;
  }

  @media screen and (max-width: 480px) {
    .button_controls {
      display: none;
    }
  }

  /* Change this value if you need to show the scrollbar */

  ::-webkit-scrollbar {
    display: none;
  }
</style>
