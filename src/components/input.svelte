<script>
    export let placeHolder = ""
    export let value = ""
</script>

<input type="text" class="input" placeholder={placeHolder} bind:value={value}/>

<style>
    .input{
        font-size: 16px;
        background-color: var(--dark);
        border-radius: var(--radius);
        border: none;
        outline: none;
        padding: 10px;
        color: white;
    }
</style>