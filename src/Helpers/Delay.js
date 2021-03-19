import {Indicator} from '../Store/Indicator';
export default async function Delay(number) { // Initially show the typing indicator
    if (number) 
        return new Promise((resolve) => {
            setTimeout(() => { // Hide the typing indicator
                Indicator.update((typing) => typing = false);
                resolve();
            }, number)
        });
    


    // This is for async call which delays by default
    return new Promise((res) => {
        Indicator.update((typing) => typing = false);
        res();
    });
}
