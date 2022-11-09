// Именованная
function namedFunction() {}

// Анонимная
function() {}

// функция showMessage принимает два параметра под названиями user и message, а потом соединяет их для целого сообщения
function showMessage(user, message) {
 console.log(user + ': ' + message)
 }

// При вызове функции ей нужно передать аргументы
showMessage('Маша', 'Привет!')

// Переменные внутри функции существуют только внутри этой функции — этот эффект называется областью видимости.
function five() {
   const numberFive = 5
   }

// Глобальные переменные можно использовать как снаружи функции, так и внутри:
const numberFour = 4
function five() {
  const numberFive = numberFour + 1
  return numberFive
}
console.log(numberFour)

// Стрелочная функция.  function и фигурные скобки не требуются
const divider = (number) => number / 2

// В многострочных стрелочных функциях кода больше, поэтому они имеют фигурные скобки, но в остальном не отличаются:
const divider = (numerator, denominator) => {
  const result = numerator / denominator
  return result
}
console.log(divider(10,5))


// Объявление функции с помощью функционального выражения не что иное, как присваивание безымянной функции переменной:
const answer = function() {
  console.log('42!')
}
answer()
// 42!