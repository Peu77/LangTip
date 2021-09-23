<script>
    import {loadTests, tests} from "../data/store";
</script>

<svelte:window on:load={loadTests}/>
<div id="tests">
    {#each $tests as test}

        {/each}
</div>