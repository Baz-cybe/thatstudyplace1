function launchGame(gameUrl) {
    var win = window.open('about:blank', '_blank');
    
    var html = `
        <style>
            body { margin: 0; padding: 0; overflow: hidden; background: #000; }
            iframe { width: 100vw; height: 100vh; border: none; }
        </style>
        <title>Google Drive</title>
        <link rel="icon" href="https://ssl.gstatic.com/docs/doclist/images/infinite_drive_24dp.png">
        <iframe src="${gameUrl}"></iframe>
    `;

    win.document.open();
    win.document.write(html);
    win.document.close();
}
