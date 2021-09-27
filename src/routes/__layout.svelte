<script>
    import {modal, loadTests, saveTests} from "../data/store"
    import Modal from "../components/modal/modal.svelte";
    import {onMount} from "svelte";

    onMount(() => {
        loadTests()
        window.onbeforeunload = saveTests
    })

</script>

<div class="page">
    <main id="main">
        <slot></slot>
    </main>
</div>

{#if $modal.open}
    <Modal modal={$modal}/>
{/if}

<style>
    :global(:root){
        --dark: #151f52;
        --radius: 10px;
        --light: #5e92f3;
        --primary: #1565c0;
        --text: #14cba8;
        --gap: 16px;
        --padding: 3px 6px;
    }

    :global(p, h1, h2, h3, h4) {
        color: var(--text);
        padding: 5px 10px;
        font-family: Montserrat, Arial, serif;
    }

    :global(p){
        font-size: 10px;
    }

    @media (min-width: 500px) {
        :global(:root){
            --padding: 10px 13px;
        }
        :global(p){
            font-size: 14px;
        }
    }

    .page{
        background-color: #273142;
        overflow: hidden;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    :global(*){
        margin: 0;
        padding: 0;
    }

    :global(::-webkit-scrollbar){
        width: 10px;
        border-radius: var(--radius);
    }

    :global(::-webkit-scrollbar-track){
        background: #f1f1f1;
        border-radius: var(--radius);
    }

    :global(::-webkit-scrollbar-thumb){
        background: #888;
        border-radius: var(--radius);
    }

    :global(::-webkit-scrollbar-thumb:hover){
        background: #555;
    }

    #main{
        width: 100%;
        height: 100%;
        background-color: var(--primary);
        padding: 36px;
        overflow: auto;
    }

    @media (min-width: 1200px){
        #main{
            max-width: 800px;
            max-height: 600px;
            border-radius: var(--radius);
            box-shadow: 5px 10px #000000;
        }
    }
</style>

