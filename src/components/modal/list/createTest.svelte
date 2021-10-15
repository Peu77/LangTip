<script>
    import Button from "../../button.svelte"
    import {closeModal, createTest} from "../../../data/store";
    import Input from "../../input.svelte"

    let name = ""

    function create(){
            if(createTest(name))
                closeModal()
    }
</script>

<svelte:window on:keypress={event => {
    if(event.key === "Enter")
        create()
}}/>

<div class="content">
    <Input placeHolder="name" bind:value={name}/>
    <div class="buttons">
        <Button background="#577523"
                click={create} text="Create"/>
        <Button click={closeModal} text="Cancel"/>
    </div>

</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .buttons {
        display: flex;
        justify-content: space-around;
    }
</style>