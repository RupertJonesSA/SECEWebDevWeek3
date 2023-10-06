const { format } = require('date-fns');
const { v4: uuid } = require('uuid'); // Same as uuid.v4()

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

console.log(uuid());