<?php

namespace App\Http\Controllers\api;

use App\Models\Service;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    /**
     * Bring/Get the list of all services
     * @return JsonResponse
     */
    public function getAllServices()
    {
        $service = Service::all();

        return response()->json([
            'data' => $service
        ]);
    }

    /**
     * Bring/Get Service's by ID.
     * @param $id
     * @return JsonResponse
     */
    public function getIDService($id)
    {
        $service = Service::findOrFail($id);
        return response()->json(['data' => $service]);
    }

    /**
     * Bring/Get Service's contracted by User.
     */
    public function getServiceByUser()
    {
        $service = Service::with(['fk_user']);
    }

    /**
     * Search results in the "Services" search engine, show results along with their errors.
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
/*     public function searchService(Request $request)
    {
        $searchService = $request->query('query');
        $result = Service::where(['service', 'like', '%' . $searchService . '%'])->get();

        return redirect(url('home'))
            ->with('error', 'El servicio/rubro que buscaste es érroneo o está mal escrito.');
    } */
}
