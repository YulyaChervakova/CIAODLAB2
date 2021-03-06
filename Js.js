//Заполнение массива 
function arrFill(x) {
    var arr1 = [];
    for (var i = 0; i < x; i++) {
        arr1[i] = Math.floor(Math.random() * (51 - 1) + 1);
    }
    return arr1;
}

//fibonachi
function fibonacci(arr, firstElem, lastElem, searchElem) {
    var fibSum = 0;
    var fib1 = 1;
    var fib2 = 1;

    while (fibSum <= lastElem) {
        if (searchElem == arr[fibSum + firstElem]) {
            return fibSum + firstElem;
        } else {
            if (searchElem > arr[fibSum + firstElem] && (fibSum + firstElem) != lastElem) {
                fib1 = fib2;
                fib2 = fibSum;
                fibSum = fib1 + fib2;
                if (fibSum > lastElem) {
                    fibSum = lastElem;
                }
            } else {
                if (searchElem < arr[fibSum + firstElem]&& (fibSum-fib2)!=0 &&(fibSum-fib2)!=1) {
                    return fibonacci(arr, fib2 + firstElem, fibSum + firstElem, searchElem);
                } else {
                    return -1;
                }
            }
        }
    }
}



//Вывод, заполнение 
var column = 26;
var arr = arrFill(column);
var arrOutput = document.getElementById("arrOutput");
arr.sort(function (a, b) {
    return a - b
});
arrOutput.value = "";
arrOutput.value = arr;
///вывод чисел масива
var arrOutput1 = document.getElementById("arrOutput1");
arrOutput1.value = "";
var k = 0;
for (var i = 0; i < arr.length; i++) {
    k = k + arr[i] + "-" + (i) + ', ';
}
arrOutput1.value = k;



var outputEl = document.getElementById("inputEl");

SearchElem1.onclick = function () {
    //Поиск фибоначи    
    var start = new Date().getTime();
    for (var i = 0; i < 10000; i++) {
        var result = fibonacci(arr, 0, arr.length - 1, outputEl.value);
    }
    var end = new Date().getTime();
    //вывод
    var fibSerch = document.getElementById("fibSerch");
    fibSerch.innerHTML = '';
    if (result == -1) {
       fibSerch.innerHTML += "<p>Элемент не найден</p>"
    } else {

        fibSerch.innerHTML += "<p>Номер элемента по поиску Фибоначи :" + result + "<br> Time:" + (end - start)/10000 + "ms</p>";
    }
    // Стандартный поиск
    start = new Date().getTime();
    for (var i = 0; i < 10000; i++) {
    var m = arr.indexOf(parseInt(outputEl.value, 0));
    }
    end = new Date().getTime();
    console.log(m);
    if (m !== -1) {
        fibSerch.innerHTML += "<p>Номер элемента по стандартному поиску: " + m + "<br> Time:" + (end - start)/10000 + "ms</p>";
    }
};



//Добавление элемента 
AddElem1.onclick = function () {

    arr.push(outputEl.value);
    arr.sort(function (a, b) {
        return a - b
    });
    arrOutput.value = "";
    arrOutput.value = arr;

    ///Удалить потом 
    var arrOutput1 = document.getElementById("arrOutput1");
    arrOutput1.value = "";
    var k = 0;
    for (var i = 0; i < arr.length; i++) {
        k = k + arr[i] + "-" + (i) + ', ';
    }
    arrOutput1.value = k;

}

//Удаление элементов
DeleteElem1.onclick = function () {
    var result = fibonacci(arr, 0, arr.length - 1, outputEl.value);
    if (result == -1) {
        alert("Элемент не найден");
    } else {
        arr.splice(result, 1);
    }
    arrOutput.value = "";
    arrOutput.value = arr;

    ///Удалить потом 
    var arrOutput1 = document.getElementById("arrOutput1");
    arrOutput1.value = "";
    var k = 0;
    for (var i = 0; i < arr.length; i++) {
        k = k + arr[i] + "-" + (i) + ', ';
    }
    arrOutput1.value = k;
}