<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Laundromat extends Model
{
    protected $fillable = [
        'name',
        'email',
        'base_price',
        'business_hours',
        'phone',
        'address',
        'user_id'
    ];

    public function user()
    {
        return $this->hasOne('App\User');
    }

    public function orders()
    {
        return $this->hasMany('App\Order');
    }
}
