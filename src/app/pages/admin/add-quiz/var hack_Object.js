var hack_Object={
    hack_property="hackerearth",
    hack_method:function(h1,h2){
        console.log(h1+this.hack_property+h2);
    }
};
hack_Object.hack_method('<','>');

var hack_Object2={
    hack_property :'Hack'
};
hack_Object.hack_method.call(hack_Object2,'<','>');
hack_Object.hack_method.apply(hack_Object2,['<','>']);