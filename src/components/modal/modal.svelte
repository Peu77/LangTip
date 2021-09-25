<script>
    import {closeModal} from "../../data/store";

    export let modal
</script>


<div class="black" on:click={closeModal}></div>
<div class="modal">
    <svelte:component this={modal.content}/>
</div>

<style>

    .black{
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

.modal{
    box-shadow: 5px 10px rgba(0, 0, 0, 0.75);
    max-width: 500px;
    max-height: 400px;
    width: 100vh;
    height: 100vh;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgb(24, 24, 134) 35%, rgb(36, 140, 161) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    animation: fadeIn 0.5s 1
}

@keyframes fadeIn {
    0%{
        transform: scale(0) translate(-100%, -100%);
        filter: opacity(0);
    }
    100%{
        transform: scale(1) translate(-50%, -50%);
        filter: opacity(1) ;
    }
}
</style>