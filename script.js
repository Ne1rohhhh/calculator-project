const display = document.getElementById('display');

const appendToDisplay = (text) => {
    display.value += text;
}

const clearDisplay = () => {
    display.value = '';
}

const deleteLastElement = () => {
    const currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    } 
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') calculate();
    if (event.key === 'Backspace') deleteLastElement();
});

const calculate = () => {
    try {
        let expression = display.value;

        if (!/^([0-9+\-*/%.()\s]|sqrt)+$/.test(expression)) {
            throw new Error('Invalid characters in expression');
        }

        expression = expression.replace(/(\d+(\.\d+)?)%(\d+(\.\d+)?)/g, '($1 / 100) * $3');

        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');

        const result = eval(expression);
        display.value = result;

    } catch (error) {
        display.value = 'Error';
    }
}
