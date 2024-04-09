<?php
echo <<<HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <title>AikoPanel</title>
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
            background-color: #3498db;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
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
    <div class="container"><i class="fas fa-exclamation-triangle"></i>
        <h1><i class="fas fa-exclamation-circle"></i> Website Chưa Được Kích Hoạt</h1>
        <p>Vui Lòng Liên Hệ © <a href="https://t.me/AikoPanel" target="_blank">Dev Aikocute</a></p>

        <p id="activation-message">Để Kích Hoạt Key</p>
        <button onclick="window.location='https://t.me/AikoPanel';">
            <i class="fas fa-shopping-cart"></i> Mua Key Ủy Quyền
        </button>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', (event) => {
            var domainName = window.location.hostname.toUpperCase();
            var activationMessage = "Để Kích Hoạt Key Cho " + domainName;
            document.getElementById('activation-message').innerText = activationMessage;
        });
    </script>
</body>

</html>
HTML;
?>