import React from 'react';
import { Worker } from '@react-pdf-viewer/core';

import { CharacterMap, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const characterMap: CharacterMap = {
    isCompressed: true,
    // The url has to end with "/"
    url: 'https://unpkg.com/pdfjs-dist@3.7.107/cmaps/',
};

const ReactPDFViewerDemo: React.FC = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div>
            <h1>React PDF Viewer</h1>
            <div className="viewer">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.min.js">
                    <div style={{ height: '500px', width: '700px' }}>
                        <Viewer
                            fileUrl="/sample.pdf"
                            characterMap={characterMap}
                            plugins={[defaultLayoutPluginInstance]} />
                    </div>
                </Worker>
            </div>
        </div>
    );
};

export default ReactPDFViewerDemo;
