function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    let display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function toggleSign() {
    let display = document.getElementById('display');
    let currentValue = display.value;

    if (currentValue !== '' && currentValue !== '0' && currentValue !== '-') {
        display.value = -parseFloat(currentValue);
    } else if (currentValue === '-') {
        display.value = '0';
    } else if (currentValue === '0') {
    }
}

function memoryStore() {
    let display = document.getElementById('display');
    let currentValue = display.value;
    let memory = localStorage.getItem('calculator_memory') || '0';

    if (currentValue !== '') {
        let newValue = parseFloat(currentValue) + parseFloat(memory);
        localStorage.setItem('calculator_memory', newValue.toString());
    }
}
