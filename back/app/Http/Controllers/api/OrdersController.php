<?php

namespace App\Http\Controllers\api;

use Auth;
use Session;
use App\Models\Order;
use App\Models\OrderState;
use App\Models\Service;
use App\Models\Users;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;


class OrdersController extends Controller
{
    use Notifiable;


    /**
     * Return Orders By User (who is logged in).
     * @param $id
     * @return JsonResponse
     */
    public function OrdersByUser($id)
    {
        $ordersByUser = DB::table('orders')
            ->select('orders.id_order', 'houser.orders.fk_houser', 'houser.user.name', 'services.title', 'orders_states.state', 'orders.created_at')
            ->join('houser.user', 'orders.fk_houser', '=', 'houser.user.id_user')
            ->join('houser.services', 'orders.fk_service', '=', 'services.id_service')
            ->join('houser.orders_states', 'orders.fk_order_state', '=', 'orders_states.id_order_state')
            ->where('orders.fk_user', '=', $id)
            ->orderBy('orders.created_at', 'ASC')->get();

        return response()->json(['data' => $ordersByUser]);
    }


    /**
     * Mock-up response from Houser to User.
     * @param $fk_user
     * @param $fk_houser
     * @param $orderID
     */
    protected function houserMsg($fk_user, $fk_houser, $orderID)
    {
        $getUserName = DB::table('user')
            ->select('name')
            ->where('id_user', '=', $fk_user)->get();

        $getHouserName = DB::table('user')
            ->select('name')
            ->where('id_user', '=', $fk_houser)->get();

        $notifyMsg= "Hola " . $getUserName . ", mi nombre es: " . $getHouserName . ". Voy a estar contactándome con vos por email o whatsapp brevemente para coordinar la visita";

        DB::table('orders')
            ->where('id_order', $orderID)
            ->update(['houser_message' => $notifyMsg]);
    }

    /**
     * Generates Work Order and saves it in Database. Issues notification to the User.
     * @param Request $request
     * @return JsonResponse
     */
    public function requestOrder(Request $request)
    {
        $data = $request->all();
        $requestOrder = Order::create($data);

        $queryNameHouser = DB::table('user')
            ->select('name')
            ->where('id_user', '=', $request->get('fk_houser'))->get();

        $nameHouser = $queryNameHouser[0]->name;


        $lastInsert = Order::all()->last();
//        dd($lastInsert);

        $this->houserMsg($data['fk_user'], $data['fk_houser'], $lastInsert->id);

        return response()->json([
            'success' => true,
            'data' => $requestOrder,
            'messageBody' => "Ya contactaste al Houser",
            'messageTitle' => $nameHouser . " se pondrá en contacto con vos"
        ]);
    }



    /**
     * Generates Work Order and saves it in Database. Issues notification to the User.
     * @param Request $request
     * @return JsonResponse
     */
    public function saveOrder(Request $request)
    {
        $order = new Order;
        $order = $request->all();
        $fk_user = Auth::id();
//        $order->$fk_user;
//        return response()->json([$fk_user]);

        $requestOrder = Order::create($order);

        $queryNameHouser = DB::table('user')
            ->select('name')
            ->where('id_user', '=', $request->get('fk_houser'))->get();

        $nameHouser = $queryNameHouser[0]->name;

        $lastInsert = Order::all()->last();

        $this->houserMsg($order['fk_user'], $order['fk_houser'], $lastInsert[0]->id);

        return response()->json([
            'success' => true,
            'data' => $requestOrder,
            'messageBody' => "Ya contactaste al Houser",
            'messageTitle' => $nameHouser . " se pondrá en contacto con vos"
        ]);
    }

    /**
     * Updates Orders Status
     * @param $id_order
     * @param $status
     * @return JsonResponse
     */
    public function updateStatus($id_order, $status)
    {
        DB::table('orders')
            ->where('id_order', $id_order)
            ->update(['fk_order_state' => $status]);

        return response()->json([
           'success' => true,
           'message' => "Se modificó el Estado de la Orden de Solicitud"
        ]);
    }

    /**
     * Updates Read Date of the Order (Message)
     * @param $id_order
     * @return JsonResponse
     */
    public function updateReadMsg($id_order)
    {
        DB::table('orders')
            ->where('id_order', $id_order)
            ->update(['read_at' => now()]);

        return response()->json([
            'success' => true,
            'message' => "Mensaje Leído"
        ]);
    }

}
