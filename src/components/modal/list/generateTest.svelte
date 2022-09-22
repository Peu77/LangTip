<script>
    import Input from "../../input.svelte"
    import Button from "../../button.svelte"
    import {closeModal, tests} from "../../../data/store";
    import * as data from "../../../data/questions.json";
    import {v4 as uuidv4} from 'uuid';

    // data to json
    let questions = data.default;

    let name = ""
    let firstWord = ""
    let secondWord = ""
</script>

<div class="content">
    <h1>Generate Test</h1>
    <Input bind:value={name} placeHolder="name"/>
    <Input bind:value={firstWord} placeHolder="First-english-word"/>
    <Input bind:value={secondWord} placeHolder="Last-english-word"/>
    <p>generate all the words from the book, just type the english word from which you want to start and the last word.</p>
    <Button background="#577523"
            click={() => {
            if(name !== "" && firstWord !== "" && secondWord !== ""){
                const generatedQuestions = []

                let run = false;

                questions.forEach(word => {
                    if (word.english === firstWord) {
                        run = true
                    }

                    if (run) {
                        generatedQuestions.push({
                            uuid: uuidv4(),
                            words: word.english.split(";").map(word => word.trimStart()),
                            otherWords: word.german.split(";").map(word => word.trimStart())
                        })
                    }

                    if (word.english === secondWord) {
                        run = false
                    }
                })


             const test = {
                    uuid: uuidv4(),
                    name: name,
                    questions: generatedQuestions
                }


                tests.update(last => {
                    return [...last, test]
                })

                closeModal()
            }
        }} text="Create"/>
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: relative;;
    }

    .content p{
        position: absolute;
        top: -90px;
        right: -230px;
        font-size: 20px;
        font-weight: bold;
        max-width: 200px;
    }
</style>