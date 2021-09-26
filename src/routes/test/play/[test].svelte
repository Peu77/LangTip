<script>
    import {page} from "$app/stores";
    import {onMount} from "svelte";
    import {tests} from "../../../data/store";

    const uuid = $page.params.test
    let test
    let questions
    onMount(() => {
        tests.subscribe(data => {
            test = data.find(test => test.uuid === uuid)
            if (test !== undefined) {
                console.log(test)
                questions = test.questions
            }

        })
    })
</script>

{#if test !== undefined}
<h1>{test.name}</h1>
{/if}