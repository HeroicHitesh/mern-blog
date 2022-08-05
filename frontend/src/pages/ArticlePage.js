import React from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
    const { name } = useParams();

    return (
        <>
            <h1>This is the {name} article</h1>
        </>
    );
}

export default ArticlePage;