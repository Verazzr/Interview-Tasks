
function groupList(list) {
	if (!(list instanceof Array) || (list instanceof Array && list.length === 0)) {
		return []
	}
	const obj = {}
	let arr = []
	for(let val of list) {
		if (val instanceof Object && 'type' in val) {
			val.type
			let count = 0
			for (let tmp of arr) {
				if (val.type === tmp.type) {
					count++
				}
			}
			if (count === 0) {
				const tmpObj = {}
				tmpObj['type'] = val.type
				tmpObj['content'] = [val.content]
				arr.push(tmpObj)
			}

			for (let i=0; i<arr.length; i++) {
				if (arr[i].type === val.type && arr[i].content != val.content) {
					arr[i].content.push(val.content)
				}
			}

		}
	}
	return arr
}

console.log(groupList([null, 2, "test", undefined, {

    "type": "product",

    "content": "product1"

  },  {

    "type": "product",

    "content": "product2"

  },  {

    "type": "tag",

    "content": "tag1"

  }, {

    "type": "product",

    "content": "product3"

  }, {

    "type": "tag",

    "content": "tag2"

}]))

// var input = read_line();
// var data = JSON.parse(input);
// var result = groupList(data);
// print(JSON.stringify(result));
