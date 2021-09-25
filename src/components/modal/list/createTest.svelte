<script>
    import Button from "../../button.svelte"
    import {createTest} from "../../../data/store";

    let name = ""
</script>

<div class="content">
    <input type="text" placeholder="name" bind:value={name}/>
    <Button click={() => createTest(name)} text="Create"/>
</div>

<style>

</style>