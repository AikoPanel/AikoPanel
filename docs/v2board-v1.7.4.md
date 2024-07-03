## Hướng dẫn Di chuyển phiên bản V2borad 1.7.4

### Kịch bản di chuyển sẽ thực hiện các thay đổi sau đây đối với cơ sở dữ liệu của bạn
- Thêm bảng dữ liệu v2_server_vless

## Môi trường aapanel
1. Xóa sạch cơ sở dữ liệu
```
php artisan db:wipe
```
2. Nhập cơ sở dữ liệu cũ <span style="color:red">(Quan trọng)</span>
>Nhập cơ sở dữ liệu của V2board 1.7.4 vào dự án hiện tại của Aiko

3. Thực hiện lệnh di chuyển
```
php artisan migratetoaikopanel v2b1.7.4
```

4. Thay đổi file cấu hình (v2board.php)
> Bạn cần đổi file `config/v2board.php` thành `config/aikopanel.php` là đổi tên file v2board.php sang aikopanel.php và vào trong admin user nhập key là done