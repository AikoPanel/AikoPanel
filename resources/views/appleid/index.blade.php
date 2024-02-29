{{-- resources/views/appleid/index.blade.php --}}

@extends('layouts.app')

@section('content')
<div class="container">
    <div class="header text-center mb-4">
        <h2>Danh sách tài khoản iCloud không mã 2FA</h2>
        {{-- Thêm các hướng dẫn khác --}}
    </div>

    <div id="notification" class="notification"></div>

    <div class="results-container d-flex flex-wrap justify-content-center">
        @foreach ($data as $i => $account)
            <div class="card m-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ $account['email'] }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Password: {{ $account['password'] }}</h6>
                    <p class="card-text">Status: <span style="color: {{ $account['statusColor'] }}">{{ $account['status'] }}</span></p>
                    <button onclick="copyToClipboard('{{ $account['email'] }}')">Copy Email</button>
                    <button onclick="copyToClipboard('{{ $account['password'] }}')">Copy Password</button>
                </div>
            </div>
        @endforeach
    </div>
</div>

@endsection

@push('styles')
<style>
    .container {
        padding: 20px;
    }

    .header {
        text-align: center;
        margin-bottom: 20px;
    }

    .card {
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 15px;
        margin-bottom: 20px;
        width: 100%;
    }

    .card-title {
        font-size: 1.2em;
        color: #333;
    }

    .card-subtitle {
        font-size: 1em;
        color: #666;
    }

    .card-body {
        padding: 10px;
    }

    .notification {
        display: none;
        color: white;
        background-color: green;
        padding: 10px;
        text-align: center;
    }

    .status-red {
        color: red;
    }

    .status-green {
        color: green;
    }
</style>
@endpush

@push('scripts')
<script>
    function copyToClipboard(value) {
        var textarea = document.createElement('textarea');
        textarea.value = value;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        showNotification('Copied to Clipboard!');
    }

    function showNotification(message) {
        var notification = document.getElementById('notification');
        notification.innerText = message;
        notification.style.display = 'block';

        setTimeout(function() {
            notification.style.display = 'none';
        }, 3000);
    }
</script>
@endpush
