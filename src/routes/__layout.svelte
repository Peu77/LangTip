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
    :global(:root){
        --dark: #151f52;
        --radius: 10px;
        --light: #5e92f3;
        --primary: #1565c0;
        --text: #14cba8;
        --gap: 16px;
    }


    :global(p, h1, h2, h3, h4) {
        color: var(--text);
        padding: 5px 10px;
        font-family: Montserrat, Arial, serif;
    }

    :global(body){
        box-sizing: border-box;
        background-color: #273142;
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
        width: 100vw;
        height: 100vh;
        background-color: var(--primary);
        padding: 36px;
        overflow: auto;

    }

    @media (min-width: 1200px){
        #main{
            max-width: 800px;
            max-height: 600px;
            border-radius: var(--radius);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 5px 10px #000000;
        }
    }

    @media (max-height: 600px){
        #main{
            max-height: unset;
        }
    }
</style>

