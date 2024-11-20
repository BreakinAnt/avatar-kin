export class Group {
    constructor(name, index = 0) {
        this.name = name;
        this.index = index;
        this.members = [];
        this.active = null;
    }
    
    getActiveFilepath() {
        return this.active ? `/avatar/${this.name}/${this.active.filename}` : null;
    }

    activate(member) {
        this.active = member;
    }

    add(value) {
        if (!this.has(value)) {
        this.members.push(value);
        }
    }
    
    delete(value) {
        this.members = this.members.filter(v => v !== value);
    }
    
    has(value) {
        return this.members.includes(value);
    }
    
    static from(collection) {
        let group = new Group;
        for (let value of collection) {
        group.add(value);
        }
        return group;
    }
}