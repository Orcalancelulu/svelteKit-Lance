<script>
    export let data;

    let joke = data.jokes.joke

    console.log(joke);
</script>

<p class="Jokestitle" id="leftTitle">Random (very Bad) Joke
</p>

<p class="joke" id="setup">{joke.setup}</p>
<p class="joke" id="punchline">{joke.punchline}</p>


<style>
    .Jokestitle {
        margin-top: 300px;
        padding: 20px;
        font-size: 60px;
        font-family: Snell Roundhand, cursive;
        text-align: center;
        border-style: none none solid none;
        border-width: 4px;
    }

    .joke {
        text-align: center;
        font-size: 30px;
        font-family: Snell Roundhand, cursive;

    }



</style>