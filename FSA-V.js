let groups = [];

function genFSA(regex) {
    if (checkForValidRegex(regex))
        console.log(groups);
    else
        document.getElementById("err_msg").innerHTML = "Error. Please enter a valid regular expression."
}

function checkForValidRegex(input) {
    let stack = [];

    let i = 0;
    while (i < input.length) {
        if (input[i] == '(' || input[i] == '[' || input[i] == '{') {
            let newGroup = []; // new regex grouping starting with opening symbol
            while (i < input.length && input[i] != ')') {
                stack.push(input[i]);
                i++;
            }
            if (i > input.length)
                return false;
            while (stack.length > 0)
                newGroup.push(stack.pop());
            groups.push(newGroup);
        }
        i++;
    }
    return true;
}