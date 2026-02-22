import moment from 'moment';
// const moment = require('moment'); = used when we use common js modules,but in this case we are using ES modules,
// so we use the import statement instead of required

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));