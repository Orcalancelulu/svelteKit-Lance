<script context="module">
    export async function load({ fetch }) {
      
      if (true) {
        return {
          props: {
            guides: {
                ob1: {
                    title: "huhu"
                },
                ob2: {
                    title: "hehe"
                }
            }
          }
        }
      }
    }
  </script>
  
  <script>
    export let guides
  </script>
  
  <div class="guides">
    <ul>
      {#each guides as guide}
        <li>
          <a href='/'>{guide.title}</a>
        </li>
      {/each}
    </ul>
  </div>
  