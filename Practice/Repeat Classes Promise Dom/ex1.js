function heavyProcessing(item) {
    // Long processing code
    return null;
}


function loopBlockingRendering(itemsArr) {
    // Imagine you are given an array of 1 million items,
    // function heavyProcessing processes a task and takes too long to process
    // that causes the browser to stuck,
    // modify the code and make a way so that the browser could render between each processing,
    itemsArr.forEach( item =>  SettimeOut(heavyProcessing(item)));
}

