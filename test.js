const array = ['test1', 'test2', 'test3']

const getObject = (array) => {
   const output = {};

   array.map((item, index) => {
       Object.assign(output, {[index]: item})
   })

   return output
}

console.log(getObject(array));