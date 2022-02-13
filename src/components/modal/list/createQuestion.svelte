<script>
    import Button from "../../button.svelte"
    import {closeModal} from "../../../data/store";
    import {onMount} from "svelte";

    export let props

    let words = ""
    let otherWords = ""


    function split(string) {
        return string.split(",")
    }

    function isEdit() {
        return props.editSelf !== undefined
    }

    onMount(() => {
        if (isEdit()) {
            console.log("is edit")
            words = props.currentData.words.join(",")
            otherWords = props.currentData.otherWords.join(",")
        }
    })
</script>

<div class="content">
    <textarea class="text" placeholder="Kontinent,Erdteil" bind:value={words}></textarea>
    <textarea class="text" placeholder="continent" bind:value={otherWords}></textarea>
    <div class="buttons">
        {#if !isEdit()}
            <Button text="Create" background="#577523" click={() => {
            if(words !== "" && otherWords !== ""){
                 props.create(split(words), split(otherWords))
                 closeModal()
            }

        }}/>
            <Button text="Next" background="#ab4918" click={() => {
                if(words !== "" && otherWords !== ""){
                      props.create(split(words), split(otherWords))
                    words = "";
                    otherWords = "";
                    }
            }}/>
        {:else}
            <Button text="Edit" background="#577523" click={() => {
                if(words !== "" && otherWords !== ""){
                    props.editSelf(split(words), split(otherWords))
                    closeModal()
                    }
            }}/>
        {/if}
        <Button text="Cancel" click={closeModal}/>
    </div>
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 400px;
        gap: var(--gap);
    }

    .text {
        font-family: Montserrat, Arial, serif;
        height: 50px;
        resize: none;
        font-size: 16px;
        font-weight: 800;
        background-color: var(--dark);
        border-radius: var(--radius);
        border: none;
        outline: none;
        padding: 10px;
        color: white;
    }

    .buttons {
        display: flex;
        justify-content: space-around;
    }
</style>
