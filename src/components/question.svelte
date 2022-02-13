<script>
    import Icon from "./icon.svelte"
    import createQuestion from "./modal/list/createQuestion.svelte";
    import {openModal} from "../data/store";
    export let data
    export let deleteSelf
    export let editSelf
</script>

<div class="question">
    <div class="controls">
        <Icon src="/icons/edit.svg" click={() => {
            openModal(createQuestion, {editSelf, currentData: data})
        }}/>
        <Icon src="/icons/remove.svg" click={deleteSelf}/>
    </div>
    <div class="words">
        <p>{data.words.join(";")}</p>
        <p>{data.otherWords.join(";")}</p>
    </div>
</div>

<style>
    .question {
        background-color: var(--dark);
        padding: 10px 15px;
        border-radius: var(--radius);
    }

    .words{
        display: flex;
        justify-content: space-between;
    }

    p{
        font-weight: 800;
        font-size: 20px;
    }
</style>