export default class Model {
    constructor(data = []){
        this.$collection = [];
        if(data.length){
            this.record(data);
        }
    }
    record(arg){
        const primaryKey = 'id';
        const mappedData = arg.map(entry => {
            if(entry[primaryKey]) return entry
            entry[primaryKey] = Date.now(); 
            return entry
        })
        this.$collection.push(...mappedData);
    }
    all(){
        return this.$collection.map(entry => {
            return Object.assign({}, entry);
        });
    }
    find(id){
        const primaryKey = "id";
        const entry = this.$collection.find(entry => entry[primaryKey] === id);
        return entry ? Object.assign({}, entry) : null;
    }
    update(){}
}