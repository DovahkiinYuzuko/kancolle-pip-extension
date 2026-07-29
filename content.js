(async () => {
  // ゲーム画面（iframe内）でのみ実行し、親画面では何もしない
  if (window.self === window.top) return;

  let canvas = null;
  let videoElement = null;

  // 1. Canvas検索処理
  const findCanvas = () => {
    return new Promise((resolve) => {
      const existingCanvas = document.querySelector('canvas');
      if (existingCanvas) return resolve(existingCanvas);

      const observer = new MutationObserver((mutations, obs) => {
        const el = document.querySelector('canvas');
        if (el) {
          obs.disconnect();
          resolve(el);
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    });
  };

  // 2. PIPのトグル処理（ユーザージェスチャー内で直接発火）
  const togglePip = async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
        return;
      }
      if (!videoElement) {
        const stream = canvas.captureStream(60);
        videoElement = document.createElement('video');
        videoElement.srcObject = stream;
        videoElement.muted = true;
        await videoElement.play();
      }
      await videoElement.requestPictureInPicture();
    } catch (error) {
      console.error('PIP処理中にエラーが発生しました:', error);
    }
  };

  // 3. 極小ステルスボタンの生成
  const createMinimalButton = () => {
    const button = document.createElement('button');
    button.id = 'kancolle-pip-btn';
    
    // テキストを消してSVGアイコンのみにする
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"/><rect width="10" height="7" x="12" y="13" rx="2"/></svg>';
    button.className = 'pip-minimal-button';
    button.title = 'PIPで表示 / 解除';
    
    button.addEventListener('click', togglePip);
    document.body.appendChild(button);
  };

  // 4. 初期化
  try {
    canvas = await findCanvas();
    createMinimalButton();
  } catch (error) {
    console.warn(error.message);
  }
})();