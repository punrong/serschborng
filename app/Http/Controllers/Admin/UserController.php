<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Savannabits\PrimevueDatatables\PrimevueDatatables;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:user list', ['only' => ['index', 'show']]);
        $this->middleware('can:user create', ['only' => ['create', 'store']]);
        $this->middleware('can:user edit', ['only' => ['edit', 'update']]);
        $this->middleware('can:user delete', ['only' => ['destroy']]);
    }
    public function index()
    {
        return Inertia::render('Admin/User/Index', [
            'can' => [
                'create' => Auth::user()->can('user create'),
                'edit' => Auth::user()->can('user edit'),
                'delete' => Auth::user()->can('user delete'),
            ]
        ]);
    }

    public function getUserData(): JsonResponse {
        return response()->json([
            'success' => true,
            'payload' => PrimevueDatatables::of(User::select('id', 'name', 'email', 'status')->where('status', '!=', 'DEL')->orderBy('id', 'desc'))->make()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/User/Create');
    }

    public function store(Request $request)
    {
        $this->validateRequest($request);
        $user = new User();
        $this->assignValue($request, $user);
        if ($user->save())
            return response()->json([
                'success' => true,
            ]);
    }

    public function show(User $user)
    {
        return Inertia::render('Admin/User/Detail', [
            'user' => $user,
        ]);
    }

    public function edit(User $user, Request $request)
    {
        return Inertia::render('Admin/User/Edit', [
            'user' => $user,
            'isTriggeredFromTable' => $request->isTriggeredFromTable ?? false
        ]);
    }

    public function update(User $user, Request $request)
    {
        $this->validateRequest($request);
        $this->assignValue($request, $user);
        if ($user->save())
            return response()->json([
                'success' => true,
            ]);
    }

    public function destroy(User $user)
    {
        $user->status = 'DEL';
        if ($user->save())
            return response()->json([
                'success' => true,
            ]);
    }

    public function deleteMultipleRecord(Request $request)
    {
        $userIdList = array_column($request->userList, 'id');
        if (User::whereIn('id', $userIdList)->update(['status' => 'DEL']))
            return response()->json([
                'success' => true,
            ]);
    }

    private function validateRequest($request)
    {
        if($request->password)
            $request->validate([
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
                'status' => 'required',
            ]);
        else
            $request->validate([
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255'],
                'status' => 'required',
            ]);
    }

    private function assignValue($request, $user)
    {
        $user->name = $request->name;
        $user->email = $request->email;
        if($request->password)
            $user->password = Hash::make($request->password);
        $user->status = $request->status;
    }
}