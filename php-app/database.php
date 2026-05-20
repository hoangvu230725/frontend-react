<?php
$host = 'localhost';  // Tên máy chủ MySQL
$dbname = 'doan_web';  // Tên cơ sở dữ liệu
$username = 'root';  // Tên người dùng MySQL
$password = '';  // Mật khẩu MySQL

try {
    // Kết nối cơ sở dữ liệu MySQL bằng PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Cấu hình lỗi PDO
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Nếu kết nối thất bại, hiển thị thông báo lỗi
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}
?>
