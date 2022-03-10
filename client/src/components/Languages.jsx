import React from 'react';

const Languages = () => {
    return (
        <>
        <p>Language</p>
        <div>
        <select name="languages" id="languages"  placeholder="What languages do you use or are learning?">
            <option value="option 1">Javascript</option>
            <option value="option 2">Ruby</option>
            <option value="option 3">Python</option>
            <option value="option 4">C#</option>
            <option value="option 5">C++</option>
        </select>
        </div>
        </>
    );
}

export default Languages
