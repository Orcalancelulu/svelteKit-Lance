export async function load({ fetch }) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7070dde611msh82d3309efb0dd0cp1ff137jsn6b2c16a07662',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };
    
    let res = await fetch('https://dad-jokes.p.rapidapi.com/random/joke', options);
    let jokeObj = await res.json()

    let joke = jokeObj.body[0];
    console.log(joke);

    return {
        jokes: {
            joke
        },
        
    }


}  