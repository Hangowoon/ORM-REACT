import React from 'react';

const ArticleItem = ({ article, onSelect }) => {
  return (
    <tr>
      <td>{article.id}</td>
      <td>{article.title}</td>
      <td>{article.text}</td>
      <td>
        <input
          type='checkbox'
          value={article.checked}
          onClick={() => onSelect(article.id)}
        />
      </td>
    </tr>
  );
};

export default ArticleItem;
