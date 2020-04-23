// let _=require('underscore');
// let arr=[1,2,3,4,5];
// arr=_.without(arr,5)
// console.log(arr);
// const _ = require('underscore')

// // 1 map 可以应用到对象身上
// let obj = {
// 	name: 'adley',
// 	age: 18,
// 	addr: 'Beijing'
// }

// let newObj = _.map(obj, (value, key) => {
// 	console.log(value, key);
	
// 	let _o = {}
// 	if (key == 'age' && value >= 18){
// 		_o.desc = '你已经是成年人了'
// 	}else {
// 		_o[key]=value;
// 	}
// 	return _o;
// })

// console.log(newObj) 
// let a1 = _.range(10)
// let a2 = _.range(0,60,5)
// console.log(a1) // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(a2)