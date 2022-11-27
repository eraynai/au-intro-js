function isAllX(string) {
    let isAllx = false;
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === "x" || string[i].toUpperCase() === "X") {
            isAllx = true;
        } else {
            isAllx = false;
            return false;
        }
    }
    return true;
}

isAllX("Xx"); // true
isAllX("xAbX"); // false