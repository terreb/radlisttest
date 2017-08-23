import { HelloWorldModel } from './main-view-model'

let vm, page

export function navigatingTo( args ) {
    page = args.object
    page.bindingContext = vm = new HelloWorldModel()
}

export function loadMore() {
    console.log('load more')
    vm.addNewItems()
    page.getViewById('list').notifyLoadOnDemandFinished()
}