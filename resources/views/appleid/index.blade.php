<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Apple ID List</title>
    <!-- CSS Styles -->
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .header {
            background-color: #007bff;
            color: white;
            text-align: center;
            padding: 10px 0;
        }

        .results-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
        }

        .result-card {
            margin: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: white;
            padding: 15px;
            width: 300px;
        }

        .result-card div {
            margin-bottom: 10px;
        }

        .status-value {
            font-weight: bold;
        }
    </style>

</head>
<body>
    <div class="header">
        <h1>Danh sách Apple ID Của AikoPanel</h1>
    </div>

    <div class="results-container">
        @foreach ($data as $item)
            <div class="result-card">
                <div>Email: <span>{{ $item['email'] }}</span>
                    <button onclick="copyToClipboard('{{ $item['email'] }}')">Copy</button>
                </div>
                <div>Password: <span>{{ $item['password'] }}</span>
                    <button onclick="copyToClipboard('{{ $item['password'] }}')">Copy</button>
                </div>
                <div>Status: <span class="status-value" style="color: {{ $item['statusColor'] }}">{{ $item['status'] }}</span></div>
            </div>
        @endforeach
    </div>

    <!-- JavaScript -->
    <script>
        function copyToClipboard(text) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);

            alert('Đã sao chép: ' + text);
        }
    </script>

</body>
</html>
