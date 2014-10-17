// ## Return a list of fibonacci numbers that go up to but not beyond the maximum number provided
// def fibonacci_set(max):
//     if max > 1:
//         fib_list = [1]
//         current_fib = 1
//         while current_fib < max:
//             fib_list.append(current_fib)
//             current_fib = fib_list[-1] + fib_list[-2]

//         return fib_list
//     else:
//         return [1, 1]

// ## Tell me if a number is even
// def even(n):
//     return n % 2 == 0

// print sum(filter(even,fibonacci_set(4000000)))



function fibonacci_set(max) {
    if (max > 1) {
        var fib_list = [1];
        var current_fib = 1;
        while (current_fib < max) {
            fib_list.push(current_fib);
            current_fib = parseInt(fib_list.slice(-1)) + parseInt(fib_list.slice(-2,-1));
            console.log('current', current_fib);
        }
        console.log(fib_list);
        return fib_list;
    } else {
        return [1, 1];
    }
}

function even(n) {
    return n % 2 === 0;
}

function is_even(list_from_fib) {
    var new_list = [];
    for (var i = 0; i < list_from_fib.length; i++) {

        if (even(list_from_fib[i]) === true) {
            new_list.push(list_from_fib[i]);
        }
    }
    return new_list;
}

console.log(is_even(fibonacci_set(4000000)));
