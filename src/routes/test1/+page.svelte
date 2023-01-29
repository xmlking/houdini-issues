 <script lang="ts">
    import { graphql } from '$houdini';
      const store = graphql(`
        query sample_poke_query @load {
          pokemon_v2_pokemon(limit: 20) {
            id
            name
            height
            weight
          }
        }
      `);
</script>
  
  
<pre>{JSON.stringify($store, null, 2)}</pre>
  