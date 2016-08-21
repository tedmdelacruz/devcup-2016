<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'status',
        'weight',
        'cost',
        'notes',
        'includes_dry_clean',
        'request_pressing',
        'laundromat_id',
        'user_id',
    ];
    public function laundromat()
    {
        return $this->belongsTo('App\Laundromat');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
