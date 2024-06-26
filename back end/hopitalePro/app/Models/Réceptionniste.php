<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;


class Réceptionniste extends Model
{
    use HasFactory,HasApiTokens,Notifiable;
    protected $fillable=[
     'nom','prenom','telephone','password','role','email'
    ];
}
