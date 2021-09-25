<script>
    import Button from "../../button.svelte"
    import {closeModal, createTest} from "../../../data/store";
    import Input from "../../input.svelte"

    let name = ""
</script>

<div class="content">
    <Input placeHolder="name" bind:value={name}/>
    <div class="buttons">
        <Button click={() => createTest(name)} text="Create"/>
        <Button click={closeModal} text="Cancel"/>
    </div>

</div>

<style>
.content{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.buttons{
    display: flex;
    justify-content: space-around;
}
</style>