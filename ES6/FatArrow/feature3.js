//Feature3: this keyword: object content is less compared to normal function

//object content is less when fatarrow funcion is used
let f=()=>{console.log(this)}
f() //output: {}

function normal(){
    console.log(this)
}
normal()      
                                              //ouput:objec content is large:
/*<ref *1> Object [global] {
global: [Circular *1],
clearInterval: [Function: clearInterval],
clearTimeout: [Function: clearTimeout],
setInterval: [Function: setInterval],
setTimeout: [Function: setTimeout] {
[Symbol(nodejs.util.promisify.custom)]: [Getter]
},
queueMicrotask: [Function: queueMicrotask],
performance: Performance {
nodeTiming: PerformanceNodeTiming {
name: 'node',
entryType: 'node',
startTime: 0,
duration: 141.95190000534058,
nodeStart: 1.9149000644683838,
v8Start: 16.508399963378906,
bootstrapComplete: 107.83340001106262,
environment: 51.79570007324219,
loopStart: -1,
loopExit: -1,
idleTime: 0
},
timeOrigin: 1661871869720.496
},
clearImmediate: [Function: clearImmediate],
setImmediate: [Function: setImmediate] {
[Symbol(nodejs.util.promisify.custom)]: [Getter]
}
}*/

