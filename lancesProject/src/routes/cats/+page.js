export async function load({ fetch }) {
    let res = await fetch("https://api.thecatapi.com/v1/images/search");
    let catObj = await res.json();

    console.log(catObj);

    return {
        catImage: catObj
    }
}  