// import * as logger from "./index"
// logger.log("hello -----")
export const add = (x,y) => Number(x)+Number(y)

export var server = '10.33.121.90'
export class HouseProperty{
    constructor(type){
        this.type = type
    }
    toString(){
        return `Type: ${this.type}`
    }
}
export class Cup extends HouseProperty{
    constructor(color,size,matrial,type){
        super(type)
        this.color = color
        this.size = size
        this.matrial = matrial
        console.log("Cup Created")
    }
    toString(){
        return (`${super.toString()} Color: ${this.color} Size: ${this.size} Material: ${this.matrial} `)
    }
}
