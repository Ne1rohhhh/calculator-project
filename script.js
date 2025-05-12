const display = document.getElementById('display');

const appendToDisplay = (text) => {
    display.value += text;
}

const clearDisplay = () => {
    display.value = '';
}

const calculate = () => {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

if (display.value !== '') {
    
}