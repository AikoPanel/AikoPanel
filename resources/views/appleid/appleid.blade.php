<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Các thẻ meta và liên kết tới CSS -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <title>AppleID Web {{ $appname }}</title>
    <style>
        body {
            background-color: #92c5ff;
            font-family: 'Arial', sans-serif; /* Change the font for better compatibility */
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .card {
            background-color: #a6cfff;
            border: 1px solid #e5e5e5;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            max-width: 400px;
            width: 100%;
        }

        h1 {
            color: #333;
            font-size: 1.5rem; /* Adjusted font size for mobile */
            text-align: center;
            margin-bottom: 1.5rem;
        }

        p {
            font-size: 1rem; /* Adjusted font size for mobile */
            margin-bottom: 0.5rem;
        }

        .btn-primary, .btn-secondary {
            width: 100%;
            margin-bottom: 0.5rem;
        }

        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }

        .btn-primary:hover {
            background-color: #0056b3;
            border-color: #0056b3;
        }

        .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
        }

        .btn-secondary:hover {
            background-color: #545b62;
            border-color: #545b62;
        }
    </style>
    <script>
        function copyTextToClipboard(text) {
            const el = document.createElement('textarea');
            el.value = text;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            const selected =
                document.getSelection().rangeCount > 0
                    ? document.getSelection().getRangeAt(0)
                    : false;
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            if (selected) {
                document.getSelection().removeAllRanges();
                document.getSelection().addRange(selected);
            }

            // Show success alert using SweetAlert2
            Swal.fire({
                icon: 'warning',
                title: 'Sao Chép Thành Công!',
                showConfirmButton: false,
                timer: 1500
            });
        }

        function copyUsernameToClipboard() {
            const username = document.getElementById('username').innerText;
            copyTextToClipboard(username);
        }

        function copyPasswordToClipboard() {
            const password = document.getElementById('password').innerText;
            copyTextToClipboard(password);
        }
    </script>
</head>
<body>
    <div class="container">
        <div class="card">
            <h1>AppleID Web {{ $appname }}</h1>
            <div class="text-center">
                <p><strong>Số lần lấy còn lại:</strong> {{ $appleidlimit }}</p>
                <p><strong>Trạng thái:</strong> {{ $statusid }}</p>
                <p><strong>Tài Khoản:</strong> <span id="username">{{ $username }}</span></p>
                <p hidden><strong>Password:</strong> <span id="password">{{ $password }}</span></p>
                <button onclick="copyUsernameToClipboard()" class="btn btn-primary">Sao Chép Tài Khoản</button>
                <button onclick="copyPasswordToClipboard()" class="btn btn-primary">Sao Chép Mật Khẩu</button><br><hr>⬇️ Lấy id tại đây nếu lỗi ⬇️
                <a href="/appleid" class="btn btn-secondary">Id Shadowrocket</a>
                <img src="../images/idapple_guide.jpg" alt="Hướng dẫn lấy ID Apple" style="width: 100%; max-width: 400px; margin-top: 1rem;">
                <hr> <!-- Horizontal line -->
                @if (!empty($quantumultx))
                    <p><strong>Quantumult X:</strong> Bấm vào để tải Quantumult X</p>
                    <button onclick="window.location.href='{{ $quantumultx }}'" class="btn btn-primary">Tải Quantumult X</button>
                    <p><strong>Lưu ý:</strong> Nhớ tải Quantumult X trong tài khoản trước rồi xoá đi và tải lại ở đây thì mới không bị Build đỏ nhé</p>
                @endif
                <a href="/#/dashboard" class="btn btn-secondary">Trang chủ</a>
            </div>
        </div>
    </div>
</body>
</html>
