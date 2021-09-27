<script>
    import {onMount} from "svelte";

    export let click, text
    export let background
    let p

    onMount(() => {
        if(background !== undefined)
            p.style.backgroundColor = background
    })

</script>

<div class="button" on:click={click} bind:this={p}>
    <p >
        {text}
    </p>
</div>


<style>
    .button{
        display: block;
        padding: var(--padding);
        font-size: 16px;
        cursor: pointer;
        color: white;
        font-weight: 600;
        background-color: var(--dark);
        border-radius: var(--radius);
        transition: filter 0.2s;
    }

    .button p{
        user-select: none;
        color: white;
    }

    .button:hover{
        filter: opacity(80%);
    }
</style>