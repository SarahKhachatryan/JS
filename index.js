function Stack () 
{
     const arr = [];
     return{
    push: function(item)
    {
       arr[arr.length-1] = item;
    },
    pop:function()
    {
        arr.length= arr.length-1;
    },
    Peek:function ()
    {
        return  arr[arr.length-1];
    },
    Length: arr.length,
   
    IsEmpty: function()
    {
        return arr.length===0;
    },
    Print: function ()
    {
        return arr.toString;
    }
}
  
}

const s = Stack();
s.push("kdjfkjf");
s.push("dkjfkf");
console.log(s.Print());