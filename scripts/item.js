export default { validateName, create }
// const foo = 'bar';


let
function validateName(name) {

    if (name === null || undefined) {

        throw new TypeError("Name must not be blank");


    }


}



const create(name) = {
    id: cuid(),
    name: name,
    checked: false
};