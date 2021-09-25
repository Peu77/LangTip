<script>
    import {modal, loadTests, saveTests} from "../data/store"
    import Modal from "../components/modal/modal.svelte";
    import {onMount} from "svelte";

    onMount(() => {
        loadTests()
        window.onbeforeunload = saveTests
    })

</script>

<main id="main">
    <slot></slot>
</main>

{#if $modal.open}
    <Modal modal={$modal}/>
{/if}

<style>
    #main{
        width: 100vw;
        height: 100vh;
        max-width: 800px;
        max-height: 600px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        background-color: var(--primary);
    }
</style>

