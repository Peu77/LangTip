<main id="main">
    <slot></slot>
</main>

<style>
    #main{
        width: 100vw;
        height: 100vh;
        max-width: 800px;
        max-height: 600px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        background-color: #003c8f;
    }
</style>

