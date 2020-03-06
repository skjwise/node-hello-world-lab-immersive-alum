//create a function that returns 'Hello World'

let helloWorld =  function(){
    return 'Hello World'
}
if (require.main === module) {
    console.log(helloWorld())
} else {
    module.exports = helloWorld
}