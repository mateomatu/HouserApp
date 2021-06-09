<?php

namespace App\Http\Controllers\api;

use App\Models\Models\Cart;
use App\Models\Models\Producto;
use App\Models\Work;
use App\Models\Users;
use App\Models\Service;
use App\Models\ServiceHouser;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class WorksController extends Controller
{
    /**
     * Bring/Get the list of all Works
     * @return JsonResponse
     */
    public function getAllWorks()
    {
        $works = Work::all();

        return response()->json([
            'data' => $works
        ]);
    }

    /**
     * Show Pending Work at Home
     */
    public function showPendingWork()
    {
        if(Session::has('work')) {
            $pendingWork = Session::get('work');

            return response()->json([
                'data' => $pendingWork
            ]);

        }
       // return view('cart.index', ['legos' => []]);
    }

    /**
     * Work request, from User to Houser
     */
    public function requestWork(Request $request, $id)
    {
        $service = Service::findOrFail($id);
        $price = Service::get($price);
        $pendingWork = Session::has('work') ? Session::get('work') : new Work();

        $request->session()->put('work', $pendingWork);
    }

}
