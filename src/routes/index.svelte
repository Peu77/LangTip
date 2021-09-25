<script>
    import {openModal, tests} from "../data/store";
    import Test from "../components/test.svelte";
    import Button from "../components/button.svelte"
    import CreateTest from "../components/modal/list/createTest.svelte"
    import Input from "../components/input.svelte"

    let search = ""
</script>

<div id="controls">
    <Button text="Create-Test" click={() => openModal(CreateTest)}/>
    <Input placeHolder="Search" bind:value={search}/>
</div>

<div id="tests">
    {#each $tests.filter(test => test.name.toLowerCase().includes(search.toLowerCase()) || search === "") as test}
        <Test test={test}/>
        {/each}
</div>

<style>
    #controls{
        display: flex;
        margin-bottom: 16px;
        gap: 16px;
    }

    #tests{
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        display: grid;
        grid-gap: 16px;
        margin-bottom: 20px;
    }
</style>