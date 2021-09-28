var sum = 0
var counter = 0
function Add(x)
{

  sum = sum + x;

  counter = counter + 1;
print();

}
function print()
{

document.getElementById('output').innerHTML = "Sum:" + sum;
document.getElementById('counters').innerHTML = "Counter:" + counter;
}
function ClearIt()
{
     sum = 0;
     counter = 0;
     document.getElementById('output').innerHTML = "Sum: 0";
     document.getElementById('counters').innerHTML = "Counter: 0";
}
