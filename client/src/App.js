import { Provider } from "react-redux";
import store from "./redux/store";
import AppScreen from "./components/AppScreen/AppScreen";
import { useEffect, useState } from "react";
import { socket } from "./socket";
import ConnectionState from "./components/ConnectionState/ConnectionState";
import Events from "./components/Events/Events";
import ConnectionManager from "./components/ConnectionManager/ConnectionManager";

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents((previous) => [...previous, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("foo", onFooEvent);

    socket.connect();

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("foo", onFooEvent);
    };
  }, []);

  return (
    <Provider store={store}>
      <AppScreen>
        <ConnectionState isConnected={isConnected} />
        <Events events={fooEvents} />
        <ConnectionManager />
      </AppScreen>
    </Provider>
  );
}

export default App;
