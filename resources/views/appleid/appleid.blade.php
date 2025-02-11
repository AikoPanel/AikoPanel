<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Các thẻ meta và liên kết tới CSS -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <title>Bạn Đang Lấy ID Tại: {{ $appname }}</title>
    <style>
        /* CSS tương tự như trước */
        body {
            font-family: 'Arial', sans-serif;
            background-image: linear-gradient(0deg, #e6f7ff 5%, #ffffff 50%, #cceeff 100%);
            background-repeat: no-repeat;
            background-size: cover;
            color: #333;
        }

        .card1 {
            box-shadow: 0px 0px 10px 5px rgb(235 235 235), 0 0 0 rgb(110 29 255);
            border-radius: 20px;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .card {
            background-color: #ffffff;
            border: 1px solid #ccccff;
            border-radius: 20px;
            padding: 2rem;
            max-width: 400px;
            width: 100%;
            box-shadow: inset 0px 0px 15px 10px rgb(204 204 255), 0 0 0 rgb(125 125 125);
        }

        h1 {
            color: #333;
            font-size: 1.5rem;
            text-align: center;
            margin-bottom: 1.5rem;
        }

        p {
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }

        .btn-primary,
        .btn-secondary {
            width: 100%;
            margin-bottom: 0.5rem;
        }

        .btn-primary {
            background-color: #cceeff !important;
            color: #0059b3 !important;
            box-shadow: inset 0px 0px 10px 5px rgb(204 204 255), 0 0 0 rgb(255 134 179) !important;
            font-weight: 600;
            border: 1px solid #99ccff !important;
            border-radius: 10px;
        }

        .btn-primary:hover {
            transform: scale(1.1);
            background-color: #99ccff !important;
            border: 1px solid #66b2ff !important;
        }

        .btn-secondary {
            background-color: #80bfff;
            border-color: #6c757d;
            font-weight: 600;
            border-radius: 8px;
        }

        .btn-secondary:hover {
            background-color: #66a3ff;
            border-color: #545b62;
        }

        ol {
            text-align: left;
        }

        /* Custom CSS for spinner */
        .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border-left-color: #09f;
            animation: spin 1s infinite linear;
            display: inline-block;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="card1">
            <div class="card">
                <h1>Bạn Đang Lấy ID Tại<br> {{ $appname }}</h1>
                <div class="text-center">
                    <p><strong>Số lần lấy còn lại:</strong> {{ $appleidlimit }}</p>
                    <button id="newIdButton" class="btn btn-primary" onclick="confirmNewId()" style="display: none;">👉 Lấy ID Mới</button>
                    <p><strong>Trạng thái:</strong> {{ $statusid }}</p>
                    <p><strong>ID:</strong> <span id="username">{{ $username }}</span></p>
                    <p hidden><strong>Password:</strong> <span id="password">{{ $password }}</span></p>
                    <button id="copyUsernameButton" onclick="copyUsernameToClipboard()" class="btn btn-primary" style="display: none;">👉 Sao Chép Tài Khoản</button>
                    <button id="copyPasswordButton" onclick="copyPasswordToClipboard()" class="btn btn-primary" style="display: none;">👉 Sao Chép Mật Khẩu</button>
                    
                    </p>
<div id="quantumultXSection" style="display: none;">
    <p id="passwordValidityNote"><strong>Quantumult X:</strong> Bấm vào để tải Quantumult X</p>
    <button id="quantumultXSection" onclick="window.location.href='{{ $quantumultx }}'" class="btn btn-primary">👉 Tải Quantumult X</button>
    <p id="quantumultXSection"><strong>Lưu ý:</strong> Nhớ tải Quantumult X trong tài khoản trước rồi xoá đi và tải lại ở đây thì mới không bị Build đỏ nhé</p>
</div>

<p id="passwordExpiryNote" style="display: none;"><strong>Mật khẩu chỉ có hiệu lực trong 30 phút</strong></p>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        var copyUsernameButton = document.getElementById('copyUsernameButton');
        var quantumultXSection = document.getElementById('quantumultXSection');
        if (copyUsernameButton.style.display !== 'none') {
            quantumultXSection.style.display = 'block';
        }
    });
</script>
                    
                    <p id="noteText"><strong>* Lưu ý:</strong>
                        <i>Mật khẩu sẽ được thay đổi 30phút 1 lần, nên các bạn hạn chế bấm lấy id khi không cần thiết để tránh mất lượt lấy id nha, nếu hết lượt vui lòng thuê lại <br><b></b><br>cảm ơn các bạn đã ủng hộ.</i>
                    <ol>
                        <li>Vào Mục Đã Mua (Hoặc phần "Ứng Dụng" trên IOS17 trong App Store) để tải APP</li>
                        <li>Tiếp theo chọn "Bấm Vào Đây, Để Lấy ID App-Game"</li>
                        <li>Tải Xong Hãy Đăng Xuất Ngay</li>
                        <li>Nếu gặp tình trạng bị khóa hoặc vấn đề đăng nhập liên hệ Zalo Admin để khắc phục sớm nhất</li>
                    </ol>
                    



                    <p id="passwordValidity" style="display: none;"><strong>Mật khẩu chỉ có hiệu lực trong 30 phút</strong></p>
                    <p id="confirmText" style="display: block;">
                        <div><span id="spinner" class="spinner" style="margin-bottom: -5px;"></span> <span>Nếu đã đọc xong hãy bấm nút xác nhận để lấy ID</span> </div>
                    </p>
                    <button id="confirmButton" onclick="showCopyButtons()" class="btn btn-primary">👉 Xác Nhận Đã Đọc Lưu Ý</button>
                    <hr>
                    <a id="backToHome" href="/#/dashboard" class="btn btn-secondary">Quay Lại Trang chủ</a>
                </div>
            </div>
        </div>
    </div>
    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
    <script>
        let usernameCopied = false;
        let passwordCopied = false;

        async function copyTextToClipboard(text) {
            try {
                await navigator.clipboard.writeText(text);

                Swal.fire({
                    icon: 'success',
                    title: 'Sao chép thành công!',
                    showConfirmButton: false,
                    timer: 1500
                });
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        }

        function copyUsernameToClipboard() {
            const username = document.getElementById('username').innerText;
            copyTextToClipboard(username);
            usernameCopied = true;
            checkCopyStatus();
        }

        function copyPasswordToClipboard() {
            const password = document.getElementById('password').innerText;
            copyTextToClipboard(password);
            passwordCopied = true;
            checkCopyStatus();
        }

        function showCopyButtons() {
            document.getElementById('copyUsernameButton').style.display = 'block';
            document.getElementById('copyPasswordButton').style.display = 'block';
            document.getElementById('passwordValidity').style.display = 'block';
            document.getElementById('quantumultXSection').style.display = 'block';
            document.getElementById('confirmButton').style.display = 'none';
            document.getElementById('noteText').style.display = 'none';
            document.getElementById('confirmText').style.display = 'none';
            document.getElementById('spinner').style.display = 'none';
        }

        function checkCopyStatus() {
            if (usernameCopied && passwordCopied) {
                document.getElementById('newIdButton').style.display = 'block';
            }
        }

        function confirmNewId() {
            Swal.fire({
                title: 'Lấy ID mới sẽ mất sẽ 1 lượt lấy ID',
                text: 'Hãy cân nhắc trước khi đồng ý, hoặc nếu gặp lỗi về ID hãy liên hệ Zalo admin  để khắc phục sớm nhất',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Đồng ý',
                cancelButtonText: 'Hủy'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
        }

        document.getElementById('confirmButton').addEventListener('click', function () {
            this.disabled = true;
            setTimeout(() => {
                showCopyButtons();
            }, 3000);
        });
    </script>
</body>

</html>
