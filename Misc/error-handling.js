var age = 8
try{
    if (age >= 18){
        console.log('You are old enough to vote');
    } else {
        throw {
            code: 1001,
            message: 'You are not old enough to vode'
        }
    }
} catch (ex) {
    console.log('There is an error');
    console.log(ex.code + ' : ' + ex.message)
} finally {
    console.log('Finally block')
}