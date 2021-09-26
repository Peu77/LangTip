<script>
    import {page} from "$app/stores"
    import {saveTests, tests} from "../../../data/store";
    import Button from "../../../components/button.svelte"
    import Question from "../../../components/question.svelte"
    import {onMount} from "svelte";

    const uuid = $page.params.test
    let test
    let questions
    onMount(() => {
        tests.subscribe(data => {
            test = data.find(test => test.uuid === uuid)
            if (test !== undefined){
                console.log(test)
                questions = test.questions
            }

        })

    })

</script>
{#if test !== undefined && questions !== undefined}
    <div id="controls">
        <h2 class="text">{test.name}</h2>
        <Button text="Create-Question" click={() => {
            questions = [...questions, {}]
            test.questions = questions
            saveTests()
        }}/>
    </div>

    <div id="questions">
        {#each questions as question }
            <Question data={question}/>
        {/each}
    </div>
{/if}

<style>
    #controls {
        gap: var(--gap);
        margin-bottom: var(--gap);
        display: flex;
    }

    #controls .text {
        display: block;
        padding: 10px 15px;
        background-color: var(--dark);
        border-radius: var(--radius);
    }

    #questions {
        gap: var(--gap);
        grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
        display: grid;
    }

    @media (max-width: 600px ){
        #questions{
            grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
        }
    }
</style>
