<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Các thẻ meta và liên kết tới CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <title>Lỗi</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            background-color: #f4f4f4;
            font-family: 'Roboto', sans-serif;
        }

        .error-container {
            text-align: center;
            margin-top: 10vh;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #e5e5e5;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
        }

        h1 {
            color: #333;
            font-size: 24px;
        }

        p {
            font-size: 16px;
        }

        .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
        }

        .btn-secondary:hover {
            background-color: #545b62;
            border-color: #545b62;
        }

        @media (max-width: 767px) {
            .error-container {
                margin-top: 5vh;
            }
        }
    </style>
</head>
<body>
    <div class="error-container">
        <h1>Lỗi</h1>
        <p>{{ $message }}</p>
    </div>
    <div class="text-center mt-4">
        <a href="/#/dashboard" class="btn btn-secondary">Trang chủ</a>
    </div>
</body>
</html>
