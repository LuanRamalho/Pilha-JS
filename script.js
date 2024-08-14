const stack = [];
const elementInput = document.getElementById('element');
const elementCountInput = document.getElementById('elementCount');
const stackList = document.getElementById('stackList');
const elementCountDisplay = document.getElementById('elementCountDisplay');

document.getElementById('pushButton').addEventListener('click', () => {
    const elementCount = parseInt(elementCountInput.value);
    if (stack.length < elementCount) {
        const element = elementInput.value;
        if (element) {
            stack.push(element);
            elementInput.value = '';
            updateStackDisplay();
        } else {
            alert('Por favor, insira um elemento.');
        }
    } else {
        alert('A pilha atingiu o limite de elementos.');
    }
});

document.getElementById('popButton').addEventListener('click', () => {
    if (stack.length > 0) {
        stack.pop();
        updateStackDisplay();
    } else {
        alert('A pilha está vazia.');
    }
});

function updateStackDisplay() {
    stackList.innerHTML = '';
    stack.forEach((element, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}: ${element}`;
        stackList.appendChild(li);
    });
    elementCountDisplay.textContent = `Quantidade de Elementos: ${stack.length}`;
}
