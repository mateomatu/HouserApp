<?php

namespace App\Http\Controllers\api;

use App\Models\ServiceHouser;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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

    /**
     * Bring Services By Houser requested.
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function showServiceByHouser(Request $request)
    {
        $searchServiceByHouser = $request->query('query');
        $result = ServiceHouser::where(['id_service_houser'])->get();

        $result = ServiceHoser::where(['id_service_houser'])
            -> join(Auth::Users()->id_user)->with(['id_user'])
            ->get();

        return redirect(url('home'))
            ->with('error', 'Los datos a los que intentas acceder son erroneos.');
    }

}
