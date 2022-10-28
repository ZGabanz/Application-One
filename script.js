document.addEventListener('DOMContentLoaded', () => {
    /** @type {HTMLSelectElement} */
    const select = document.querySelector('#select');
    /** @type {HTMLInputElement} */
    const input = document.querySelector('#input');
    /** @type {HTMLButtonElement} */
    const saveButton = document.querySelector('#btn');

    const getSelectedOption = () => {
        const { selectedIndex } = select;
        const optionsList = Array.from(select.options);

        return optionsList[selectedIndex];
    };

    const selectedOption = getSelectedOption();
    input.value = selectedOption.value;

    saveButton.addEventListener('click', () => {
        const enteredText = input.value;

        if (!enteredText) {
            return;
        }

        const selectedOption = getSelectedOption();

        selectedOption.value = enteredText;
        selectedOption.text = enteredText;
    });

    select.addEventListener('change', () => {
        const selectedOption = getSelectedOption();

        input.value = selectedOption.value;
    });
});
