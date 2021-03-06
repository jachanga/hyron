function replaceValue(paths, map, val) {
    var temp = map;

    if(typeof paths == "string"){
        paths = paths.split(".");
    }

    if (paths != null) {
        for (var i = 0; i < paths.length-1; i++) {
            var key = paths[i];
            temp = temp[key];
        }

        if (val instanceof Function) {
            val(temp[paths[paths.length - 1]]);
        } else {
            temp[paths[paths.length - 1]] = val;
        }
    }
}

function getValue(path, obj) {
    var result = obj;
    var steps;
    if(typeof path == "string"){
        steps = path.split(".");
    } else {
        steps = path;
    }
    if (steps != null) {
        steps.forEach((fieldName) => {
            result = result[fieldName];
        });
    }
    return result;
}

module.exports = {
    replaceValue,
    getValue
};