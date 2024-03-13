<script>
  // Получаем все ссылки с классом "link__to__plane__Russia"
  var links = document.querySelectorAll('.link__to__plane__Russia');
  
  // Перебираем все найденные ссылки
  links.forEach(function(link) {
    // Добавляем обработчик события клика
    link.addEventListener('click', function(event) {
      // Отменяем стандартное действие браузера (переход по ссылке)
      event.preventDefault();
      
      // Получаем значение атрибута href ссылки
      var href = this.getAttribute('href');
      
      // Перенаправляем на URL с измененным регистром
      window.location.href = href.toUpperCase();
    })
  });
  var links = document.querySelectorAll('.link__to__plane__Russia');
  
  // Перебираем все найденные ссылки
  links.forEach(function(link) {
    // Добавляем обработчик события клика
    link.addEventListener('click', function(event) {
      // Отменяем стандартное действие браузера (переход по ссылке)
      event.preventDefault();
      
      // Получаем значение атрибута href ссылки
      var href = this.getAttribute('href');
      
      // Перенаправляем на URL с измененным регистром
      window.location.href = href.toUpperCase();
    })
  });
</script>