let numbers = [1, 2, 3, 4, 5];
let order = 'asc';

function tri(numbers, order) {
    for (let i=0; i < numbers.lenght; i++){
        for (let j=0; j < (numbers.lenght -j -1); j++){
            if(arr[j] > arr[j+1]){
                var temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j+1] = temp
            }
        }
    }
    console.log(numbers);
}