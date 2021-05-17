const files = ['foo.txt ', '.bar', '   ', 'baz.foo']
// let filePaths = []

// for (let file of files) {
//     console.log(file)
//     const fileName = file.trim()
//     if(fileName) {
//         const filePath = `~/path/${fileName}`
//         filePaths.push(filePath)
//     }
// }

const filePaths = files.reduce((acc, cur) => {
    const fileName = cur.trim()
    if(fileName) {
        const filePath = `~/path/${fileName}`
        acc.push(filePath)
        console.log(acc)
    }
    return acc;
}, [])

console.log(filePaths)

// methods chaining
const filePathsMethodsChaining = files.map(file => file.trim())
                                    .filter(Boolean)
                                    .map(fileName => `~/path/${fileName}`);
console.log(`file path with methods chaining ${filePathsMethodsChaining}`)

const nums = [1, 2, 3, 4]
re = nums.reduce((acc, cur) => {
    acc = acc + cur
    return acc
}, 10)
console.log(re)