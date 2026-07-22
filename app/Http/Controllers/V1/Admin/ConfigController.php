<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ConfigSave;
use App\Jobs\SendEmailJob;
use App\Services\TelegramService;
use App\Utils\Dict;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use App\Utils\Helper;

class ConfigController extends Controller
{
    public function getEmailTemplate()
    {
        $path = resource_path('views/mail/');
        $files = array_map(function ($item) use ($path) {
            return str_replace($path, '', $item);
        }, glob($path . '*'));
        return response([
            'data' => $files
        ]);
    }

    public function getThemeTemplate()
    {
        $path = public_path('theme/');
        $files = array_map(function ($item) use ($path) {
            return str_replace($path, '', $item);
        }, glob($path . '*'));
        return response([
            'data' => $files
        ]);
    }

    public function testSendMail(Request $request)
    {
        if (!Helper::checklicense()) {
            return abort(500, 'License illegal Please contact https://t.me/Tele_Aiko to purchase copyright.');
        }
        $obj = new SendEmailJob([
            'email' => $request->user['email'],
            'subject' => 'This is aikopanel test email',
            'template_name' => 'notify',
            'template_value' => [
                'name' => config('aikopanel.app_name', 'AikoPanel'),
                'content' => 'This is aikopanel test email',
                'url' => config('aikopanel.app_url')
            ]
        ]);
        return response([
            'data' => true,
            'log' => $obj->handle()
        ]);
    }

    public function setTelegramWebhook(Request $request)
    {
        if (!Helper::checklicense()) {
            return abort(500, 'License illegal Please contact https://t.me/Tele_Aiko to purchase copyright.');
        }
        $app_url = config('aikopanel.app_url');
        if (blank($app_url))
            return abort(500, 'Vui lòng cấu hình app_url');
        $hookUrl = $app_url . '/api/v1/guest/telegram/webhook?' . http_build_query([
            'access_token' => md5(config('aikopanel.telegram_bot_token', $request->input('telegram_bot_token')))
        ]);
        $telegramService = new TelegramService($request->input('telegram_bot_token'));
        $telegramService->getMe();
        $telegramService->setWebhook($hookUrl);
        return response([
            'data' => true
        ]);
    }

    public function backupDataBase()
    {
        if (!Helper::checklicense()) {
            return abort(500, 'License illegal Please contact https://t.me/Tele_Aiko to purchase copyright.');
        }
        \Artisan::call('backup:aikopanel');
        return response([
            'data' => true
        ]);
    }

    public function fetch(Request $request)
    {
        $key = $request->input('key');
        $data = [
            'invite' => [
                'invite_force' => (int) config('aikopanel.invite_force', 0),
                'invite_commission' => config('aikopanel.invite_commission', 10),
                'invite_gen_limit' => config('aikopanel.invite_gen_limit', 5),
                'invite_never_expire' => config('aikopanel.invite_never_expire', 0),
                'commission_first_time_enable' => config('aikopanel.commission_first_time_enable', 1),
                'commission_auto_check_enable' => config('aikopanel.commission_auto_check_enable', 1),
                'commission_auto_check_min' => config('aikopanel.commission_auto_check_min', 4320),
                'commission_withdraw_limit' => config('aikopanel.commission_withdraw_limit', 100),
                'commission_withdraw_method' => config('aikopanel.commission_withdraw_method', Dict::WITHDRAW_METHOD_WHITELIST_DEFAULT),
                'withdraw_close_enable' => config('aikopanel.withdraw_close_enable', 0),
                'commission_distribution_enable' => config('aikopanel.commission_distribution_enable', 0),
                'commission_distribution_l1' => config('aikopanel.commission_distribution_l1'),
                'commission_distribution_l2' => config('aikopanel.commission_distribution_l2'),
                'commission_distribution_l3' => config('aikopanel.commission_distribution_l3')
            ],
            'site' => [
                'logo' => config('aikopanel.logo'),
                'background_url' => config('aikopanel.background_url'),
                'custom_html' => config('aikopanel.custom_html'),
                'force_https' => (int) config('aikopanel.force_https', 0),
                'stop_register' => (int) config('aikopanel.stop_register', 0),
                'app_name' => config('aikopanel.app_name', 'AikoPanel'),
                'app_description' => config('aikopanel.app_description', 'AikoPanel of AikoCute and DVSTEAM!'),
                'app_url' => config('aikopanel.app_url'),
                'sub_app_url' => config('aikopanel.sub_app_url') ?? [],
                'subscribe_url' => config('aikopanel.subscribe_url'),
                'try_out_plan_id' => (int) config('aikopanel.try_out_plan_id', 0),
                'try_out_hour' => (int) config('aikopanel.try_out_hour', 1),
                'tos_url' => config('aikopanel.tos_url'),
                'currency' => config('aikopanel.currency', 'VND'),
                'currency_symbol' => config('aikopanel.currency_symbol', '₫'),
            ],
            'ctv' => [
                'sub_domain' => config('aikopanel.sub_domain') ?? [],
                'staff_generate_user_limit' => (int) config('aikopanel.staff_generate_user_limit', 10),
                'collaborator_enable' => (int) config('aikopanel.collaborator_enable', 0),
                'cloudflare_ns_1' => config('aikopanel.cloudflare_ns_1'),
                'cloudflare_ns_2' => config('aikopanel.cloudflare_ns_2'),
                'exchange_enable' => (int) config('aikopanel.exchange_enable', 0),
            ],
            'statistics' => [
                'getorder_enable' => (int) config('aikopanel.getorder_enable', 0),
                'node_traffic_today' => (int) config('aikopanel.node_traffic_today', 1),
                'user_traffic_today' => (int) config('aikopanel.user_traffic_today', 1),
                'node_traffic_yesterday' => (int) config('aikopanel.node_traffic_yesterday', 0),
                'user_traffic_yesterday' => (int) config('aikopanel.user_traffic_yesterday', 0),
            ],
            'subscribe' => [
                'naptien_on' => (int) config('aikopanel.naptien_on', 0),
                'min_recharge_amount' => (int) config('aikopanel.min_recharge_amount', 1000),
                'max_recharge_amount' => (int) config('aikopanel.max_recharge_amount', 100000),
                'plan_change_enable' => (int) config('aikopanel.plan_change_enable', 1),
                'reset_traffic_method' => (int) config('aikopanel.reset_traffic_method', 0),
                'surplus_enable' => (int) config('aikopanel.surplus_enable', 1),
                'new_order_event_id' => (int) config('aikopanel.new_order_event_id', 0),
                'renew_order_event_id' => (int) config('aikopanel.renew_order_event_id', 0),
                'change_order_event_id' => (int) config('aikopanel.change_order_event_id', 0),
                'show_info_to_server_enable' => (int) config('aikopanel.show_info_to_server_enable', 0),
                'arrange_server_enable' => (int) config('aikopanel.arrange_server_enable', 0),
                'interval_order_time' => (int) config('aikopanel.interval_order_time', 120),
                'show_client_info_used_traffic' => (int) config('aikopanel.show_client_info_used_traffic', 0),
                'show_client_info_plan' => (int) config('aikopanel.show_client_info_plan', 0),
                'show_client_info_expire_at' => (int) config('aikopanel.show_client_info_expire_at', 0),
                'show_client_info_time_getsubscribe' => (int) config('aikopanel.show_client_info_time_getsubscribe', 0),
                'show_total_user_enable' => (int) config('aikopanel.show_total_user_enable', 0),
                'show_client_info_sni' => (int) config('aikopanel.show_client_info_sni', 0),
                'overdue_custom_message' => config('aikopanel.overdue_custom_message'),
            ],
            'staff' => [
                'name_account' => config('aikopanel.name_account'),
                'bank_id' => config('aikopanel.bank_id'),
                'number_account' => config('aikopanel.number_account'),
                'keyword_account' => config('aikopanel.keyword_account'),
                'deduct_commission_enable' => (int) config('aikopanel.deduct_commission_enable', 0),

            ],
            'frontend' => [
                'frontend_theme' => config('aikopanel.frontend_theme', 'aikopanel'),
                'frontend_theme_sidebar' => config('aikopanel.frontend_theme_sidebar', 'light'),
                'frontend_theme_header' => config('aikopanel.frontend_theme_header', 'dark'),
                'frontend_theme_color' => config('aikopanel.frontend_theme_color', 'default'),
                'frontend_background_url' => config('aikopanel.frontend_background_url'),
            ],
            'server' => [
                'server_token' => config('aikopanel.server_token'),
                'server_pull_interval' => config('aikopanel.server_pull_interval', 60),
                'server_push_interval' => config('aikopanel.server_push_interval', 60),
                'server_alive_interval' => config('aikopanel.server_alive_interval', 120),
                'device_limit_mode' => config('aikopanel.device_limit_mode', 0),
                'device_limit_grace_period' => config('aikopanel.device_limit_grace_period', 60),
            ],
            'email' => [
                'email_template' => config('aikopanel.email_template', 'default'),
                'email_host' => config('aikopanel.email_host'),
                'email_port' => config('aikopanel.email_port'),
                'email_username' => config('aikopanel.email_username'),
                'email_password' => config('aikopanel.email_password'),
                'email_encryption' => config('aikopanel.email_encryption'),
                'email_from_address' => config('aikopanel.email_from_address'),
                'email_payments_success' => config('aikopanel.email_payments_success', 0),
            ],
            'connect' => [
                'telegram_bot_enable' => config('aikopanel.telegram_bot_enable', 0),
                'telegram_bot_token' => config('aikopanel.telegram_bot_token'),
                'telegram_discuss_link' => config('aikopanel.telegram_discuss_link'),
                'zalo_discuss_link' => config('aikopanel.zalo_discuss_link'),
                'report_infomartion_daily' => config('aikopanel.report_infomartion_daily', 0),
                'report_user_traffic_today' => config('aikopanel.report_user_traffic_today', 0),
                'interval_report_user_traffic_to_admin_today' => config('aikopanel.interval_report_user_traffic_to_admin_today'),
                'id_group_admin_report_traffic_user_today' => config('aikopanel.id_group_admin_report_traffic_user_today'),
                'interval_report_user_traffic_to_user_today' => config('aikopanel.interval_report_user_traffic_to_user_today'),
                'id_group_user_report_traffic_user_today' => config('aikopanel.id_group_user_report_traffic_user_today'),
                'report_node_traffic_today' => config('aikopanel.report_node_traffic_today', 0),
                'interval_report_node_traffic_to_admin_today' => config('aikopanel.interval_report_node_traffic_to_admin_today'),
                'id_group_admin_report_traffic_node_today' => config('aikopanel.id_group_admin_report_traffic_node_today'),
                'interval_report_node_traffic_to_user_today' => config('aikopanel.interval_report_node_traffic_to_user_today'),
                'id_group_user_report_traffic_node_today' => config('aikopanel.id_group_user_report_traffic_node_today'),
                'report_node_online' => config('aikopanel.report_node_online', 0),
                'interval_report_node_online_to_admin_today' => config('aikopanel.interval_report_node_online_to_admin_today'),
                'id_group_admin_report_node_online_today' => config('aikopanel.id_group_admin_report_node_online_today'),
                'interval_report_node_online_to_user_today' => config('aikopanel.interval_report_node_online_to_user_today'),
                'id_group_user_report_node_online_today' => config('aikopanel.id_group_user_report_node_online_today'),
                'interval_check_server' => config('aikopanel.interval_check_server'),
                'check_node_online_admin' => config('aikopanel.check_node_online_admin', 0),
                'auto_stop_node' => config('aikopanel.auto_stop_node', 0),
            ],
            'app' => [
                // custom app
                'app_personalized_enable' => config('aikopanel.app_personalized_enable', 0),
                // windows
                'windows_name' => config('aikopanel.windows_name'),
                'windows_version' => config('aikopanel.windows_version'),
                'windows_logo_url' => config('aikopanel.windows_logo_url'),
                'windows_download_url' => config('aikopanel.windows_download_url'),
                // macos
                'macos_name' => config('aikopanel.macos_name'),
                'macos_version' => config('aikopanel.macos_version'),
                'macos_logo_url' => config('aikopanel.macos_logo_url'),
                'macos_download_url' => config('aikopanel.macos_download_url'),

                // ios
                'ios_name' => config('aikopanel.ios_name'),
                'ios_version' => config('aikopanel.ios_version'),
                'ios_logo_url' => config('aikopanel.ios_logo_url'),
                'ios_download_url' => config('aikopanel.ios_download_url'),

                // android
                'android_name' => config('aikopanel.android_name'),
                'android_version' => config('aikopanel.android_version'),
                'android_logo_url' => config('aikopanel.android_logo_url'),
                'android_download_url' => config('aikopanel.android_download_url'),

                // default app

                // windows
                'app_windows_enable' => config('aikopanel.app_windows_enable', 1),
                'app_windows_cfa' => config('aikopanel.app_windows_cfa', 1),
                'app_windows_nekoray' => config('aikopanel.app_windows_nekoray', 1),
                'app_windows_netch' => config('aikopanel.app_windows_netch', 1),
                'app_windows_v2rayn' => config('aikopanel.app_windows_v2rayn', 1),
                'app_windows_karing' => config('aikopanel.app_windows_karing', 1),
                // macos
                'app_macos_enable' => config('aikopanel.app_macos_enable', 1),
                'app_macos_sb' => config('aikopanel.app_macos_sb', 1),
                'app_macos_clashx' => config('aikopanel.app_macos_clashx', 1),
                'app_macos_cfw' => config('aikopanel.app_macos_cfw', 1),
                'app_macos_shadowrocket' => config('aikopanel.app_macos_shadowrocket', 1),
                'app_macos_qx' => config('aikopanel.app_macos_qx', 1),
                'app_macos_karing' => config('aikopanel.app_macos_karing', 1),
                // ios
                'app_ios_enable' => config('aikopanel.app_ios_enable', 1),
                'app_ios_sb' => config('aikopanel.app_ios_sb', 1),
                'app_ios_shadowrocket' => config('aikopanel.app_ios_shadowrocket', 1),
                'app_ios_qx' => config('aikopanel.app_ios_qx', 1),
                'app_ios_surge' => config('aikopanel.app_ios_surge', 1),
                'app_ios_stash' => config('aikopanel.app_ios_stash', 1),
                'app_ios_streisand' => config('aikopanel.app_ios_streisand', 1),
                'app_ios_karing' => config('aikopanel.app_ios_karing', 1),
                // android
                'app_android_enable' => config('aikopanel.app_android_enable', 1),
                'app_android_sb' => config('aikopanel.app_android_sb', 1),
                'app_android_cfa' => config('aikopanel.app_android_cfa', 1),
                'app_android_nekobox' => config('aikopanel.app_android_nekobox', 1),
                'app_android_meta' => config('aikopanel.app_android_meta', 1),
                'app_android_surfboard' => config('aikopanel.app_android_surfboard', 1),
                'app_android_v2rayng' => config('aikopanel.app_android_v2rayng', 1),
                // 'app_android_karing' => config('aikopanel.app_android_karing', 1), // support in future
            ],
            'safe' => [
                'email_verify' => (int) config('aikopanel.email_verify', 0),
                'safe_mode_enable' => (int) config('aikopanel.safe_mode_enable', 0),
                'secure_path' => config('aikopanel.secure_path', config('aikopanel.frontend_admin_path', 'aikopanel')),
                'staff_path' => config('aikopanel.staff_path', config('aikopanel.frontend_staff_path', 'staffaikopanel')),
                'email_whitelist_enable' => (int) config('aikopanel.email_whitelist_enable', 0),
                'email_whitelist_suffix' => config('aikopanel.email_whitelist_suffix', Dict::EMAIL_WHITELIST_SUFFIX_DEFAULT),
                'email_gmail_limit_enable' => config('aikopanel.email_gmail_limit_enable', 0),
                'recaptcha_enable' => (int) config('aikopanel.recaptcha_enable', 0),
                'recaptcha_key' => config('aikopanel.recaptcha_key'),
                'recaptcha_site_key' => config('aikopanel.recaptcha_site_key'),
                'register_limit_by_ip_enable' => (int) config('aikopanel.register_limit_by_ip_enable', 0),
                'register_limit_count' => config('aikopanel.register_limit_count', 3),
                'register_limit_expire' => config('aikopanel.register_limit_expire', 60),
                'password_limit_enable' => (int) config('aikopanel.password_limit_enable', 1),
                'password_limit_count' => config('aikopanel.password_limit_count', 5),
                'password_limit_expire' => config('aikopanel.password_limit_expire', 60),
                'ip_prioritylist' => config('aikopanel.ip_prioritylist'),
                'ip_blocklist' => config('aikopanel.ip_blocklist'),
                'ua_blocklist' => config('aikopanel.ua_blocklist'),
                'country_allowlist' => config('aikopanel.country_allowlist'),
            ],
            'advanced' => [
                'advanced_singbox_config' => config('aikopanel.advanced_singbox_config'),
            ],
            'aikopanel' => [
                'license' => config('aikopanel.license'),
                'maintenance_mode_enable' => config('aikopanel.maintenance_mode_enable', 0),
                'session_ttl' => config('aikopanel.session_ttl'),
                'admin_session_ttl' => config('aikopanel.admin_session_ttl', 0),
                'interval_clear_user' => config('aikopanel.interval_clear_user', 0),
                'interval_backup_database' => config('aikopanel.interval_backup_database'),
                'database_telegram_id' => config('aikopanel.database_telegram_id'),
                'cloudflare_email' => config('aikopanel.cloudflare_email'),
                'cloudflare_api_key' => config('aikopanel.cloudflare_api_key'),
                'cloudflare_zone_id' => config('aikopanel.cloudflare_zone_id'),
                'appleid_custom_url' => config('aikopanel.appleid_custom_url'),
                'appleid_api' => config('aikopanel.appleid_api'),
                'appleid_quanx' => config('aikopanel.appleid_quanx'),
            ]
        ];
        if ($key && isset($data[$key])) {
            return response([
                'data' => [
                    $key => $data[$key]
                ]
            ]);
        }
        ;

        return response([
            'data' => $data
        ]);
    }

    public function save(ConfigSave $request)
    {
        $data = $request->validated();
        $config = config('aikopanel');
        foreach (ConfigSave::RULES as $k => $v) {
            if (!in_array($k, array_keys(ConfigSave::RULES))) {
                unset($config[$k]);
                continue;
            }
            // Check if both secure_path and staff_path are provided and equal
            if ($k === 'secure_path' && isset($data['staff_path']) && isset($data['secure_path']) && $data['secure_path'] === $data['staff_path']) {
                abort(500, 'Đường dẫn Admin không được trùng với đường dẫn nhân viên');
            }
            if (array_key_exists($k, $data)) {
                $config[$k] = $data[$k];
            }
        }
        $data = var_export($config, 1);
        if (!File::put(base_path() . '/config/aikopanel.php', "<?php\n return $data ;")) {
            abort(500, 'Không chỉnh sửa');
        }
        if (function_exists('opcache_reset')) {
            // Attempt to reset the opcode cache
            if (opcache_reset() === false) {
                abort(500, 'Bộ nhớ cache rõ ràng, vui lòng gỡ cài đặt hoặc kiểm tra trạng thái cấu hình opcache');
            }
        }
        Artisan::call('config:cache');
        return response([
            'data' => true
        ]);
    }
}