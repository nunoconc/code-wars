
const vowelRegex = /^[aeiou]$/;

function isSimilar(password) {
    let counter = 0;

    for(let i=0; i < password.length; ++i) {

        if(counter >= password.length / 2){
            return false;
        }

        vowelRegex.test(password.charAt(i)) ? ++counter : --counter;
    }

    return counter === 0;

}
