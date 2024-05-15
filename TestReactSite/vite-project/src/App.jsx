import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/V0.1_WebGL_Better.loader.js",
    dataUrl: "Build/V0.1_WebGL_Better.data.gz",
    frameworkUrl: "Build/V0.1_WebGL_Better.framework.js.gz",
    codeUrl: "Build/V0.1_WebGL_Better.wasm.gz",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default App;
