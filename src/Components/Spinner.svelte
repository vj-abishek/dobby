<div class="spinning-loader" />

<style>
  .spinning-loader {
    --s-loader-wrapper-bg-color: rgb(21, 22, 43);
    --s-loader-width: 50px;
    --s-loader-height: var(--s-loader-width);
    --s-loader-border-color-trans: rgba(29, 161, 242, 0.2);
    --s-loader-border-color-full: #09d15e;

    width: var(--s-loader-width);
    height: var(--s-loader-height);
    border: 5px solid var(--s-loader-border-color-trans);
    border-left-color: var(--s-loader-border-color-full);
    border-radius: 50%;
    background: transparent;
    animation-name: rotate-s-loader;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    animation-timing-function: linear;
    position: relative;
  }

  @keyframes rotate-s-loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
