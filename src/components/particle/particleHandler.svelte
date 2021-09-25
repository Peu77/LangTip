<script>
    import Particle from "./particle.svelte"
    import {particles} from "../../data/store";
    import {onMount} from "svelte";
    import {v4 as uuid} from "uuid"

    onMount(() => {
        setInterval(() => {
            particles.update(currentParticles => {
                return [...currentParticles, {
                    x: Math.floor(Math.random() * screen.width - 20),
                    speed: Math.random() * 5,
                    uuid: uuid()
                }]
            })
        }, 500)
    })

</script>


{#each $particles as particle}
<Particle data={particle}/>
{/each}