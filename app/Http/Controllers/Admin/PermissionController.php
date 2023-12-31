<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Savannabits\PrimevueDatatables\PrimevueDatatables;
use Illuminate\Http\JsonResponse;
class PermissionController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:permission list', ['only' => ['index', 'show']]);
        $this->middleware('can:permission create', ['only' => ['create', 'store']]);
        $this->middleware('can:permission edit', ['only' => ['edit', 'update']]);
        $this->middleware('can:permission delete', ['only' => ['destroy']]);
    }

    public function index()
    {
        return Inertia::render('Admin/Permission/Index', [
            'can' => [
                'create' => Auth::user()->can('permission create'),
                'edit' => Auth::user()->can('permission edit'),
                'delete' => Auth::user()->can('permission delete'),
            ]
        ]);
    }

    public function getPermissionData(Request $request): JsonResponse {
        $sortField = $request->sortField ?? 'id';
        $sortOrder = $request->sortOrder ?? 'desc';

        return response()->json([
            'success' => true,
            'payload' => PrimevueDatatables::of(Permission::select('id', 'name', 'status')->where('status', '!=', 'DEL')->orderBy($sortField, $sortOrder))->make()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Permission/Create');
    }

    public function store(Request $request)
    {
        $this->validateRequest($request);
        $permission = new Permission();
        $this->assignValue($request, $permission);
        if ($permission->save())
            return response()->json([
                'success' => true,
            ]);
    }

    public function show(Permission $permission)
    {
        return Inertia::render('Admin/Permission/Detail', [
            'permission' => $permission,
            'can' => [
                'edit' => Auth::user()->can('permission edit'),
            ]
        ]);
    }

    public function edit(Permission $permission, Request $request)
    {
        return Inertia::render('Admin/Permission/Edit', [
            'permission' => $permission,
            'isTriggeredFromTable' => $request->isTriggeredFromTable ?? false
        ]);
    }

    public function update(Permission $permission, Request $request)
    {
        $this->validateRequest($request);
        $this->assignValue($request, $permission);
        if ($permission->save())
            return response()->json([
                'success' => true,
            ]);
    }

    public function destroy(Permission $permission)
    {
        $permission->status = 'DEL';
        $permission->updated_by = Auth::user()->id;
        if ($permission->save())
            return response()->json([
                'success' => true,
            ]);
    }

    public function deleteMultipleRecord(Request $request)
    {
        $permissionIdList = array_column($request->permissionList, 'id');
        if (Permission::whereIn('id', $permissionIdList)->update(['status' => 'DEL', 'updated_by' => Auth::user()->id]))
            return response()->json([
                'success' => true,
            ]);
    }

    public function getPermissionList(){
        return Permission::getPermissionList();
    }

    private function validateRequest($request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'status' => 'required',
        ]);
    }

    private function assignValue($request, $permission)
    {
        $permission->name = $request->name;
        $permission->status = $request->status;
        if(isset($permission->id))
            $permission->updated_by = Auth::user()->id;
        else
            $permission->created_by = Auth::user()->id;
    }
}
