<script>
    import {page} from "$app/stores";
    import {onMount} from "svelte";
    import {tests} from "../../../data/store";
    import Input from "../../../components/input.svelte"
    import Button from "../../../components/button.svelte"

    const uuid = $page.params.test
    let test
    let questions
    let currentLevel = 0
    let input = ""
    let currentQuestion
    let text = ""
    let error = ""
    let totalErrors = 0
    let start
    let stop

    function updateLevelInfos() {
        currentQuestion = questions[currentLevel]
        if (currentLevel === -1) {
            text = "finish"
            stop = Date.now()
        } else
            text = "Level " + (currentLevel + 1) + "/" + questions.length
        input = ""
    }

    onMount(() => {
        tests.subscribe(data => {
            test = data.find(test => test.uuid === uuid)
            if (test !== undefined) {
                questions = test.questions
                updateLevelInfos()
            }
        })
    })
</script>

<svelte:window on:keydown={event => {
    if(start === undefined){
        start = Date.now()
    }
        if(event.key === "Enter"){
            console.log("play " + currentQuestion.otherWords)
            if(currentLevel !== -1){
                if(!currentQuestion.otherWords.includes(input)){
                    error = currentQuestion.otherWords.join(";")
                    totalErrors++
                    return
                }
                currentLevel++
                if(currentLevel === questions.length){
                         currentLevel = -1
                        currentQuestion = undefined
                }
                error = ""
                updateLevelInfos()
            }
        }
    }}/>

{#if test !== undefined}
    <div class="container">
        <h2>{text}</h2>
        {#if currentQuestion !== undefined}
            <div class="words">
                <h1>{currentQuestion.words}</h1>
                <h2 class="error">{error}</h2>
            </div>

            <Input bind:value={input} placeHolder="word"/>
        {/if}
        {#if currentLevel === -1}
            <h3>Time: {(stop-start) / 1000} Seconds</h3>
            <h3>Errors: {totalErrors}</h3>
            <Button text="Again" click={() => {
                currentLevel = 0
                totalErrors = 0
                start = undefined
                stop = undefined
                updateLevelInfos()
            }}/>
        {/if}
    </div>
{/if}

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 20px;
        gap: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--light);
        width: 100%;
        max-width: 500px;
    }

    .words {
        display: flex;
        align-items: center;
    }

    .error {
        color: #a11010;
    }
</style>