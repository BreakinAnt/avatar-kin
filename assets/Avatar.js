export class Avatar {
    constructor(groups = []) {
        this.groups = groups;
    }

    add(group) {
        this.groups.push(group);
    }
}