<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

// Kết nối cơ sở dữ liệu
include 'database.php';

$action = $_GET['action'] ?? '';

if ($action == 'getCategories') {
    // Lấy tất cả danh mục
    $stmt = $pdo->query("SELECT * FROM danhmuc");
    $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($categories, JSON_UNESCAPED_UNICODE);

} elseif ($action == 'getProducts') {
    // Lấy tất cả sản phẩm
    $stmt = $pdo->query("SELECT * FROM sanpham");
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($products, JSON_UNESCAPED_UNICODE);

} elseif ($action == 'getProductsByCategory') {
    // Lấy sản phẩm theo danh mục
    $categoryId = $_GET['categoryId'] ?? 0;
    if ($categoryId) {
        $stmt = $pdo->prepare("SELECT * FROM sanpham WHERE iddanhmuc = ?");
        $stmt->execute([$categoryId]);
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    } else {
        $stmt = $pdo->query("SELECT * FROM sanpham");
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    echo json_encode($products, JSON_UNESCAPED_UNICODE);

} elseif ($action == 'searchProducts') {
    // Tìm kiếm sản phẩm theo tên
    $searchQuery = $_GET['query'] ?? '';
    if (!empty($searchQuery)) {
        $stmt = $pdo->prepare("SELECT * FROM sanpham WHERE tensanpham LIKE ?");
        $stmt->execute(['%' . $searchQuery . '%']);
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($products, JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode([]);
    }

} elseif ($action == 'getNewProducts') {
    // Sản phẩm mới (sắp xếp theo ngày tạo, giới hạn 10)
    $stmt = $pdo->query("SELECT * FROM sanpham ORDER BY ngaytao DESC LIMIT 5");
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($products, JSON_UNESCAPED_UNICODE);

}elseif ($action == 'getProductDetail') {
    $id = $_GET['id'] ?? 0;
    if ($id) {
        $stmt = $pdo->prepare("SELECT * FROM sanpham WHERE id = ?");
        $stmt->execute([$id]);
        $product = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($product) {
            echo json_encode($product, JSON_UNESCAPED_UNICODE);
        } else {
            echo json_encode(['error' => 'Không tìm thấy sản phẩm']);
        }
    } else {
        echo json_encode(['error' => 'Thiếu id sản phẩm']);
    }
}
 
else {
    echo json_encode(['error' => 'Invalid action']);
}
?>
