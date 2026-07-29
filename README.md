# 艦これPIP / KanColle PIP

艦隊これくしょん -艦これ- のゲーム画面をピクチャー・イン・ピクチャー（PiP）表示するためのChrome拡張機能です。 / A Chrome extension for displaying the Kantai Collection (KanColle) game screen in Picture-in-Picture (PiP) mode.

![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue?style=flat-square&logo=googlechrome&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square&logo=opensourceinitiative&logoColor=white)](LICENSE.MIT)

[日本語](#日本語) | [English](#english)

## 日本語

### 概要
本拡張機能は、「艦隊これくしょん -艦これ-」のゲームフレーム（`#game_frame`）をブラウザのピクチャー・イン・ピクチャー（PiP）機能を利用して別ウィンドウ表示するためのツールです。作業中の画面監視や「ながらプレイ」を効率化します。

### 主な機能
* **PiP表示切り替え**: ゲーム画面右上の専用ボタンからワンクリックでPiPモードの起動および解除が行えます。
* **セキュアな設計**: ブラウザのユーザーセキュアポリシーに準拠し、ゲーム用`iframe`内部から直接起動処理を行います。

### 使い方（開発者モード）
1. 本リポジトリの Releases ページから最新の `kancolle-pip-extension.zip` をダウンロードし、展開します。
2. Chromeで `chrome://extensions/` を開きます。
3. 右上の「デベロッパー モード」を有効にします。
4. 「パッケージ化されていない拡張機能を読み込む」を選択し、展開したフォルダを指定します。
5. 「艦隊これくしょん -艦これ-」のゲームページを開き、画面右上にホバーすると表示されるボタンをクリックします。

### 制限事項
* ピクチャー・イン・ピクチャー画面からの直接的なゲーム操作（クリック等）はブラウザの仕様上行えません（閲覧専用となります）。

### LICENSE
このプロジェクトのライセンスはMITです。詳しくは[LICENSE.MIT](LICENSE.MIT)をお読みください。

---

## English

### Overview
This extension is a tool to display the game frame (`#game_frame`) of "Kantai Collection (KanColle)" in a separate Picture-in-Picture (PiP) window using the browser's native PiP feature. It is designed for monitoring game activity while multitasking.

### Key Features
* **PiP Toggle**: Easily launch and exit PiP mode with a single click via a dedicated button located at the top-right of the game frame.
* **Secure Design**: Complies with browser security user-gesture policies by triggering execution directly within the game `iframe`.

### Usage (Developer Mode)
1. Download `kancolle-pip-extension.zip` from the latest release on the Releases page and extract it.
2. Open `chrome://extensions/` in Chrome.
3. Enable "Developer mode" in the top-right corner.
4. Click "Load unpacked" and select the extracted folder.
5. Open the "Kantai Collection" game page and click the button that appears when hovering over the top-right of the game frame.

### Limitations
* Direct interaction (clicking, typing) within the Picture-in-Picture window is not supported due to browser specification limits (view-only mode).

### LICENSE
This project is licensed under the MIT License. For details, please read [LICENSE.MIT](LICENSE.MIT).