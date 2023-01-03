import React, { Component } from 'react';

/**
 *  getNumbers () : function
 *  숫자 4개를 겹치지 않고, 랜덤하게 뽑아내는 함수
 */
function getNumbers() {

}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
    };
    onSubmit = () => {

    }
    onChangeInput = () => {

    }
    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {[
                        { fruit: '사과', taste: '맛있다.' },
                        { fruit: '딸기', taste: '맛있다.' },
                        { fruit: '파인애플', taste: '달다.' },
                        { fruit: '레몬', taste: '시다.' },
                        { fruit: '배', taste: '시원하다.' },
                        { fruit: '감', taste: '떫다.' },
                        { fruit: '사과', taste: '맛없다.' }
                    ].map((v, i) => {
                        return (
                            <li key={v.fruit + v.taste}>{v.fruit} : {i}</li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;
