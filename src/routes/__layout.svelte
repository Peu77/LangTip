<script>
    import {modal, loadTests, saveTests} from "../data/store"
    import Modal from "../components/modal/modal.svelte";
    import {onMount} from "svelte";

    let backgroundColor = ""
    let backgroundImage = false
    let opacity = false
    function changeCssVariable(name, value){
        document.documentElement.style.setProperty(name, value)
    }

    function changeOpacity(value){
        const main =  document.querySelector("#main")
        if(value)
            main.style.filter = "opacity(.8)"
        else
            main.style.filter = "none"
    }

    onMount(() => {
        loadTests()
        window.onbeforeunload = saveTests
        backgroundColor = localStorage.getItem("backgroundColor") || ""
        const data = localStorage.getItem("backgroundImage") || "nein"


        if(backgroundColor !== "")
        changeCssVariable("--background", backgroundColor)

        if(data === "true"){
            backgroundImage = true
            document.querySelector(".page").style.background = "url(/background.png)"
        }

        const opacityLoaded = localStorage.getItem("opacity")
        if(opacityLoaded === "true"){
            changeOpacity(true)
            opacity = true
        }


    })

</script>

<div class="page">
    <main id="main">
        <slot></slot>
    </main>

    <div id="author">
        <p>Author: Emil</p>
        <p>Github: <a href="https://github.com/peu77/langtip">Project</a></p>
    </div>

    <div id="backgroundColor">
        <div>
            <p>background</p>
            <input type="color" bind:value={backgroundColor} on:change={() => {
            localStorage.setItem("backgroundColor", backgroundColor)
            changeCssVariable("--background", backgroundColor)
        }}>
        </div>
   <div>
       <p>image</p>
       <input type="checkbox" bind:checked={backgroundImage} on:change={() => {
           localStorage.setItem("backgroundImage", backgroundImage.toString())
           const page = document.querySelector(".page")
           if(backgroundImage){
               page.style.background = "url(/background.png)"
           }else{
                page.style.background = "var(--background)"
           }
       }}>
   </div>

        <div>
            <p>opacity</p>
            <input type="checkbox" bind:checked={opacity} on:change={() => {
                changeOpacity(opacity)
                localStorage.setItem("opacity", opacity.toString())
            }}>
        </div>

    </div>

</div>

{#if $modal.open}
    <Modal modal={$modal}/>
{/if}

<style>
    :global(body){
        background-color: #111021;
    }

    :global(:root){
       /*
        --dark: #151f52;
        --radius: 10px;
        --light: #5e92f3;
        --primary: #1565c0;
        --text: #14cba8;
        --gap: 16px;
        --padding: 3px 6px;
        */

        --background:  #29264d;
        --dark: #181735;
        --radius: 10px;
        --light: #454488;
        --primary: #1f1e3e;
        --text: #e4e3e6;
        --gap: 16px;
        --padding: 10px 6px;
    }

    :global(p, h1, h2, h3, h4) {
        color: var(--text);
        padding: 5px 10px;
        font-family: Montserrat, Arial, serif;
    }

    :global(p){
        font-size: 12px;
    }

    @media (min-width: 500px) {
        :global(:root){
            --padding: 10px 13px;
        }
        :global(p){
            font-size: 14px;
        }
    }

    .page{
        background-color: var(--background);
        overflow: hidden;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    :global(*){
        margin: 0;
        padding: 0;
    }

    :global(::-webkit-scrollbar){
        width: 10px;
        border-radius: var(--radius);
    }

    :global(::-webkit-scrollbar-track){
        background: #f1f1f1;
        border-radius: var(--radius);
    }

    :global(::-webkit-scrollbar-thumb){
        background: #888;
        border-radius: var(--radius);
    }

    :global(::-webkit-scrollbar-thumb:hover){
        background: #555;
    }

    #main{
        width: 100%;
        height: 100%;
        background-color: var(--primary);
        overflow: auto;
        padding: 5px;
    }

    #author{
        display: none;
        flex-direction: column;
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: #1f1e3e;
        padding: 5px;
        border-radius: var(--radius);
        font-weight: bold;
        padding: 10px;
    }

    #author p{
        font-size: 18px;
    }

    #backgroundColor{
        display: none;
        position: absolute;
        right: 10px;
        top: 10px;
        min-width: 100px;
        align-items: start;
        font-weight: bold;
        flex-direction: column;
        background-color: #1f1e3e;
        padding: 5px;
        border-radius: var(--radius);
    }

    #backgroundColor div{
        display: flex;
        align-items: center;
    }

    #backgroundColor p{
        font-size: 18px;
    }

    @media (min-width: 1200px){
        #backgroundColor{
            display: flex;
        }
        #author{
            display: flex;
        }
        #main{
            padding: 36px;
            max-width: 800px;
            max-height: 600px;
            border-radius: var(--radius);
            box-shadow: 2px 5px rgba(0, 0, 0, 0.8);
        }
    }
</style>

