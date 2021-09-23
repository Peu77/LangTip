import {writable} from "svelte/store";
import Test from "./test";

export const tests = writable([])
export const modal = writable({open: false})

export function loadTests(){
    const loadedTests = localStorage.getItem("tests")
    if(loadedTests === undefined || loadedTests === null){
        localStorage.setItem("tests", "[]")
        return
    }
    tests.set(JSON.parse(loadedTests))
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