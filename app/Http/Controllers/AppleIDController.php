<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\AppleIDService;

class AppleIDController extends Controller
{
    protected $appleIDService;

    public function __construct(AppleIDService $appleIDService)
    {
        $this->appleIDService = $appleIDService;
    }

    public function index()
    {
        $data = $this->appleIDService->fetchData();

        if ($data === false) {
            return view('error')->with('message', 'Lỗi khi tải dữ liệu');
        }

        return view('appleid.index', compact('data'));
    }
}

