<?php
// send_mail.php
header('Content-Type: application/json');

// 確認請求方式是否為 POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // 從 POST 中取得資料並移除多餘空白
    $name    = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email   = isset($_POST['email']) ? trim($_POST['email']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    
    // 基本資料驗證
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode([
            'status'  => 'error',
            'message' => 'Please fill in all fields.'
        ]);
        exit;
    }
    
    // 檢查 email 格式
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode([
            'status'  => 'error',
            'message' => 'Wrong Email format'
        ]);
        exit;
    }
    
    // 設定郵件資訊（請將收件人地址換成你的電子郵件）
    $to      = 'jieyou.1107@gmail.com';  // 修改成您要接收表單訊息的信箱
    $subject = 'Message from my personal website';
    $body    = "姓名: {$name}\nEmail: {$email}\n訊息: {$message}";
    $headers = "From: {$email}\r\n";
    
    // 嘗試寄送郵件
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode([
            'status'  => 'success',
            'message' => 'The mail had been sent successfully '
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'status'  => 'error',
            'message' => 'Fail to sent mail'
        ]);
    }
    
} else {
    // 非 POST 請求處理
    http_response_code(405);
    echo json_encode([
        'status'  => 'error',
        'message' => 'Not permitted request'
    ]);
}
?>
