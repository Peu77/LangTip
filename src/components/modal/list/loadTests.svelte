<script>
    import Input from "../../input.svelte"
    import Button from "../../button.svelte"
    import {closeModal, tests} from "../../../data/store";

    let config = ""
</script>

<div class="content">
    <Input bind:value={config} placeHolder="config"/>
    <Button background="#577523"
            click={() => {
            if(config !== ""){
                tests.set(JSON.parse(config))
                closeModal()
            }
        }} text="Create"/>
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>