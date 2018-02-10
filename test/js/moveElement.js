function moveMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById('picture')) return false;
    var elem = document.getElementById('picture');
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    alert('111');
    if (xpos == 800 && ypos == 500) {
        return true;
    }
    if (xpos < 800) {
        xpos++;
    }
    if (xpos > 800) {
        xpos--;
    }
    if (ypos < 500) {
        ypos++;
    }
    if (ypos > 500) {
        ypos--;
    }
    elem.style.left = xpos + 'px';
    elem.style.top = ypos + 'px';
    movement = setTimeout('moveMessage()', 10);
}
addLoadEvent('moveMessage()');
