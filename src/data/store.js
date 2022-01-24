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

export function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return window.clipboardData.setData("Text", text);

    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return prompt("Copy to clipboard: Ctrl+C, Enter", text);
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}