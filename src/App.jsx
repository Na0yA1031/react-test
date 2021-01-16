import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
// Reactでは関数を使って画面の要素であるコンポーネントを表現できる

// ① returnの中にHTML要素を書いていく
// ② returnの内容が複数になる場合は()で要素を囲う必要がある
// ③ JSX記法のルールではreturnしていくHTMLの内容は一つのタグで囲わなければいけない
// ③+ <React.Fragment></React.Fragment>で囲うことで余計な要素のレンダリングを防げる。ちなみに<React.Fragment>は空タグで省略することができる<></>
// ④ JSXのreturn内で使用される{}はJavascriptとして認識される
// ⑤ styleを当てるときは{ {CSSプロパティ: ‘  CSSの値 ’} }と記述する。値は文字列で記述
// ⑤+ CSSプロパティは本来の書き方とは異なりfont-sizeの場合fontSizeのようにキャメルケースで書かなければならない
const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0); //⑥Stateはコンポーネントの上に持ってきた方が分かりやすい
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    console.log("useEffect");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  return (
    //①＆②＆③＆④＆⑤
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/of</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ・∇・)</p>}
    </React.Fragment>
  );
};

// index.jsにApp関数をexport
export default App;
