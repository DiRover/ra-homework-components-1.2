import React from 'react';


function menu(props) {
  const { items, opened } = props;
  console.log(items);
  console.log(opened);
    return (<div className="menu menu-open">
            <div className="menu-toggle"><span></span></div>
            <nav>{opened ? <ul>{items.map(o => <li key={o.title}><a href={o.href} className="link">{o.title}</a></li>)}</ul> : null }
            </nav>
          </div>)
}

export default menu;
