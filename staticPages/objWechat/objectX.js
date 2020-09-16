function setNav(arrTtl, elemPar) {
	var list = document.createElement('ul');
	list.setAttribute('class', 'obj-nav');
	// var item = new Array(arrTtl.length);
	var item;
	for (var i = 0; i < arrTtl.length; i++) {
		item = document.createElement('li');
		item.innerText = arrTtl[i];
		item.setAttribute('class', 'obj-nav-li');
		list.appendChild(item);
	}
	elemPar.append(list);
}
