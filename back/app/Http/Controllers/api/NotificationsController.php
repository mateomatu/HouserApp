<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Models\Users;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\DB;

class NotificationsController extends Notification //implements ShouldQueue
{
    /**
     * @param Request $request
     */
    public function notifications(Request $request)
    {
//        $notifications = $request->user()->unreadNotifications;
        $notifications = Users::get('name');

        return response()->json([
            'data' => $notifications,
            'message' => 'Tu Houser se pondrá en contacto con vos.'
        ]);
    }

    /**
     * Mark Notifications as Read.
     * @param Request $request
     */
    public function markAsRead(Request $request)
    {
        $notification = $request->user()
            ->notifications()
            ->where('id', $request->id)
            ->first();

        if($notification)
            $notification->markAsRead();
    }

    /**
     * Mark all Notifications as Read.
     * @param Request $request
     */
    public function markAllAsRead(Request $request)
    {
        $request->user()->unreadNotifications->markAsRead();
    }


}
