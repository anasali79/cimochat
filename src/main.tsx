
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  UIKitSettingsBuilder,
  CometChatUIKit,
} from "@cometchat/chat-uikit-react";
import { setupLocalization } from "./CometChat/utils/utils";
import { BuilderSettingsProvider } from "./CometChat/context/BuilderSettingsContext";

export const COMETCHAT_CONSTANTS = {
  APP_ID: "2750985d8ed2eeb6",
  REGION: "in", 
  AUTH_KEY: "ada7df7256d2156d6c54325379c31bd373bc7c25", 
};

const uiKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .build();

CometChatUIKit.init(uiKitSettings)?.then(() => {
  setupLocalization();

  const UID = "cometchat-uid-1";

  CometChatUIKit.getLoggedinUser().then((user: CometChat.User | null) => {
    if (!user) {
      CometChatUIKit.login(UID)
        .then((loggedUser: CometChat.User) => {
          console.log("Login Successful:", loggedUser);
          // Mount your app
          ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
            <BuilderSettingsProvider>
              <App />
            </BuilderSettingsProvider>
          );
        })
        .catch((error) => console.error("Login Failed:", error));
    } else {
      // User already logged in, mount app directly
      console.log("User already logged in:", user);
      ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <BuilderSettingsProvider>
          <App />
        </BuilderSettingsProvider>
      );
    }
  });
});