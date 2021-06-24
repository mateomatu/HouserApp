<?php

namespace App\Http\Controllers\api;

use Auth;
use App\Models\Order;
use App\Models\OrderState;
use App\Models\Service;
use App\Models\Users;
use App\Notifications\ContactHouser;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Notifications\Notifiable;


class OrdersController extends Controller
{
    use Notifiable;
    /**
     * Bring/Get the list of all Orders
     * @return JsonResponse
     */
    public function getAllOrders()
    {
//        $orders = Order::with(['users'])->get();
        $orders = Order::all();

        return response()->json([
            'data' => $orders
        ]);
    }

    /**
     * Show Pending Orders at Home
     */
    public function showPendingOrder()
    {
        $pendingOrder = DB::table('orders')
            ->select('*')
            ->where('fk_order_state', '=', 1)->get();

        return response()->json([
            'data' => $pendingOrder
        ]);
    }

    /**
     * Show Completed Order at Home
     */
    public function showCompletedOrder()
    {
        $pendingOrder = DB::table('orders')
            ->select('*')
            ->where('fk_order_state', '=', 3)->get();
        return response()->json([
            'data' => $pendingOrder
        ]);
//        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function requestOrder(Request $request)
    {
        $data = $request->all();
        $requestOrder = Order::create($data);
        $requestOrder->notify(New ContactHouser($requestOrder));
        // SI COMENTO LINEA DE NOTIFICACIÓN GUARDA EN DB, PERO NO EMITE LA NOTIFICACIÓN.

        return response()->json([
            'success' => true,
            'data' => $requestOrder
        ]);
    }

}
