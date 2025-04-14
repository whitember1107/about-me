$('#contactForm').submit(function(e) {
  e.preventDefault();
  const name = $('#name').val().trim();
  const email = $('#email').val().trim();
  const message = $('#message').val().trim();

  if(name === "" || email === "" || message === "") {
    alert("請填寫所有欄位！");
    return;
  }
  
  // 使用 AJAX 傳送表單資料到後端
  $.ajax({
    type: 'POST',
    url: 'send_mail.php', // 這裡指定後端處理檔案的路徑
    data: { name: name, email: email, message: message },
    success: function(response) {
      alert("感謝您的聯絡，我們將儘快回覆您！");
      $('#contactForm').trigger('reset');
    },
    error: function() {
      alert("抱歉，訊息傳送失敗，請稍後再試。");
    }
  });
});
