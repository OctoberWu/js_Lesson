const flattenJSON = function (data) {
	var result = {};

	function recurse(cur, prop) {
		if (Object(cur) !== cur) {
			result[prop] = cur;
		} else if (Array.isArray(cur)) {
			for (var i = 0, l = cur.length; i < l; i++)
				recurse(cur[i], prop + "[" + i + "]");
			if (l == 0)
				result[prop] = [];
		} else {
			var isEmpty = true;
			for (var p in cur) {
				isEmpty = false;
				recurse(cur[p], prop ? prop + "." + p : p);
			}
			if (isEmpty && prop)
				result[prop] = {};
		}
	}
	recurse(data, "");
	return result;
};

const unflattenJSON = function (data) {
	"use strict";
	if (Object(data) !== data || Array.isArray(data))
		return data;
	var regex = /\.?([^.\[\]]+)|\[(\d+)\]/g,
		resultholder = {};
	for (var p in data) {
		var cur = resultholder,
			prop = "",
			m;
		while (m = regex.exec(p)) {
			cur = cur[prop] || (cur[prop] = (m[2] ? [] : {}));
			prop = m[2] || m[1];
		}
		cur[prop] = data[p];
	}
	return resultholder[""] || resultholder;
};


const obj = {
	"artifact_settings": [
		{
			"artifact_id": "ARTIFACT_TEST",
			"artifact_conf": "{'artifact_name': 'none', 'timeout': 300, 'modbus_tcp': {'remote_io': {'ip': '192.168.3.20', 'port': 502}}}"
		}
	]
}

// console.log(obj);
// console.log(flattenJSON(obj));

const obj2 = {'artifact_name': 'none', 'timeout': 300, 'modbus_tcp': {'remote_io': {'ip': '192.168.3.20', 'port': 502}}};
console.log(obj2);
const flattenResult = flattenJSON(obj2);
console.log(flattenResult);
const unflattenResult = unflattenJSON(flattenResult);
console.log(unflattenResult);