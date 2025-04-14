/* script.js */

// 當網頁文件載入完成後執行
$(document).ready(function(){
  // 平滑捲動效果：監聽導覽列連結及其他按鈕的點擊事件
  $('a.nav-link, a.btn').click(function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });
});

// 聯絡表單送出事件監聽
$('#contactForm').submit(function(e) {
  e.preventDefault();
  // 基本的表單驗證
  const name = $('#name').val().trim();
  const email = $('#email').val().trim();
  const message = $('#message').val().trim();

  if(name === "" || email === "" || message === "") {
    alert("請填寫所有欄位！");
    return;
  }
  
  // 可以在這裡加入 AJAX 呼叫，把表單資料送往後端處理
  alert("感謝您的聯絡，我們將儘快回覆您！");
  // 表單重設
  $(this).trigger('reset');
});
