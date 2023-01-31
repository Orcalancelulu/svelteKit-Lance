export const prerender = false;

export async function load({ fetch }) {
    const res = await fetch('https://type.fit/api/quotes')
    const quote = await res.json();

    const date = new Date()
    const index = date.getDate() * date.getMonth(); 

    const randomQuote = quote[index];


    const catIndex = Math.floor(date.getMinutes()/10);

    const catList = ["confused_cat.png", "happy_cat.png", "hmm_cat.png", "mean_cat.png", "sleepy_cat.png", "weird_cat.png"];

    const catUrl = catList[catIndex];

    return {
        quote: {
            randomQuote
        },
        cat: catUrl
    }


}  