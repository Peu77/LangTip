<script>
    import Button from "../../button.svelte"
    import {closeModal, deleteTest} from "../../../data/store";

    export let props
</script>

<div class="content">
    <h2>Do you want delete the test <p class="test">{props.test.name}</p></h2>
    <div class="buttons">
        <Button background="#850707"
                click={() => {
                 deleteTest(props.test.uuid)
                closeModal()
        }} text="Delete"/>
        <Button click={closeModal} text="Cancel"/>
    </div>

</div>

<style>
    .test {
        display: inline-block;
    }

    .test::before{
        content: '"';
        font-size: 25px;
        font-family: 'Fredoka One', cursive;
        color: #802845;
        margin-right: 3px;
    }

    .test::after{
        content: '"';
        font-size: 25px;
        font-family: 'Fredoka One', cursive;
        color: #802845;
        margin-left: 3px;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .buttons {
        display: flex;
        justify-content: space-around;
    }
</style>