// Error handling in JavaScript
// errors aren't mistakes but rather they are features.

//  try catch blocks:
function fail() {
  try {
    console.log('this works')
    throw new Error('oopsie!!!!')
  } catch (error) {
    console.log('we have made an oopsie', error)
  } finally {
    console.log('still good')
    return 'returning fail'
  }

}
fail()
// can be used to catch synchronus errors
// doesn't work with asynchronus code
// can be nested if desired.



// Asynchronus error handling:
// we use the .catch() method
Promise.resolve('asyncfail').then(response => {
  throw new Error('number 1 fail')
  console.log(response)
}).then(response => {console.log(response)
}).catch(err => console.log(err))  