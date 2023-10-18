function reading(){
    let reading_result = {}
    reading_result.str_task_content = document.getElementById("task_content").innerText
    reading_result.str_a = document.getElementById("a").innerText
    reading_result.str_b = document.getElementById("b").innerText
    reading_result.str_c = document.getElementById("c").innerText
    console.log("reading: reading_result:", reading_result)
    return(reading_result)
}


function converting(reading_result) {
    let converting_result = {}
    converting_result.a = parseInt(reading_result.str_a);
    converting_result.b = parseInt(reading_result.str_b);
    converting_result.c = parseInt(reading_result.str_c);
    console.log("converting:converting_result: ", converting_result)
    return(converting_result)
}


function solution(converting_result, reading_result){
    //    let a = 1; let b = 2; let c = 3;
    let a = converting_result.a;
    let b = converting_result.b;
    let c = converting_result.a;
    console.log ("solution: a ,b ,c :", a, b, c)

    let low, high
    if (a < b) {
        low = a;
        high = b;
    }
    else {
        low = b;
        high = a;
    }

    if (c >= low && c <= high) {
        result = " С принадлежит заданному диапазону"
    } else {
        result = " С не принадлежит заданному диапазону"
    }
    console.log("solution: result: ", result)

    let result_data = {}
    result_data.str_task_content = reading_result.str_task_content
    result_data.a = a
    result_data.b = b
    result_data.c = c
    result_data.result = result
    console.log('solution: result_data: ',result_data)
    return(result_data)
}


function writing(reading_result, solution_result){
    document.getElementById("result").innerText =  solution_result.result;
}


function execution (){
    reading_result = reading()
    console.log("execution: reading_result: ", reading_result)

    converting_result = converting(reading_result)
    console.log("execution: converting_result: ", converting_result)

    let solution_result = solution(converting_result, reading_result)
    console.log("execution: solution_result: ", solution_result)

    writing(reading_result, solution_result)
}


const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', execution);
