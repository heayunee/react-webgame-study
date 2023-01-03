import React, { Component } from 'react';
import Try from './Try';

/**
 *  getNumbers () : function
 *  숫자 4개를 겹치지 않고, 랜덤하게 뽑아내는 함수
 */
function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),   //[1,3,5,7]
        tries: [],  //react에서 배열 값 넣을 때 push 쓰면 안됨.
    };
    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.value === this.state.answer.join(``)) {
            this.setState({
                result : '홈런!',
                tries: [...this.state.tries, {try: this.state.value, result: '홈런'}],
            });
            alert('게임을 다시 시작합니다.');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
        } else {
            const answerArray = this.state.value.split(``).map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (this.state.tries.length >= 9) { //10번 이상 틀렸을 때
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다! :)`
                });
                alert('게임을 다시 시작합니다.');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState({
                    tries: [...this.state.tries, { try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}],
                    value :'',
                })
            }
        }
    }
    onChangeInput = (e) => {
        this.setState({
            value: e.target.value,
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    {/* JSX 주석 */}
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map((v,i) => {
                        return (
                            <Try key={`${i + 1} 차 시도 :`} tryInfo={v} index={i} />
                        )
                    })}
                </ul>
            </>
        );
    }
}
export default NumberBaseball;  //import NumberBaseball;
