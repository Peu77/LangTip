import {writable} from "svelte/store";
import Test from "./test";

export const tests = writable([])

export function loadTests(){
    const loadedTests = localStorage.getItem("tests")
    if(loadedTests === undefined)
    tests.set(JSON.parse())
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