<script>
    import button from "./button.svelte";
    import {onMount} from "svelte";

    export let click, text
    export let background
    let p

    onMount(() => {
        if(background !== undefined)
            p.style.backgroundColor = background
    })

</script>

<p class="button" on:click={click} bind:this={p}>
    {text}
</p>

<style>
    .button{
        display: block;
        padding: 10px 15px;
        font-size: 16px;
        cursor: pointer;
        color: white;
        font-weight: 600;
        background-color: var(--dark);
        border-radius: var(--radius);
        transition: filter 0.2s;
    }

    .button:hover{
        filter: opacity(80%);
    }
</style>