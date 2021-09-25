<script>
    export let test
</script>

<div class="test">
    <p>{test.name}</p>
    <div class="icons">
        <img class="icon" src="/icons/play.svg" alt="play-icon"/>
        <img class="icon" src="/icons/edit.svg" alt="edit-icon"/>
        <img class="icon" src="/icons/remove.svg" alt="edit-icon"/>
    </div>
</div>

<style>
    .test{
        font-weight: 800;
        border-radius: 5px;
        padding: 10px 15px;
        background-color: var(--dark);
        text-align: center;
    }

    .icons{
        display: flex;
        margin: 0 auto;
        justify-content: center;
    }

    .icon{
        min-width: 30px;
        max-width: 30px;
        cursor: pointer;
        -webkit-user-drag: none;
        user-select: none;
        transition: background-color 0.2s;
    }

    .icon:hover{
        filter: invert(0.3);
        border-radius: 50%;
        background-color: rgba(79, 63, 63, 0.7);
    }
</style>