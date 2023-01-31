<script>
    export let data;
</script>

<div class="guides">
    <ul>
      {#each data.props.guides as guide}
        <li>
          <a href={`/test/${guide.id}`}>{guide.title}</a> 
        </li>
      {/each}
    </ul>
  </div>
  