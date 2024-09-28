function greeting(greetingHandler, name){
    greetingHandler(name);
}



function greetingHandler(name){
    console.log('good morning', name)
}

function greedEvening(name){
    console.log('good evening', name)
}


greeting(greetingHandler, 'tom hang')
greeting(greetingHandler, 'tom branding')
greeting(greedEvening, 'tom hang')