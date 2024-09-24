document.querySelector('form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию

   // Получаем данные формы
   var name = document.getElementById("name").value.trim();
   var surname = document.getElementById("surname").value.trim();
   var email = document.getElementById("email").value.trim();
   var phone = document.getElementById("phone").value.trim();
   var message = document.getElementById("message").value.trim();
 
   // Проверяем, что все поля заполнены
   if (name === '' || surname === '' || email === '' || phone === '' || message === '') {
     document.getElementById('result1').innerHTML = "Пожалуйста, заполните все поля.";
     return;
   }

  // Отправляем данные формы на сервер
  var formData = new FormData(this);
  var response = await fetch('https://script.google.com/macros/s/AKfycbyxfX5w2jrtQgUEA0rg1I919HbFKMk9ei384AYkUJmxdUgCv69PDmLy5zz99H_G7MF7/exec', {
    method: 'POST',
    body: formData
  });

  // Проверяем статус ответа
  if (response.ok) {
    // Если ответ успешный, показываем сообщение об успешной отправке
    document.getElementById('result').innerHTML = "Данные успешно отправлены!";
     // Очищаем все поля формы
    this.reset();
  } else {
    // Если возникла ошибка, показываем соответствующее сообщение
    document.getElementById('result').innerHTML = "Произошла ошибка при отправке данных.";
  }
});
