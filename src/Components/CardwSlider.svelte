<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const slider = document.querySelector('.slider-container2');
    const inner = document.querySelector('.inner2');

    const checkBoundary = () => {
      const outer = slider.getBoundingClientRect();
      const innerBon = inner.getBoundingClientRect();

      if (parseInt(inner.style.left) > 0) {
        inner.style.left = '0px';
      }
      //else if (innerBon.right < outer.right) {
      //   inner.style.left = `-${innerBon.width - outer.width}px`;
      // }
    };

    let pressed = false;
    let startX;
    let x;

    slider.addEventListener('mousedown', (e) => {
      pressed = true;
      startX = e.offsetX - inner.offsetLeft;
      slider.style.cursor = 'grabbing';
    });

    slider.addEventListener('mouseenter', () => {
      slider.style.cursor = 'grab';
    });

    slider.addEventListener('mouseup', () => {
      slider.style.cursor = 'grab';
    });

    slider.addEventListener('mousemove', (e) => {
      if (!pressed) return;
      e.preventDefault();

      x = e.offsetX;
      inner.style.left = `${x - startX}px`;
      checkBoundary();
    });

    window.addEventListener('mouseup', () => {
      pressed = false;
    });
  });
</script>

<div class="slider-container2">
  <div class="inner2">
    <div class="slide-content2">
      <header>
        <div class="banner" />
        <article>
          <h5 class="card-title course-title">
            AI with Deep Learning certification
          </h5>
          <a
            href="https://www.guvi.in/deep-learning?itm_source=courses_page&itm_medium=click"
            >Enroll now</a
          >
        </article>
      </header>
    </div>
    <div class="slide-content">
      <header>
        <div class="banner" />
        <article>
          <h5 class="card-title course-title">
            AI with Deep Learning certification
          </h5>
          <a
            href="https://www.guvi.in/deep-learning?itm_source=courses_page&itm_medium=click"
            >Enroll now</a
          >
        </article>
      </header>
    </div>
    <div class="slide-content">
      <header>
        <div class="banner" />
        <article>
          <h5 class="card-title course-title">
            AI with Deep Learning certification
          </h5>
          <a
            href="https://www.guvi.in/deep-learning?itm_source=courses_page&itm_medium=click"
            >Enroll now</a
          >
        </article>
      </header>
    </div>
    <div class="slide-content">
      <header>
        <div class="banner" />
        <article>
          <h5 class="card-title course-title">AI with python certification</h5>
          <a
            href="https://www.guvi.in/deep-learning?itm_source=courses_page&itm_medium=click"
            >Enroll now</a
          >
        </article>
      </header>
    </div>
    <div class="slide-content">
      <header>
        <div class="banner" />
        <article>
          <h5 class="card-title course-title">
            AI with Deep Learning certification
          </h5>
          <a
            href="https://www.guvi.in/deep-learning?itm_source=courses_page&itm_medium=click"
            >Enroll now</a
          >
        </article>
      </header>
    </div>
  </div>
</div>

<style>
  .slider-container2 {
    width: 100%;
    overflow: hidden;
    margin-bottom: 10px;
    position: relative;
  }
  .inner2 {
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    transition: all 0s ease-in;
    pointer-events: none;
  }
  .slide-content2 {
    flex-basis: 323px;
    flex-shrink: 0;
    pointer-events: none;
    background: #ebebeb;
    margin: 5px;
    border-radius: 3px;
  }

  .slide-content2 header {
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
    background-image: url('https://guvi.in/../images/webps/courseList/deep-learning.webp') !important;
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
    background-image: url('https://guvi.in/../images/webps/courseList/deep-learning.webp') !important;
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
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
</style>
