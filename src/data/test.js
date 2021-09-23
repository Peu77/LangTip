import {v4 as uuid} from 'uuid'

export default class Test{
    constructor(name) {
        this.uuid = uuid()
        this.name = name;
        this.questions = []
    }
}