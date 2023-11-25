// let arr = [1, 2, 3, [1, [[2]], 3]]

// function flattern(arr) {
//     let temp = []

//     for (let item of arr) {
//         if (!Array.isArray(item)) {
//             temp.push(item)
//         } else {
//             temp = [...temp, ...flattern(item)]
//         }
//     }

//     return temp
// }

// console.log(flattern(arr));



// const romains = (str) => {
//     const map = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     }
//     let result = 0
//     let prev = 0

//     for (let i = str.length - 1; i >= 0; i--) {
//         let curr = map[str[i]]

//         if (curr >= prev) {
//             result += curr
//         } else {
//             result -= curr
//         }

//         prev = curr
//     }

//     return result
// }

// console.log(
//     romains('MMCV'),
//     romains('IX'),
//     romains('MMV'),
//     romains('MMXI'),
//     romains('MXMIV'),
//     romains('MCVI')
// );



// const arabian = (num) => {
//     const map = {
//     'I': 1,
//     'V': 5,
//     'X': 10,
//     'L': 50,
//     'C': 100,
//     'D': 500,
//     'M': 1000
//     }

//     let result = ''

//     let symb = Object.keys(map)

//     for(let i = 0; i < map.length; i++){
//        if()
//     }
//     return result
// }

// console.log(arabian(394));

function arabian(num) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = ''

    if (num >= 1000) {
        result += 'M'
        num -= 1000
    }
    if (num >= 900) {
        result += 'CM'
        num -= 900
    }
    if (num >= 500) {
        result += 'D'
        num -= 500
    }
    if (num >= 400) {
        result += 'CD'
        num -= 400
    }
    while (num >= 100) {
        result += 'C'
        num -= 100
    }
    if (num >= 90) {
        result += 'XC'
        num -= 90
    }
    if (num >= 50) {
        result += 'L'
        num -= 50
    }
    if (num >= 40) {
        result += 'XL'
        num -= 40
    }
    while (num >= 10) {
        result += 'X'
        num -= 10
    }
    if (num >= 9) {
        result += 'IX'
        num -= 9
    }
    if (num >= 5) {
        result += 'V'
        num -= 5
    }
    if (num >= 4) {
        result += 'IV'
        num -= 4
    }
    while (num >= 1) {
        result += 'I'
        num -= 1
    }

    return result
}

console.log(arabian(1569));
