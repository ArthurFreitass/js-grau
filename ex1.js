const count = () => {
    for (let i = 1; i <= 100; i++) {
        if (isPair(i)) {
            console.log(i);
        }
    }
}

const isPair = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

count();
