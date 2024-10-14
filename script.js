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
    } else {
        return false;
    }
  }

  function addGroup() {
    var form = document.createElement('form');
    form.innerHTML = `<input type="text" placeholder="Group name?">`;

    var article = document.createElement('article');
    article.id = 'dropIt';
    article.setAttribute('ondragenter', 'return dragEnter(event)');
    article.setAttribute('ondrop', 'return dragDrop(event)');
    article.setAttribute('ondragover', 'return dragOver(event)');

    document.getElementById('list').appendChild(form);
    document.getElementById('list').appendChild(article);
  }