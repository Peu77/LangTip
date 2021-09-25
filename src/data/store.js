import {writable} from "svelte/store";
import Test from "./test";

export const tests = writable([])
export const modal = writable({open: false})

export function openModal(content) {
    modal.set({
        open: true,
        content: content
    })
}

export function closeModal(){
    modal.set({
        open: false
    })
}

export function loadTests(){
    console.log("load before")
    const loadedTests = localStorage.getItem("tests")
    if(loadedTests === undefined || loadedTests === null){
        localStorage.setItem("tests", "[]")
        return
    }
   // tests.set(JSON.parse(loadedTests))
    tests.set([new Test("lost"), new Test("hi"), new Test("S.158")])
}

export function saveTests(){
    tests.subscribe(value => localStorage.setItem("tests", JSON.stringify(value)))
}

export function createTest(name){
    tests.update(currentTests => {
        return [...currentTests, new Test(name)]
    })
}

export function deleteTest(uuid){
    tests.update(currentTests => {
        return currentTests.filter(test => test.uuid !== uuid)
    })
}