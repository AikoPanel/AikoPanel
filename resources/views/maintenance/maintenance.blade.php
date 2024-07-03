<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <title>{{$title}}</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .container {
            text-align: center;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #e74c3c;
            font-size: 20px;
        }

        p {
            color: #555;
            margin-top: 10px;
            font-weight: 600;
        }

        a {
            color: #3498db;
        }

        button {
            background-color: #6e49cb;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            margin-top: 5px;
            transition: all 0.3s ease-in-out;
            display: inline-flex;
            align-items: center;
        }

        button:hover {
            background-color: #2980b9;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transform: translateY(-2px);
        }

        .fa-shopping-cart {
            margin-right: 8px;
        }

        .fas.fa-exclamation-triangle {
            color: #dfb21f;
            font-size: 5em;
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <i class="fas fa-exclamation-triangle"></i>
        <h1>
            <i class="fas fa-exclamation-circle"></i>
            Website Đang Bảo Trì

        </h1>
        <b>
            <span id="activation-message"></span>
        </b>
        <br>
        <span>Đang Trong Quá Trình Nâng Cấp</span>
        <br>
        <span>Vui lòng đợi trang giây lát...</span>
        <br>
        <br>
        <span>
            <b>
                Hãy tham gia nhóm để<br>Theo giõi hoạt động mới nhất
            </b>
        </span>
        <br>
        @if (!empty($support))
        <button onclick="window.location.href='{{ $support }}'">
            <i class="fa-solid fa-user-group"></i>
            Tham Gia Nhóm
        </button>
        @endif
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', (event) => {
            var domainName = window.location.hostname.toUpperCase();
            var activationMessage = domainName;
            document.getElementById('activation-message').innerText = activationMessage;
        }
        );
    </script>
</body>

</html>