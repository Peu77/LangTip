<script>
    export let modal

</script>

<div class="modal">
    <svelte:component this={modal.content}/>
</div>

<style>
.modal{
    max-width: 500px;
    max-height: 400px;
    width: 100vh;
    height: 100vh;
    background-color: var(--dark);
}
</style>