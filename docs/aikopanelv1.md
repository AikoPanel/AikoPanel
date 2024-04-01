## Hướng dẫn Di chuyển phiên bản AikoPanelv1

### Kịch bản di chuyển sẽ thực hiện các thay đổi sau đây đối với cơ sở dữ liệu của bạn
- Nhiều quá không liệt kê hết được

## Môi trường aapanel
1. Xóa sạch cơ sở dữ liệu
```
php artisan db:wipe
```
2. Nhập cơ sở dữ liệu cũ <span style="color:red">(Quan trọng)</span>
>Nhập cơ sở dữ liệu của AikoPanelv1 vào dự án hiện tại của Aiko

3. Thực hiện lệnh di chuyển
```
php artisan migratetoaikopanel aikopanelv1
```

4. Thay đổi file cấu hình (v2board.php)
> Bạn cần đổi file `config/v2board.php` thành `config/aikopanel.php` là đổi tên file v2board.php sang aikopanel.php và vào trong admin user nhập key là done