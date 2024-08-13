import React, { useState } from "react";
import { marked } from "marked";


function MarkdownUseState() {
    const [markdown, setMarkdown] = useState('');


    const getMarkdownText = () => {
        const rawMarkup = marked(markdown, { sanitize: true });
        return { __html: rawMarkup };
    };

    return (
        <div className="container">
            <textarea
                className="textarea"
                placeholder="Enter markdown"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />
            <div className="preview" dangerouslySetInnerHTML={getMarkdownText()} />
        </div>
    );
}

export default MarkdownUseState;
