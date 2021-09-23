<script>
    import {loadTests, tests} from "../data/store";
    import Test from "../components/test.svelte";
</script>

<svelte:window on:load={loadTests}/>
<div id="tests">
    {#each $tests as test}
        <Test test={tests}/>
        {/each}
</div>

<style>
    #tests{
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        display: grid;
        grid-gap: 16px;
        margin-bottom: 20px;
    }
</style>