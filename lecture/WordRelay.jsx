const React = require('react');
const { useState, useRef } = require('react');

const WordRelay = () => {
    const [word, setWord] = useState('정혜윤');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setResult('딩동댕');
            setWord(value);
            setValue('');
            inputEl.current.focus();
        } else {
            setResult('땡');
            setValue('');
            inputEl.current.focus();
        }
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    );
};
module.exports = WordRelay;
