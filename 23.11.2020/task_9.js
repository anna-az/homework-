/*
Task 9

Напишите проверку пароля, введенного пользователем. 
Если введенный пароль правильный, то программа выдает сообщение “Вы успешно авторизованы”. 
Если пароль неправильный, программа снова выдает запрос пароля – до тех пор, пока пользователь не введет правильный пароль или не нажмет Отмена. 
В случае отмены авторизации, выдать окно подтверждения с текстом: “Вы уверены, что хотите отменить авторизацию?”. 
Если ответ утвердительный, тогда выдать сообщение “Вы отменили авторизацию”, если ответ отрицательный, тогда снова выдать запрос пароля.

*/

var password = '';
var correctPass = 'qwerty';
var exit = true;
while (password !== correctPass) {
    password = prompt('Enter password', '');
    if (password === null) {
        var isExit = confirm('Are you sure you want to cancel your authorization?');
        if (isExit) {
            exit = false;
            break;
        } else {continue;}    
    }
}
if(exit) {
    alert('You are successfully logged in');
} else {
    alert('You cancelled your authorization');
}