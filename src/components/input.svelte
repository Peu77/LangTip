<script>
    export let placeHolder = ""
    export let value = ""
</script>

<input type="text" class="input" placeholder={placeHolder} bind:value={value} autocomplete="false"/>

<style>
    .input{
        font-size: 16px;
        background-color: var(--dark);
        border-radius: var(--radius);
        border: none;
        outline: none;
        width: 100%;
        max-width: 200px;
        padding: var(--padding);
        color: white;
    }
</style>