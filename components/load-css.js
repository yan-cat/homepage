// load-css.js
// 定义需要加载的 CSS 文件列表（相对于网站根目录）
const cssFiles = [
'css/body.css',
'css/main.css',
'css/title-bar.css',
'css/tile.css',
'css/site-footer.css',
'css/flex-row.css',
'css/btn.css'
];

// 动态创建 <link> 标签并添加到 <head>
cssFiles.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
});
