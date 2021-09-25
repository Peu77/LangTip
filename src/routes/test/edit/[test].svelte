<script>
    import {page} from "$app/stores"
    import {tests} from "../../../data/store";

   const uuid = $page.params.test
    const test = $tests.find(test => test.uuid === uuid)
</script>

<h1>{test.name}</h1>
