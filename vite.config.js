import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom TTS proxy plugin - fetches Google Translate audio server-side
// This avoids CORS issues when the browser tries to reach Google Translate directly.
function ttsProxyPlugin() {
  return {
    name: 'tts-proxy',
    configureServer(server) {
      server.middlewares.use('/tts-api', async (req, res) => {
        try {
          const url = new URL(req.url, 'http://localhost');
          // The 'q' param arrives already percent-encoded from the browser.
          // We must NOT re-encode it — pass it through as-is to Google.
          const text = url.searchParams.get('q') || '';
          const lang = url.searchParams.get('tl') || 'en';

          if (!text.trim()) {
            res.statusCode = 400;
            res.end('Missing text parameter');
            return;
          }

          // Build the Google Translate TTS URL.
          // encodeURIComponent is needed here because we decoded via searchParams.get().
          const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${lang}&client=tw-ob&ttsspeed=1`;

          const response = await fetch(ttsUrl, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
              'Referer': 'https://translate.google.com/',
              'Accept': 'audio/mpeg, audio/*, */*',
              'Accept-Language': 'en-US,en;q=0.9',
            }
          });

          if (!response.ok) {
            console.error(`[TTS Proxy] Google returned ${response.status} for lang=${lang}, text length=${text.length}`);
            res.statusCode = response.status;
            res.end(`TTS fetch failed: ${response.status}`);
            return;
          }

          const buffer = Buffer.from(await response.arrayBuffer());
          res.setHeader('Content-Type', 'audio/mpeg');
          res.setHeader('Content-Length', buffer.length);
          res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24h
          res.end(buffer);
        } catch (err) {
          console.error('[TTS Proxy Error]', err.message);
          res.statusCode = 500;
          res.end('TTS proxy error');
        }
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ttsProxyPlugin()],
})
