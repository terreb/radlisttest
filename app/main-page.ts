import { HelloWorldModel } from './main-view-model'

let vm

export function navigatingTo( args ) {
    const page = args.object
    page.bindingContext = vm = new HelloWorldModel()
}

export function loadMore() {
    console.log('lod more')
    vm.addNewItems()
}