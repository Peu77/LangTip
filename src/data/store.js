import {writable} from "svelte/store";
import Test from "./test";

export const tests = writable([])
export const modal = writable({open: false})

export function openModal(content, props = {}) {
    modal.set({
        open: true,
        content: content,
        props
    })
}

export function closeModal() {
    modal.set({
        open: false
    })
}

export function loadTests() {
    console.log("load before")
    const loadedTests = localStorage.getItem("tests")
    if (loadedTests === undefined || loadedTests === null) {
        localStorage.setItem("tests", "[]")
        return
    }

    tests.set(JSON.parse(loadedTests))
}

export function saveTests() {
    tests.subscribe(value => localStorage.setItem("tests", JSON.stringify(value)))
}

export function createTest(name) {
    if (name === "") return false

    tests.update(currentTests => {
        return [...currentTests, new Test(name)]
    })
    saveTests()
    return true
}

export function deleteTest(uuid) {
    saveTests()
    tests.update(currentTests => {
        return currentTests.filter(test => test.uuid !== uuid)
    })
}