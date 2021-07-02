exports.config = {
    spec: [
        './test_scripts/openPage.js' 
    ],
    host: 'localhost',
    port: 9515,
    path:'/',
    capabilities: [
       {
        browserName: 'chrome'
       }
    ],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
    logLevel: 'info'

}


// Level of logging verbosity: trace | debug | info | warn | error | silent
// logLevel: 'info', // silent : test ko in ra log ,verbose in ra command phia data