import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound () {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
       404
      </h3>
      <p className="not-found__text">
       Страница не найдена
      </p>
      <p className="not-found__link" ><Link className="not-found__link" to="/">Назад</Link></p>
    </div>
  )
}

export default PageNotFound;