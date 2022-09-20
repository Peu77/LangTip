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
    let firstWords = []
    let lastWords = []

    // word pool for picking random words
    let questionsForRandom = []

    const settings = ["random", "random_language"]
    const config = new Map()

    function changeConfig(setting) {
        config[setting] = !config[setting]

        if (config["random"]) {
            text = ""
            currentLevel = 0
            updateLevelInfos()
        }
    }

    function again() {
        currentLevel = 0
        totalErrors = 0
        start = undefined
        stop = undefined
        updateLevelInfos()
    }

    function updateWords() {
        if (currentQuestion !== undefined) {
            let b = Math.random() < 0.5

            if (!config["random_language"])
                b = false

            if (b) {
                firstWords = currentQuestion.words
                lastWords = currentQuestion.otherWords
            } else {
                firstWords = currentQuestion.otherWords
                lastWords = currentQuestion.words
            }
        }
    }

    settings.forEach(setting => config[setting] = false)

    function updateLevelInfos(nextQuestion = undefined) {
        currentQuestion = questions[currentLevel]
        if (nextQuestion !== undefined)
            currentQuestion = nextQuestion
        updateWords()
        if (currentLevel === -1) {
            text = "finish"
            stop = Date.now()
        } else if (!config["random"])
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
            if(currentLevel !== -1){
                if(!firstWords.includes(input)){
                    error = firstWords.join(";")
                    totalErrors++

                    const newArray = questions.filter(question => question.uuid !== currentQuestion.uuid)
                    newArray.unshift(currentQuestion)
                    questions = newArray

                     for(let i = 0; i < input.length; i++) {
                       const char = input[i]
                         if(!contains(char, i, firstWords)){
                            input = input.slice(0, i)
                            return
                         }
                     }

                    function contains(char, index, array){
                        let found = false
                        array.filter(target => target.length >= index).forEach(target => {
                            if(target[index] === char) {
                                found = true
                            }
                        })
                        return found
                    }

                    return
                }
                if(config["random"]){
                    if(error == "")
                    questionsForRandom = questionsForRandom.filter(question => question.uuid !== currentQuestion.uuid)

                   if(questionsForRandom.length === 0){
                        questionsForRandom = [...questions]
                    }

                    const index = Math.floor(Math.random() * questionsForRandom.length)
                    // get index of questionsForRandom[index] in questions

                     currentLevel = index
                      error = ""
                     updateLevelInfos(questionsForRandom[index])
                     return
                }   else
                    currentLevel++

                    if(currentLevel === questions.length){
                         currentLevel = -1
                        currentQuestion = undefined
                    }

                error = ""
                updateLevelInfos()
            }else{
                again()
            }
        }
    }}/>

{#if test !== undefined}
    <div class="container">
        <h2>{text}</h2>
        {#if currentQuestion !== undefined}
            <div class="words">
                <h1>{lastWords[Math.floor(Math.random() * lastWords.length)]}</h1>
                <h2 class="error">{error}</h2>
            </div>

            <Input bind:value={input} placeHolder="word"/>
        {/if}
        {#if currentLevel === -1}
            <h3>Time: {(stop - start) / 1000} Seconds</h3>
            <h3>Errors: {totalErrors}</h3>
        {/if}

        <div class="settings">
            {#each settings as setting}
                <p class={"setting " + (config[setting]? "enable": "")}
                   on:click={() => changeConfig(setting)}>{setting}</p>
            {/each}
            <Button text="Again" click={again}/>
        </div>
    </div>
{/if}

<style>
    .container {
        justify-content: center;
        display: flex;
        align-items: center;
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

    .settings {
        display: inline-block;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .setting {
        cursor: pointer;
        color: gray;
        user-select: none;
        transition: color 0.2s;
    }

    .enable {
        color: greenyellow;
    }

    @media screen and (max-width: 553px) {
        .container {
            padding: 100px 0;
        }

        .settings {
            flex-direction: column;
            gap: 10px;
        }
    }
</style>