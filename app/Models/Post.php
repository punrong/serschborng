<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PostHasMentors;
use App\Models\Mentor;

class Post extends Model
{
    use HasFactory;

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public static function getPostMentorIdList($postId){
        return PostHasMentors::where('post_id', $postId)->pluck('mentor_id');
    }

    public static function getPostMentors($postId){
        $permissionIdList = Post::getPostMentorIdList($postId);
        $permissionNameList = Mentor::whereIn('id', $permissionIdList)->where('status', 'ACT')->pluck('name')->toArray();
        if($permissionNameList)
            return implode(', ', $permissionNameList);
        return;
    }

    public static function assignPostMentors($postId, $mentorIdList = null){
        $existingPostMentor = PostHasMentors::where('post_id', $postId);
        if(count($existingPostMentor->get()) > 0)
            $existingPostMentor->delete();
        $postMentorRecords = [];
        if(isset($mentorIdList)){
            foreach($mentorIdList as $mentorId)
                $postMentorRecords[] = [
                    'mentor_id' => $mentorId,
                    'post_id' => $postId
                ];
            if(PostHasMentors::insert($postMentorRecords));
                return true;
            return false;
        }
        else
            return true;
    }
}
