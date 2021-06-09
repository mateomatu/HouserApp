<?php

namespace App\Http\Controllers\api;

use App\Models\ServiceHouser;
use App\Models\Users;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ServicesHousersController extends Controller
{
    /**
     * Bring/Get the list of all Services by Houser
     * @return JsonResponse
     */
    public function getServicesByHouser()
    {
        $serviceHouser = ServiceHouser::all();

        return response()->json([
            'data' => $serviceHouser
        ]);
    }

    public function getServicesHousersByID($id)
    {
        $serviceHouserByID = ServiceHouser::findOrFail($id);

        return response()->json(['data' => $serviceHouserByID]);
    }

    /**
     * Bring Services By Houser requested.
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function showServiceByHouser(Request $request)
    {
        $searchServiceByHouser = $request->query('query');

        $result = ServiceHouser::join('user', 'services_housers.id_service_houser', '=', 'user.id_user')
            ->get();


        return response()->json([
            'data' => $result
        ]);
    }

}
