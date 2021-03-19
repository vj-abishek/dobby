<script>
  import { validateMessage } from '../Helpers/index';
  import Faq from './Faq.svelte';
  import Message from './Message.svelte';
  import Typing from './Typing.svelte';
  import { Indicator } from '../Store/Indicator';
  import { messages } from '../Store/message';
  import { afterUpdate } from 'svelte';

  let textInput = '';
  let inputRef = null;
  let messageRef = null;
  let messageWindow = null;

  let faqs = [
    'Show me best courses',
    'What is codekata?',
    'Tips and tricks',
    'What is microarc',
    'Success stories',
    'What is webkata?',
    'What is projectboard',
  ];

  // autoscroll
  afterUpdate(() => {
    if ($messages) messageWindow.scrollTo(0, messageWindow.scrollHeight);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput.trim() === '') return;

    validateMessage(textInput);

    Indicator.update((typing) => (typing = true));

    messages.update((message) => [
      ...message,
      {
        bot: false,
        text: textInput,
      },
    ]);

    textInput = '';
  };

  const updateFromFaq = (text) => {
    if (text.trim() === '') return;

    validateMessage(text);
    Indicator.update((typing) => (typing = true));

    messages.update((message) => [
      ...message,
      {
        bot: false,
        text,
      },
    ]);
  };

  // To autofocus the input
  window.addEventListener('keypress', () => {
    inputRef?.focus();
  });
</script>

<div bind:this={messageWindow} class="chatbot__message-window">
  <ul bind:this={messageRef} class="chatbot__messages">
    <Faq {faqs} {updateFromFaq} />
    <!-- Answer and response added here -->
    <Message {messages} />
    <Typing showTyping={$Indicator} />
  </ul>
</div>
<form on:submit={handleSubmit} class="chatbot__entry">
  <input
    type="text"
    class="chatbot__input"
    placeholder="Type your query here..."
    bind:value={textInput}
    bind:this={inputRef}
  />
  <button type="submit">
    <svg
      class="chatbot__submit"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</form>

<style>
  .chatbot__submit {
    fill: #7226e0;
    height: 30px;
    width: 30px;
    -webkit-transition: fill 0.2s ease;
    transition: fill 0.2s ease;
    cursor: pointer;
  }
  .chatbot__submit:hover {
    fill: #45148c;
  }

  input {
    font-family: 'Open Sans', sans-serif;
  }

  button {
    border: 0px;
    background: transparent;
    display: flex;
    align-items: center;
    padding: 0px;
    width: 30px;
    height: 30px;
    margin: 0px;
    justify-content: center;
  }
</style>
