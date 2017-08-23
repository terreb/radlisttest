import { Observable } from 'data/observable'
import { ObservableArray } from 'data/observable-array'

export class HelloWorldModel extends Observable {

    items = new ObservableArray()
    count = 0

    constructor() {
        super()
        this.addNewItems()
    }

    addNewItems() {
        const items = []
        for ( let i = 0; i < 50; i++ ) {
            items.push( this._getItem() )
        }
        this.items.push( items )
    }

    private _getItem() {
        this.count++
        return {
            name: 'title ' + this.count
        }
    }
}