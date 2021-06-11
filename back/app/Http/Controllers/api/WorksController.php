<?php

namespace App\Http\Controllers\api;

use App\Models\Work;
use App\Models\Service;
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
    }

    /**
     * Work request, from User to Houser
     */
    public function requestWork(Request $request)
    {
//        $service = Service::findOrFail($id);

        $data = $request->all();

        $requestWork = Work::create($data);

        return response()->json([
            'success' => true,
            'data' => $requestWork
        ]);
    }

}
