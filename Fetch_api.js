<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Fetch API</h1>
<h2>The fetch()</h2>
<p id="demo">Fetch a file to change this text.</p>

<script>
let file = "https://reqres.in/api/users"
fetch (file)
.then(x => x.json())
.then(y => {
    var x = "";
    for(var i=0;i<y.data.length;i++){
        x +=y.data[i].first_name + "_" + y.data[i].last_name +",";
    }
    document.getElementById("demo").innerHTML = x;
});

</script>

</body>
</html>
