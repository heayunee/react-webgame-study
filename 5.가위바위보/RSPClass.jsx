import React, { Component } from 'react';

//클래스의 경우 : constructor -> render -> ref -> componentDidMount
//-> (setState/props 바뀔 때 -> shouldComponentUpdate -> render -> componentDidUpdate)
//부모가 나를 없앴을 때 -> componentWillUnmout -> 소멸

const rspCoords = {
  가위: '-142px',
  바위: '0',
  보: '-284px',
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find((v) => v[1] === imgCoord)[0];
};

class RSPClass extends Component {
  state = {
    result: '',
    imgCoord: rspCoords.바위,
    score: 0,
  }

  interval;

  componentDidMount() { // 컴포넌트 첫 렌더링 된 후 (비동기 요청을 주로 많이 함.)
    this.interval = setInterval(this.changeHand, 100);
  }

  componentWillUnmount() { // 컴포넌트가 제거되기 직전, 완료되지 않은 비동기 처리는 Unmount에서 처리해줘야함.
    clearInterval(this.interval);
  }

  changeHand = () => {
    const {imgCoord} = this.state;
    if (imgCoord === rspCoords.바위) {
      this.setState({
        imgCoord: rspCoords.가위,
      });
    } else if (imgCoord === rspCoords.가위) {
      this.setState({
        imgCoord: rspCoords.보,
      });
    } else if (imgCoord === rspCoords.보) {
      this.setState({
        imgCoord: rspCoords.바위,
      });
    }
  };

  onClickBtn = (choice) => () => {
    clearInterval(this.interval);
    const {imgCoord} = this.state;
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      this.setState({ //한번에 모아서 처리(setState)
        result: '비겼습니다!',
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: '이겼습니다!',
          score: prevState.score + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: '졌습니다!',
          score: prevState.score - 1,
        };
      });
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 1000);
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return (
        <>
          <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
          <div>
            <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
            <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
            <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
          </div>
          <div>{result}</div>
          <div>현재 {score}점</div>
        </>
    );
  }
}

export default RSPClass;
