function dragStart(ev) {
    ev.dataTransfer.effectAllowed='move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target,50,50);
    return true;
  }
  
  // these functions prevents default behavior of browser
  function dragEnter(ev) {
    event.preventDefault();
    return true;
  }
  function dragOver(ev) {
    event.preventDefault();
  }
  
  // function defined for when drop element on target
  function dragDrop(ev) {
    var data = ev.dataTransfer.getData("Text");
    if (ev.target.id == "dropIt"){
        ev.target.appendChild(document.getElementById(data));
        ev.stopPropagation();
        return false;
    } else if (ev.target.className == "drag") {
      console.log("test");
      ev.currentTarget.appendChild(document.getElementById(data));
      ev.stopPropagation();
      return false;
    } else if (ev.target.id == "holder") {
      ev.currentTarget.appendChild(document.getElementById(data));
    } else {
        return false;
    }
  }

  function addGroup() {
    var form = document.createElement('form');
    form.innerHTML = `<input type="text" placeholder="Group name?">`;
    form.setAttribute('onkeydown', 'return noenter(event)')

    var article = document.createElement('article');
    article.id = 'dropIt';
    article.setAttribute('ondragenter', 'return dragEnter(event)');
    article.setAttribute('ondrop', 'return dragDrop(event)');
    article.setAttribute('ondragover', 'return dragOver(event)');

    document.getElementById('list').appendChild(form);
    document.getElementById('list').appendChild(article);
  }

  function noenter(ev)  {
    if (ev.key === 'Enter') ev.preventDefault();
 }