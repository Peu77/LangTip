<script>
    export let click, text
</script>

<p class="button" on:click={click}>
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
        filter: opacity(88%);
    }
</style>