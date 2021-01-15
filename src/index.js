// Reactを書くための準備

// index.jsに import React from ‘react’　と記述
// (JSXを使用するだけの場合、この記述は必須ではなくなった)
import React from "react";

// Index.jsではHTMLにコンポーネントを反映していく必要があるのでそれに必要なreact-domをインポートする。
// import ReactDom from ’react-dom’ と記述
import ReactDom from "react-dom";

// App.jsからexportされたApp関数をimport
import App from "./App";

// 上記のApp関数を画面に反映されるには
// ReactDom.render(<App /> , document.getElementById(‘’));
// ・第１引数にレンダリングする関数名を<関数名 />記述する
// ・第２引数にHTMLのどこに反映されるかを記述する
ReactDom.render(<App />, document.getElementById("root"));
