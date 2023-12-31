<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Savannabits\PrimevueDatatables\PrimevueDatatables;
use Illuminate\Http\JsonResponse;
use App\Models\Category;
use Illuminate\Support\Facades\File;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:post list', ['only' => ['index', 'show']]);
        $this->middleware('can:post create', ['only' => ['create', 'store']]);
        $this->middleware('can:post edit', ['only' => ['edit', 'update']]);
        $this->middleware('can:post delete', ['only' => ['destroy']]);
    }

    public function index()
    {
        return Inertia::render('Admin/Post/Index', [
            'can' => [
                'create' => Auth::user()->can('post create'),
                'edit' => Auth::user()->can('post edit'),
                'delete' => Auth::user()->can('post delete'),
            ]
        ]);
    }

    public function getPostData(Request $request): JsonResponse {
        $sortField = $request->sortField ?? 'id';
        $sortOrder = $request->sortOrder ?? 'desc';

        return response()->json([
            'success' => true,
            'payload' => PrimevueDatatables::of(Post::with('category')->select('id', 'title', 'status', 'category_id', 'sequence')->where('status', '!=', 'DEL')->orderBy($sortField, $sortOrder))->make()
        ]);
    }
    public function create()
    {
        return Inertia::render('Admin/Post/Create');
    }

    public function store(Request $request)
    {
        $this->validateRequest($request);
        $post = new Post();
        $this->assignValue($request, $post);
        if ($post->save()){
            if(Post::assignPostMentors($post->id, $request->mentors))
                return response()->json([
                    'success' => true,
                ]);
        }
    }

    public function show(Post $post)
    {
        $post->category = Category::getCategoryName($post->category_id);
        $post->mentors = Post::getPostMentors($post->id);
        $post->image = $post->image ? asset($post->image) : null;
        return Inertia::render('Admin/Post/Detail', [
            'post' => $post,
            'can' => [
                'edit' => Auth::user()->can('post edit')
            ]
        ]);
    }

    public function edit(Post $post, Request $request)
    {
        $post->image = $post->image ? asset($post->image) : null;
        $post->mentors = Post::getPostMentorIdList($post->id);
        return Inertia::render('Admin/Post/Edit', [
            'post' => $post,
            'isTriggeredFromTable' => $request->isTriggeredFromTable ?? false
        ]);
    }

    public function update(Post $post, Request $request)
    {
        $this->validateRequest($request);
        $this->assignValue($request, $post);
        if ($post->save() && Post::assignPostMentors($post->id, $request->mentors))
            return response()->json([
                'success' => true,
            ]); 
            
    }

    public function destroy(Post $post)
    {
        $post->status = 'DEL';
        $post->updated_by = Auth::user()->id;
        if ($post->save())
            return response()->json([
                'success' => true,
            ]);
    }

    public function deleteMultipleRecord(Request $request)
    {
        $postIdList = array_column($request->postList, 'id');
        if (Post::whereIn('id', $postIdList)->update(['status' => 'DEL', 'updated_by' => Auth::user()->id]))
            return response()->json([
                'success' => true,
            ]);
    }

    private function validateRequest($request)
    {
        $request->validate([
            'title' => ['required','string','max:255'],
            'description' => ['required','string'],
            'status' => 'required',
            'category_id' => 'required',
            'image' => 'max:2048',
            // 'sequence' => ['numeric','integer','min:1'],
        ]);
    }

    private function assignValue($request, $post)
    {
        $post->title = $request->title;
        $post->description = $request->description;
        $post->status = $request->status;
        $post->category_id = $request->category_id;
        $post->author = $request->author;
        $post->sequence = $request->sequence ?? $request->sequence;
        if(isset($post->id))
            $post->updated_by = Auth::user()->id;
        else
            $post->created_by = Auth::user()->id;
        if ($request->hasFile('image')) {
            if(isset($post->id) && isset($post->image)){
                if (File::exists(public_path($post->image))) {
                    // Delete the file
                    File::delete(public_path($post->image));
                }
            }
            $image = $request->file('image');
            $imageName = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
            $post->image = 'images/'.$imageName;
        } 

        if(!isset($request->image) && isset($post->image)){
            
            if (File::exists(public_path($post->image))) {
                // Delete the file
                File::delete(public_path($post->image));
            }
            $post->image = null;
        }
    }

    public function getOpportunityListAsObject(){
        $category_id = Category::where('code', 'OPPORTUNITIES_ITEM')->value('id');
        return Post::getOpportunityListAsObject($category_id);
    }
}
