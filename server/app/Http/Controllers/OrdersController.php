<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Log;
use App\Order;
use App\Http\Requests;

class OrdersController extends Controller
{
    public function get() {
        return Order::with('Laundromat')->get();
    }

    public function create(Request $request) {
        $order = new Order([
            'status' => 0,
            'weight' => 0,
            'cost' => 0,
            'notes' => $request->notes,
            'includes_dry_clean' => $request->includes_dry_clean,
            'request_pressing' => $request->request_pressing,
            'laundromat_id' => $request->laundromat_id,
            'user_id' => $request->user_id
        ]);

        $order->save();

        return ['result' => 'success'];
    }
}
