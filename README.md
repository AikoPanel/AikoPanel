# AikoPanel Version 3

## Nhánh này hỗ trợ các backend sau

- [AikoServer](https://github.com/AikoPanel/AikoServer)
- [Aiko-Server](https://github.com/Github-Aiko/Aiko-Server)

**Lưu Ý** : Nhánh này chỉ hỗ trợ mỗi AikoServer Backend

# **AikoPanel**

- PHP ^7.4 + Loader Ioncube
- Composer
- MariaDB ^10.4 or Mysql ^8
- Redis ^7
- Laravel

## Demo
[Demo](https://aikopanel.com)

## Tài liệu
[Click](https://docs.aikopanel.com)

## Cộng đồng
🔔Kênh Telegram: [@aikopanel](https://t.me/aikopanel)

## Cách Phản hồi
Làm theo mẫu trong vấn đề để gửi câu hỏi của bạn một cách chính xác, và chúng tôi sẽ có người theo dõi với bạn.



# Các bước di chuyển ban đầu

Để chuyển các tệp bảng điều khiển, hãy làm theo các bước sau:

1. Đặt lại URL từ xa của git:
   ```
   git remote set-url origin https://github.com/AikoPanel/AikoPanel
   ```
2. Chuyển đến nhánh master:
   ```
   git checkout master
   ```
3. Chạy script cập nhật:
   ```
   ./update.sh
   ```

Sau đó, làm theo các bước dưới đây để làm mới bộ nhớ cache cài đặt và khởi động lại hàng đợi:

1. Xóa bộ nhớ cache cấu hình:
   ```
   php artisan config:clear
   ```
2. Lưu trữ bộ nhớ cache cấu hình:
   ```
   php artisan config:cache
   ```
3. Kết thúc Horizon:
   ```
   php artisan horizon:terminate
   ```

## Giấy phép
- [Telegram](https://t.me/aikopanel)

**Lưu ý:** AikoPanel không phải là phần mềm miễn phí. Nếu bạn muốn mua giấy phép, vui lòng liên hệ với chúng tôi qua telegram. Hiện tại, trang quản trị chỉ hỗ trợ tiếng Việt.