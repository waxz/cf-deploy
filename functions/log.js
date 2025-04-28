export async function onRequest(context){
   const {request} = context;

    const url = new URL(request.url);
    const pathname = url.pathname; // e.g., "/http:/fruits/banana"
  
    // (optional) strip the leading slash
    const reconstructed = pathname.slice(1);
  

    
    return new Response(`<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Web Proxy Service</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              text-align: center;
              line-height: 1.6;
              color: #333;
              background-color: #f8f9fa;
            }
            .container {
              background-color: white;
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #2c3e50;
              margin: 20px 0;
            }
            form {
              margin: 30px 0;
            }
            .input-group {
              width: 100%;
              display: flex;
              margin-bottom: 15px;
            }
            input[type="url"] {
              flex: 1;
              padding: 12px;
              font-size: 16px;
              border: 1px solid #ddd;
              border-radius: 4px 0 0 4px;
              box-sizing: border-box;
            }
            button {
              background: #3498db;
              color: white;
              border: none;
              padding: 12px 20px;
              font-size: 16px;
              border-radius: 0 4px 4px 0;
              cursor: pointer;
              transition: background 0.3s;
            }
            button:hover {
              background: #2980b9;
            }
            .example {
              color: #7f8c8d;
              font-size: 14px;
              margin: 15px 0;
            }
            .features {
              background-color: #ecf0f1;
              padding: 20px;
              border-radius: 8px;
              margin-top: 30px;
              text-align: left;
            }
            .features h2 {
              font-size: 20px;
              margin-top: 0;
              color: #2c3e50;
            }
            .features ul {
              padding-left: 20px;
            }
            .features li {
              margin: 8px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Web Proxy Service</h1>
            <p>Browse websites privately through this proxy service</p>
            
            <form id="proxyForm" onsubmit="navigateToProxy(event)">
              <div class="input-group">
                <input type="url" id="urlInput" placeholder="https://example.com" required>
                <button type="submit">Access</button>
              </div>
            </form>
            
     
        
            <div class="features">
              <h2>Welcome! Using this site, you can:</h2>
              <ul>
                <li>Browse websites anonymously</li>
                <li>Bypass some network restrictions</li>
                <li>Do some tests for your site</li>
        
              </ul>
            </div>
          </div>
          
          <script>
            function navigateToProxy(e) {
              e.preventDefault();
              const url = document.getElementById('urlInput').value.trim();
              if (url) {
                window.location.href = '/?url=' + url;
              }
            }
            
            // Auto-focus on input field
            document.getElementById('urlInput').focus();
            
            // Handle paste events to clean URLs
            document.getElementById('urlInput').addEventListener('paste', function(e) {
              // Let the paste happen naturally, then clean it after
              setTimeout(function() {
                const url = e.target.value.trim();
                e.target.value = url.replace(/\\s+/g, '');
              }, 0);
            });
          </script>
        </body>
        </html>`, {
            headers: {
              'Content-Type': 'text/html;charset=UTF-8',
              'Cache-Control': 'no-cache'
            }
          })
}
