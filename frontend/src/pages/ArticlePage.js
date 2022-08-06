import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

const ArticlePage = () => {
    const { name } = useParams();
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:8000/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        };
        fetchData();
    }, [name]);

    const otherArticles = articleContent.filter(article => article.name !== name);

    if (!article) return <NotFoundPage />
    return (
        <>
            <h1>{article.title}</h1>
            <p>This post has been upvoted {articleInfo.upvotes} times.</p>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;