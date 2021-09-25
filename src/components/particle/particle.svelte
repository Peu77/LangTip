<script>
    export let data
    let render = true

    setTimeout(() => {
        render = false
    }, 1000 * 4)
</script>
{#if render}
    <div class="particle" style="left: {data.x}px;"></div>
{/if}

<style>
    .particle {
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #5e92f3;
        border-radius: 50%;
        bottom: 5px;
        animation: move 4s 1 ease-in-out;
    }

    @keyframes move {
        0% {
            bottom: 5px;
        }

        100% {
            bottom: 97vh;
        }
    }
</style>