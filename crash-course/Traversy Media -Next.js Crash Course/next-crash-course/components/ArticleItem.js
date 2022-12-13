import Link from 'next/link';
import React from 'react';
import articleStyles from '../styles/Article.module.css';

const ArticleItem = ({ article }) => {
    return (
        <Link href='/article/[id]' as={`/article/${article.id}`} className={articleStyles.card}>
            <h3>{article.title} &rarr;</h3>
            <p>{article.excerpt}</p>
        </Link>
    );
};

export default ArticleItem;