import React from 'react';

const Level = () => {
    return (
        <>
        <p>Level</p>
        <select name="selectList" id="selectList">
            <option value="option 1">Beginner</option>
            <option value="option 2">Elementary</option>
            <option value="option 3">Intermediate</option>
            <option value="option 4">Upper Intermediate</option>
            <option value="option 5">Advanced</option>
            <option value="option 6">Expert</option>
        </select>
        </>
    );
}

export default Level