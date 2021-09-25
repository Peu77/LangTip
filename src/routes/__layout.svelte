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
        --dark: #111c4b;
        --radius: 10px;
        --light: #5e92f3;
        --primary: #1565c0;
        --text: #14cba8;
    }


    :global(p, h1, h2, h3, h4) {
        color: var(--text);
        padding: 5px 10px;
        font-family: Montserrat, Arial, serif;
    }

    :global(body){
        box-sizing: border-box;
    }

    :global(*){
        margin: 0;
        padding: 0;
    }

    #main{
        width: 100vw;
        height: 100vh;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--primary);
    }

    @media (min-width: 1400px){
        #main{
            max-width: 800px;
            max-height: 600px;
            border-radius: var(--radius);
            padding: 36px;
        }
    }
</style>

