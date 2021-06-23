<?php

namespace App\Http\Controllers\api;

use App\Models\Order;
use App\Models\OrderState;
use App\Models\Service;
use App\Models\Users;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    /**
     * Bring/Get the list of all Works
     * @return JsonResponse
     */
    public function getAllOrders()
    {
        $orders = Order::all();

        return response()->json([
            'data' => $orders
        ]);
    }

    /**
     * Show Pending Work at Home
     */
    public function showPendingOrder()
    {
        if(Session::has('orders')) {
            $pendingOrder = Session::get('orders');

            return response()->json([
                'data' => $pendingOrder
            ]);

        }
    }

    /**
     * Work request, from User to Houser
     */
    public function requestWork(Request $request)
    {
//        $service = Service::findOrFail($id);

        $data = $request->all();

        $requestOrder = Work::create($data);

        return response()->json([
            'success' => true,
            'data' => $requestOrder
        ]);
    }
}
