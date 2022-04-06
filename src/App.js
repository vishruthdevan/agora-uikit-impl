import "./App.css";
import AgoraUIKit from "agora-react-uikit";
import appID from "./appID";

function App() {
    return (
        <div className="App">
            <AgoraUIKit
                rtcProps={{
                    appID: appID,
                    channel: "test",
                }}
            />
        </div>
    );
}

export default App;
