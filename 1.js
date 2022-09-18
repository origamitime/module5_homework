let inputValue = prompt("Введите значение");
console.log(inputValue);
if ((typeof(+inputValue) == 'number') && (!isNaN(+inputValue))){
    if (inputValue % 2 === 0) {
        console.log("Четное");
    } else {
        console.log("Нечетное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}