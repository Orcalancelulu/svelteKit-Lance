<script>
    export let data;

    let cat = data.catImage[0]

    console.log(cat);
</script>


<p>Random Cat Image</p>

<img src="{cat.url}" alt="cat">


<style>
    p {
        text-align: center;
        font-family: Snell Roundhand, cursive;
        font-size: 40px;
        margin-top: 300px;

        border-style: none none solid none;
    }

    img {
        
        margin: auto;
        width: 30%;

        position: relative;
        left: 35%;
    }
</style>