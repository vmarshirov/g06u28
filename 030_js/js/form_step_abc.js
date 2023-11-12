
function reading(){
    let reading_result = {}
    reading_result.task_content = document.getElementById('task_content').innerText
    reading_result.a = document.getElementById('a').innerText
    reading_result.b = document.getElementById('b').innerText
    reading_result.c = document.getElementById('c').innerText
    console.log("reading: reading_result: ", reading_result)
    return(reading_result)
}

function converting(reading_result){
    let converting_result = {}
    converting_result.a = parseInt(reading_result.a)
    converting_result.b = parseInt(reading_result.b)
    converting_result.c = parseInt(reading_result.c)
    console.log('converting: converting_result: ', converting_result)
    return (converting_result)
}

function solution(reading_result, converting_result) {
    console.log ('solution: converting_result', converting_result)
//    let a = 21; let b = 20; let c = 3;
    let a = converting_result.a
    let b = converting_result.b
    let c = converting_result.c
    console.log("solution: a,b,c", a,b,c)
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
    console.log('solution: result: ', result)

    let result_data = {}
    result_data.task_content = reading_result.task_content
    result_data.a = a
    result_data.b = b
    result_data.c = c
    result_data.result = result
    console.log('solution: result_data: ', result_data)
    return(result_data)
}



function writing (result_data){
    document.getElementById('result').innerText = result_data.result
}

function execution(){
    reading_result = reading()
    console.log("execution: reading_result: ", reading_result)

    converting_result = converting(reading_result)
    console.log('execution: converting_result: ', converting_result)

    result_data = solution(reading_result, converting_result)
    console.log('solution: result_data: ', result_data)

    writing(result_data)
}

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', execution);