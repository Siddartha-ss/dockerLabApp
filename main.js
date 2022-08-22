function showItems(items) {
    for(var x in items){
        console.log(x+" costs: "+items[x])
    }
}

const i = {
    "Coffee":"20rs",
    "Tea":"10rs",
    "Juice":"50rs"
}

showItems(i)