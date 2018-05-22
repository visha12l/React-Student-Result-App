import React from 'react';
import { Link } from 'react-router-dom';
import underscore from 'underscore';

const BreadCrumb = props => (
  <ul className="breadcrumbWrap pull-left clearfix">
    {underscore.map(props.link, (item, key) => (
      <li key={key}>
        {item.link
                            ? <Link to={item.link} className={item.className}>
                              {item.name}
                              </Link>
                            : <a href="javascript: void(0);" className={item.className}>
                              {item.name}
                              </a>
                        }
      </li>
                ))
            }
  </ul>
);
export default BreadCrumb;
