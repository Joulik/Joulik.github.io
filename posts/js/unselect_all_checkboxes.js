document.getElementById('unselect').onclick = function() {
    var checkboxes = document.getElementsByName('item');
    for (var checkbox of checkboxes) {
        checkbox.checked = false;
    }
}