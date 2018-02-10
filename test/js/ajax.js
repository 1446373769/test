function ajax(method, url, data, successFn) {
    var xhr = null;

    try {
        xhr = new XMLHttpRequest();
    }
    catch (e) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if (method == 'get' && data) {
        url += '?' + data;
    }
    xhr.open(method, url, true);
    if (method == 'get') {
        xhr.send();
    }
    else {
        xhr.setRequestHeader('contentType', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                successFN && successFn(xhr.responseText);//如果函数存在就执行后面的
            }
            else {
                window.alert('出错了，Err:' + xhr.status);
            }
        }
    };
}