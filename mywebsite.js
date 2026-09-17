const newHTML = `<iframe src="https://adrianfang.github.io/" width="100%" height="100%" style="border:none;">
  <p>Your browser does not support iframes. <a href="https://www.example.com">Click here to visit the site directly.</a></p>
</iframe>`;
document.open("text/html");
document.write(newHTML);
document.close();
