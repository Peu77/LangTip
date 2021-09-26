<script>
    import {openModal} from "../data/store";
    import DeleteTest from "../components/modal/list/deleteTest.svelte"
    import Icon from "../components/icon.svelte"

    export let test
</script>

<div class="test">
    <p>{test.name}</p>
    <div class="icons">
        <Icon src="/icons/play.svg"/>
        <a href="/test/edit/{test.uuid}"><Icon src="/icons/edit.svg"/></a>
        <Icon src="/icons/remove.svg" click={() => openModal(DeleteTest, {test})}/>
    </div>
</div>

<style>
    .test{
        font-weight: 800;
        border-radius: var(--radius);
        padding: 10px 15px;
        background-color: var(--dark);
        text-align: center;
    }

    .icons{
        display: flex;
        margin: 0 auto;
        justify-content: center;
    }
</style>