<script>
    export let data;
    let quote = data.quote.randomQuote;

    let catUrl = data.cat;
</script>

<header>
    <div id="menuBar">
        <a href="/" class="titleItem">Home</a>
        <a href="/cats" class="titleItem">Cats</a>
        <a>platzhalter (geht sicher schöner)</a>
        <a class="titleItem">Notes</a>
        <a href="/bad_jokes" class="titleItem">Jokes</a>
    </div>
    
    <div id="headerBox">
        <h1 id="title">--- Daily Quote ---</h1>
        <p id="quote">{quote.text} <br /> - <br /> {quote.author}</p>
        
    </div>
    
</header>

<main><slot></slot></main>


<footer>
    <img id="cat" src="/src/images/{catUrl}" alt="cat">
</footer>


<style>

    #cat {
        position: fixed;
        bottom: 0px;
        right: 10px;
        width: 120px;
    }

    #menuBar {
        font-family: Snell Roundhand, cursive;

        z-index: 1;
        position: fixed;
        left: 0;
        top: 0;
        background-color:rgb(196, 251, 233);
        width: 100%;

        padding: 0;

        text-align: center;

        display: grid;
        grid-template-columns: auto auto 60% auto auto;

        font-size: 20px;

    }

    .titleItem:hover {
        cursor: pointer;
        background-color: aquamarine;
    }

    .titleItem {
        margin: 0;
        padding: 20px 0;

        color: black;
        text-decoration: none;

    }



    #headerBox {
        position: fixed;
        top: 30px;
        z-index: 2;
        margin: -70px 0 0 0;
        left: 23%;
        width: 50%;
        
        padding: 20px;
        background-color: aquamarine;
    
        font-family: Snell Roundhand, cursive;

        text-align: center;

        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;

    }

    #quote {   
        padding: 10px;
        border-style: solid none;
        font-size: 25px;
    }

</style>