<?php
namespace zebra\platform;
use zebra\event\EventEmitter;

class A extends EventEmitter{
     
    
    
    public  function aa(){
          $b = new B();
          $this->emit('text',$b);
          
          echo '<br/>=====END====<br/>';
          echo $b->name;

    }
}



class B {
    public $name ="bb";
    
}