$('#contactForm').submit(function(e) {
  e.preventDefault();
  const name = $('#name').val().trim();
  const email = $('#email').val().trim();
  const message = $('#message').val().trim();

  if(name === "" || email === "" || message === "") {
    alert("Please fill in all fields！");
    return;
  }
  
  // 使用 AJAX 傳送表單資料到後端
  $.ajax({
    type: 'POST',
    url: 'send_mail.php', // 這裡指定後端處理檔案的路徑
    data: { name: name, email: email, message: message },
    success: function(response) {
      alert("Thanks for your contact.I'll reply you soon！");
      $('#contactForm').trigger('reset');
    },
    error: function() {
      alert("Sorry,the mail couldn't been sent. Please try it again.");
    }
  });
});
