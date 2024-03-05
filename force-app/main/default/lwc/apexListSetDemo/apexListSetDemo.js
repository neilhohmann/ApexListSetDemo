import { LightningElement, track } from 'lwc';

export default class ListSetDemo extends LightningElement {
    @track myList = [];
    @track mySet = new Set();
    add = false;
    index = false;
    size = false;
    item = null;
    userInput = null;

    get myArray() {
        return Array.from (this.myList).join(', ');
    }

    get mySetArray() {
        return Array.from (Array.from (this.mySet).sort()).join(', ');
    }

    get indexZero() {
        return this.myList[0];
    }

    get indexOne() {
        return this.myList[1];
    }

    get indexTwo() {
        return this.myList[2];
    }

    get listSize() {
        return this.myList.length;
    }

    get setSize() {
        return this.mySet.size;
    }

    get indexLast() {
        return this.myList[this.myList.length-1];
    }

    itemHandler(event) {
        this.userInput = event.target.value;
        if (event.key === 'Enter') {
            this.item = event.target.value;
            this.myList.push(this.item);
            this.mySet.add(this.item);
            // Clear the input values
            this.item = null;
            this.userInput = null;
            // Force a re-render to update the view (this removes the user input from the field)
            const inputField = this.template.querySelector('lightning-input');
            inputField.value = null;
        }
    }

    reset = function() {
        this.myList = [];
        this.mySet.clear();
        this.item = null;
        this.userInput = null;
        this.add = false;
        this.index = false;
        this.size = false;
    }

    sortList = function() {
        this.myList.sort();
    }

    showAdd = function() {
        this.add = true;
    }

    showSize = function() {
        if (this.add === true) {
            this.size = true;
        }
    }

    showIndex = function() {
        if (this.size === true) {
            this.index = true;
        }
    }
    
    clearListSet = function() {
        this.myList = [];
        this.mySet.clear();
        this.item = null;
        this.userInput = null;
    }
}