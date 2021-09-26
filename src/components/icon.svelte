<script>
    export let click = () => {}
    export let src
</script>

<img class="icon" src={src} alt={src} on:click={click}/>

<style>
    .icon{
        min-width: 30px;
        max-width: 30px;
        cursor: pointer;
        -webkit-user-drag: none;
        user-select: none;
        border-radius: 50%;
        transition: background-color 0.3s;
    }

    .icon:hover{
        filter: invert(0.3);
        background-color: rgba(79, 63, 63, 0.7);
    }
</style>