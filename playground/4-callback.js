// setTimeout(() => {
//     console.log('Two second are up');
// },2000)

// const names = ['kiki','Chingly','Midorichang']
// const shortName = names.filter((names) =>{
//         return names.length <=4
// })

// const geoCode = (address,callback) => {
//     setTimeout(() => {
//         const data = {
//             longtitude: 0,
//             latitude: 0
//         }
//         callback(data)
//     },5000)
// }

// const data =geoCode('Thailand', (data) => {
//     console.log(data)
// })

const add = (a,b,callback) => {
    setTimeout(() => {
       callback(a+b)
    },2000)
}

add(1,4,(sum)=>{
    console.log(sum);
})