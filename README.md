## Overview

This project was created with React, Tailwind CSS and Firebase. 

下载后请输入:

### `npm i npm start`

然后打开浏览器 [http://localhost:3000](http://localhost:3000) 


## 已实现功能

实现了即时接收体验者发送的消息的简单聊天功能。

除了基本回复功能，我添加了好友列表和点赞好友信息功能。

另外为了优化用户体验，增加了自动下拉到最新信息的功能。但是由于Firebase的限制，无法叠加 `where`和`orderBy`(如 `messagesRef.where("friendName", "==", " Laura").orderBy("createdAt")`)，所以在增加好友列表和分离出各用户对话后，聊天记录默认根据 `uid` 排序，此功能不再稳定呈现，但如果多次尝试发送信息，偶能体验此功能。

（具体见 https://firebase.google.com/docs/firestore/query-data/order-limit-data 最后一行）

## 未实现功能

### 1.
我尝试加入更换聊天界面颜色功能，但由于使用的tailwindcss最新版本不稳定，未能呈现，以下是功能思路：

在 `ChatPage.js` 输入以下：

`const [color, setColor] = useState("green");`

`const tailwindColors = [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "emerald",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "rose",
  ];`
  
  `let colorNumber = Math.floor(Math.random() * tailwindColors.length);`

然后在页面上增加一个按键并绑定事件：
  `const handleColorChange = () => {
    setColor(tailwindColors[colorNumber]);
  };`
  
  将 `{color}` 作为props传入各child 及 grandchild components, 如 `Chat.js，SendMessage.js`和`Message.js` 并在相应的 `className` 内加入如下variable:
  
    let darkBgClass = `bg-${color}-600`;
    let lightBgClass = `bg-${color}-100`;
    let darkBorderClass = `border-${color}-600`;
    className= {`$(darkBgClass}`}
   
 
 这样做的结果是可以在html里获得正确的Tailwind class, 如 [bg-green-600](https://tailwindcss.com/docs/background-color)，但无法获得应有的style sheet effect.

### 2.
未实现图片上传功能，仅有按钮样式。

 
`



