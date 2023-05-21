let x;
let y;
    function milcent(){
        let x = parseInt(document.getElementById("mil").value);
        let y = 10;
        let result = x/y
        document.getElementById('result1').value = result;
    }
        function milmet(){
        let x = parseInt(document.getElementById("mil").value);
        let y = 1000;
        let result = x/y
        document.getElementById('result2').value = result;
    }
            function milkil(){
        let x = parseInt(document.getElementById("mil").value);
        let y = 1e+6;
        let result = x/y
        document.getElementById('result3').value = result;
    }