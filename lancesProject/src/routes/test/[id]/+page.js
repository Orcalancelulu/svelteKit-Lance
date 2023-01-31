export async function load(page) {
    const id = page.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const guide = await res.json()
    if (res.ok) {
      return {
        props: {
          guide
        }
      }
    }
    return {
      status: 301,
      redirect: "/test/"
    }
  }