import {messages} from '../Store/message';
import {CourseList} from '../Store/CourseList';
import Delay from './Delay';

const dobbyApi = 'http://c3fc3ab7fd95.ngrok.io';

export default async function MessageHandler(data) {

    try {
        if (data.intent === "guvi_top_courses") {
            const course = new CourseList();
            const card = await course.search();
            await Delay();
            // Update the UI
            messages.update((message) => [
                ...message, {
                    bot: true,
                    text: "Check those top courses"
                },
            ]);
            messages.update((message) => [
                ...message, {
                    bot: true,
                    richCard: true,
                    cardData: card
                },
            ]);
        } else if (data.intent === "guvi_success_stories") {
            const response = await fetch(`${dobbyApi}/success_stories`);
            const data = await response.json();
            console.log(data);
            await Delay();

            messages.update((message) => [
                ...message, {
                    videoCard: true,
                    data
                }
            ]);

        } else if (data.intent === "guvi_tips_tricks") {
            const response = await fetch(`${dobbyApi}/tips_tricks`);
            const data = await response.json();
            console.log(data)
            await Delay();
            messages.update((message) => [
                ...message, {
                    bot: true,
                    text: data.message
                }
            ]);
        } else if (data.intent === "nlu_fallback") {
            await Delay(1000);
            const text = "I'm not sure, how to answer that yet";

            messages.update((message) => [
                ...message, {
                    bot: true,
                    text
                }
            ])
        } else {
            await Delay(1000);
            // If nothing matches just show raw message
            messages.update((message) => [
                ...message, {
                    bot: true,
                    text: data.data
                },
            ]);
        }
    } catch (err) {
        await Delay();

        messages.update((message) => [
            ...message, {
                bot: true,
                text: "Aww, It looks like something went wrong :("
            },
        ]);
    }

}
