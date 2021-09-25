<script>
    import {tests} from "../data/store";
    import Test from "../components/test.svelte";

    let data = []
   tests.subscribe(value => data = value)
</script>



<div id="tests">
    {#each data as test}
        <Test test={test}/>
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