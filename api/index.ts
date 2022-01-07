import { IncomingMessage, ServerResponse } from 'http';
import { getScreenshot } from './_lib/chromium';
import fetchRecording from './_lib/fetchRecording';
import { getHtml } from './_lib/template';
import { FileType } from './_lib/types';

const isDev = !process.env.AWS_REGION;
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1';

function getFileType(extension: string): FileType {
    switch (extension) {
        case "jpg":
        case "jpeg":
            return "jpeg";
        case "png":
            return "png";
    }

    throw new Error("Invalid file type");
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
    try {
        const { pathname } = new URL("http://replay.io" + (req.url || '/'));
        const [idPath, extension] = pathname.split(".");
        const id = idPath.slice(1);

        if (!id || !extension) {
            throw new Error("Invalid url: " + pathname);
        }

        const data = await fetchRecording(id);
        const html = getHtml(data);

        if (isHtmlDebug) {
            res.setHeader('Content-Type', 'text/html');
            res.end(html);
            return;
        }
        const fileType = getFileType(extension)
        const file = await getScreenshot(html, fileType, isDev);
        res.statusCode = 200;
        res.setHeader('Content-Type', `image/${fileType}`);
        if (process.env.NODE_ENV === "production") {
            res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
        }
        res.end(file);
    } catch (e) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
        console.error(e);
    }
}
