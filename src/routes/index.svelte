<script>
    import {openModal, tests} from "../data/store";
    import Test from "../components/test.svelte";
    import Button from "../components/button.svelte"
    import CreateTest from "../components/modal/list/createTest.svelte"
    import LoadTests from "../components/modal/list/loadTests.svelte"
    import LoadTest from "../components/modal/list/loadTest.svelte"
    import Input from "../components/input.svelte"
    import { quintOut } from 'svelte/easing';
    import { crossfade } from 'svelte/transition';
    import {flip} from 'svelte/animate';
    import GenerateTest from "../components/modal/list/generateTest.svelte";

    const [send, receive] = crossfade({
        duration: d => Math.sqrt(d * 200),

        fallback(node, params) {
            const style = getComputedStyle(node);
            const transform = style.transform === 'none' ? '' : style.transform;

            return {
                duration: 600,
                easing: quintOut,
                css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
            };
        }
    });

    let search = ""
</script>

<div id="controls">
    <Button text="Create-Test" click={() => openModal(CreateTest)}/>
    <Button text="Load Tests" click={() => openModal(LoadTests)}/>
    <Button text="Load single Test" click={() => openModal(LoadTest)}/>
    <Button text="Generate from book" click={() => openModal(GenerateTest)}/>
    <Input placeHolder="Search" bind:value={search}/>
</div>

<div id="tests">
    {#each $tests.filter(test => test.name.toLowerCase().includes(search.toLowerCase()) || search === "") as test (test.uuid)}
        <div in:receive="{{key: test.uuid}}"
             animate:flip>
            <Test test={test}/>
        </div>
    {/each}
</div>

<style>
    #controls {
        display: flex;
        margin-bottom: var(--gap);
        gap: var(--gap);
    }

    #tests {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        display: grid;
        grid-gap: var(--gap);
        margin-bottom: 20px;
    }
</style>