
import { readFileSync } from 'fs';
import { ParsedRequest } from './types';

const rglr = readFileSync(`${__dirname}/../_fonts/Inter-Regular.woff2`).toString('base64');
const bold = readFileSync(`${__dirname}/../_fonts/Inter-Bold.woff2`).toString('base64');

function getCss() {
    let background = 'white';
    let foreground = 'black';

    return `
    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${rglr}) format('woff2');
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: bold;
        src: url(data:font/woff2;charset=utf-8;base64,${bold}) format('woff2');
    }

    body {
        font-family: Inter;
        color: ${foreground};
        background: ${background};
        background-image: url("data:image/svg+xml,%3Csvg width='1200' height='630' viewBox='0 0 1200 630' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_9870_94753)'%3E%3Crect width='1200' height='630' rx='8' fill='white'/%3E%3Ccircle cx='624.032' cy='875.032' r='1099.85' transform='rotate(-165 624.032 875.032)' fill='url(%23paint0_radial_9870_94753)'/%3E%3Ccircle cx='624.032' cy='875.032' r='1099.85' transform='rotate(-165 624.032 875.032)' fill='url(%23paint1_radial_9870_94753)'/%3E%3Ccircle cx='624.032' cy='875.032' r='1099.85' transform='rotate(-165 624.032 875.032)' fill='url(%23paint2_radial_9870_94753)'/%3E%3Ccircle cx='624.032' cy='875.032' r='1099.85' transform='rotate(-165 624.032 875.032)' fill='url(%23paint3_radial_9870_94753)'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint0_radial_9870_94753' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(-1248.05 -1520.23) rotate(54.3542) scale(2676.01 2325.34)'%3E%3Cstop offset='0.322917' stop-color='%234E60FF'/%3E%3Cstop offset='1' stop-color='%234E6AFF' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='paint1_radial_9870_94753' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(-48.0971 -13.733) rotate(31.2701) scale(3028.48 2631.62)'%3E%3Cstop stop-color='%234E6AFF' stop-opacity='0'/%3E%3Cstop offset='0.524747' stop-color='%23F02D5E' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23F02D5E'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_9870_94753' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(362.957 369.547) rotate(55.7427) scale(2022.93 1757.84)'%3E%3Cstop stop-color='%234E6AFF' stop-opacity='0'/%3E%3Cstop offset='0.774135' stop-color='%234EFFCA' stop-opacity='0'/%3E%3Cstop offset='0.96875' stop-color='%234EFF80'/%3E%3C/radialGradient%3E%3CradialGradient id='paint3_radial_9870_94753' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(1280.36 1460.77) rotate(-160.86) scale(947.866 657.009)'%3E%3Cstop stop-color='%2301ACFD' stop-opacity='0.5'/%3E%3Cstop offset='1' stop-color='%2301ACFD' stop-opacity='0'/%3E%3C/radialGradient%3E%3CclipPath id='clip0_9870_94753'%3E%3Crect width='1200' height='630' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
        background-size: cover;
        background-position: 50% 50%;
        margin: 40px;
        height: calc(100vh - 80px);
        width: calc(100vw - 80px);
        display: flex;
        flex-direction: column;
        line-height: 1.2;
        justify-content: space-between;
    }

    .title {
        font-size: 64px;
        max-height: calc(64px * 3.6);
        -webkit-line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical;
        display: -webkit-box;
    }
    
    .byline {
        font-size: 32px;
    }

    .icon {
        position: absolute;
        right: 40px;
        bottom: 40px;
        height: 70px;
        width: 70px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='269' height='267' viewBox='0 0 269 267' fill='none'%3E%3Cpath d='M208.053 0H60C26.8629 0 0 26.8629 0 60V206.25C0 239.387 26.8629 266.25 60 266.25H208.053C241.19 266.25 268.053 239.387 268.053 206.25V60C268.053 26.8629 241.19 0 208.053 0Z' fill='%23F02D5E'/%3E%3Cpath d='M135.761 88.3129L111.443 74.2465L87.1242 60.1801C86.0695 59.5705 84.8733 59.2498 83.6557 59.25C82.4381 59.2502 81.242 59.5714 80.1875 60.1814C79.133 60.7913 78.2573 61.6685 77.6483 62.7248C77.0393 63.7811 76.7185 64.9793 76.718 66.1992V122.464C76.7184 123.684 77.0392 124.882 77.6482 125.939C78.2572 126.995 79.1329 127.872 80.1874 128.482C81.2419 129.092 82.438 129.413 83.6556 129.414C84.8733 129.414 86.0695 129.093 87.1242 128.484L111.443 114.417L135.761 100.351C136.816 99.7411 137.692 98.8638 138.301 97.8072C138.91 96.7506 139.23 95.5521 139.23 94.332C139.23 93.112 138.91 91.9134 138.301 90.8568C137.692 89.8003 136.816 88.9229 135.761 88.3129Z' fill='white'/%3E%3Cpath d='M135.543 166.649L111.225 152.583L86.9062 138.516C85.8515 137.907 84.6552 137.586 83.4376 137.586C82.22 137.586 81.0239 137.908 79.9694 138.518C78.9149 139.128 78.0392 140.005 77.4302 141.061C76.8212 142.117 76.5004 143.316 76.5 144.536V200.8C76.5004 202.02 76.8212 203.219 77.4302 204.275C78.0392 205.331 78.9149 206.209 79.9694 206.819C81.0239 207.428 82.22 207.75 83.4376 207.75C84.6552 207.75 85.8515 207.429 86.9062 206.82L111.225 192.754L135.543 178.687C136.598 178.077 137.474 177.2 138.083 176.143C138.692 175.087 139.013 173.888 139.013 172.668C139.013 171.448 138.692 170.249 138.083 169.193C137.474 168.136 136.598 167.259 135.543 166.649Z' fill='white'/%3E%3Cpath d='M204.9 127.481L180.582 113.415L156.263 99.3485C155.208 98.739 154.012 98.4182 152.794 98.4185C151.577 98.4187 150.381 98.7399 149.326 99.3498C148.272 99.9597 147.396 100.837 146.787 101.893C146.178 102.95 145.857 104.148 145.857 105.368V161.633C145.857 162.853 146.178 164.051 146.787 165.107C147.396 166.163 148.272 167.041 149.326 167.651C150.381 168.26 151.577 168.582 152.794 168.582C154.012 168.582 155.208 168.261 156.263 167.652L180.582 153.586L204.9 139.519C205.955 138.909 206.831 138.032 207.44 136.975C208.048 135.919 208.369 134.72 208.369 133.5C208.369 132.28 208.048 131.082 207.44 130.025C206.831 128.968 205.955 128.091 204.9 127.481Z' fill='white'/%3E%3C/svg%3E");
        background-size: contain;
        background-repeat: no-repeat;
    }

    .title, .byline {
        margin-block-end: 20px;
    }

    img {
        width: 660px;
        box-shadow:
            0 1px 1px hsl(0deg 0% 0% / 0.075),
            0 2px 2px hsl(0deg 0% 0% / 0.075),
            0 4px 4px hsl(0deg 0% 0% / 0.075),
            0 8px 8px hsl(0deg 0% 0% / 0.075),
            0 16px 16px hsl(0deg 0% 0% / 0.075),
            0 32px 32px hsl(0deg 0% 0% / 0.075)
        ;
    }
    `;
}

export function getHtml(parsedReq: ParsedRequest) {
    const { title, user, date, thumbnail } = parsedReq;
    return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss()}
    </style>
    <body>
        <div class="layout">
            <div class="title">${title}</div>
            <div class="byline">Recorded by <strong>${user}</strong> on <strong>${date}</strong></div>
        </div>
        <img src="${thumbnail}">
        <div class="icon"></div>
    </body>
</html>`;
}
