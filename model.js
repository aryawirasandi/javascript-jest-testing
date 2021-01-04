export default class Model {
    constructor(data = []){
        this.$collection = [];
        if(data.length){
            this.record(data);
        }
    }
    record(arg){
        this.$collection.push(...arg);
    }
    all(){}
    find(){}
    update(){}
}