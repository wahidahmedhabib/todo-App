var val = document.getElementById('vall')
var addd = document.getElementById('added_sec')
function add() {
    if (val.value == '') {
        alert('Enter someThing ')
    } else {
        var added = document.getElementById('added_sec')
        var para = document.createElement('ul')
        para.innerText = val.value
        para.setAttribute('class', 'result')
        added.append(para)
        console.log(added)
        console.log(added.appendChild(para))
        console.log(added.innerHTML)
        var del_btn = document.createElement('button')
        del_btn.setAttribute('onclick', 'dell(this)')
        del_btn.setAttribute('id', 'delbtn')
        del_btn.innerHTML = 'Del'
        var edit_btn = document.createElement('button')
        edit_btn.setAttribute('onclick', 'edit()')
        edit_btn.setAttribute('id', 'editbtn')
        edit_btn.innerHTML = 'Edit '
        para.append(del_btn, edit_btn)
        val.value = ''

    }
}
function dell(e) {
    e.parentNode.remove()
}
function edit(){
    var oldvalue = event.target.parentNode.firstChild.nodeValue
    var editval = prompt('entre updated value',event.target.parentNode.firstChild.nodeValue)
    event.target.parentNode.firstChild.nodeValue = editval
}
function dellAll() {
    addd.innerHTML = ""

}
