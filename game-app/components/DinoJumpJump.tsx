"use client";

import { useEffect } from 'react';

export default function T_RexRunnerGame() {
    useEffect(() => {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = '/t-rex-runner-gh-pages/index.css';
        document.head.appendChild(style);

        const script = document.createElement('script');
        script.src = '/t-rex-runner-gh-pages/index.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.head.removeChild(style);
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="t" className="offline">
            <div id="messageBox" className="sendmessage">
                <h1 style={{ textAlign: "center", fontFamily: "'Open Sans', sans-serif" }}>
                    Press Space to start
                </h1>
                <div
                    className="niokbutton"
                    onClick={() => {
                        const box = document.getElementById("messageBox");
                        if (box) box.style.visibility = "hidden";
                    }}
                />
            </div>

            <div id="main-frame-error" className="interstitial-wrapper">
                <div id="main-content">
                    <div className="icon icon-offline" aria-label="Offline icon"></div>
                </div>
                <div id="offline-resources">
                    <img
                        id="offline-resources-1x"
                        src="/t-rex-runner-gh-pages/assets/default_100_percent/100-offline-sprite.png"
                    />
                    <img
                        id="offline-resources-2x"
                        src="/t-rex-runner-gh-pages/assets/default_200_percent/200-offline-sprite.png"
                    />
                    <template id="audio-resources" />
                </div>
            </div>
        </div>
    );
}
