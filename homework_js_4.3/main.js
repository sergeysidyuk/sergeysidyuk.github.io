// Необходимо написать функцию, которая принимает слово в виде строки, 
// функция будет возвращать слово с буквами в обратном порядке, 
// например в функцию передаем слово “ТЕЛЕФОН”, на выходе имеем слово «НОФЕЛЕТ».

const reverseString = function(string) {
    return string.toUpperCase().split ('').reverse().join('')
}

console.log(reverseString('Телефон'))
