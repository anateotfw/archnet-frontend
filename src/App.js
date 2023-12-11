
import { ReactDOM,React } from "react";
import "./App.css";
import Main from "./Componets/Main/Main";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import MenuMain from "./Componets/Menu/MenuMain";
import Subscription from "./Componets/otherPages/Sub/Subscription";
import Learning from "./Componets/otherPages/Learn/Tutorial";
import ClashForAndroid from "./Componets/Apps/Android/ClashForAndroid";
import HiddifyForAndroid from "./Componets/Apps/Android/HiddifyForAndroid";
import V2rayForAndroid from "./Componets/Apps/Android/V2rayForAndroid";
import MatsuriForAndroid from "./Componets/Apps/Android/NekoboxForAndroid";
import ShadowForIos from "./Componets/Apps/Ios/ShadowForIos";
import FoxrayForIos from "./Componets/Apps/Ios/FoxrayForIos";
import V2boxForIos from "./Componets/Apps/Ios/V2boxForIos";
import V2rayForWindows from "./Componets/Apps/Windows/V2rayForWindows";
import ClashMetaForWindows from "./Componets/Apps/Windows/ClashMetaForWindows";
import NekorayForWindows from "./Componets/Apps/Windows/NekorayForWindows";
import HiddifyForWindows from "./Componets/Apps/Windows/HiddifyForWindows";
import V2boxForMac from "./Componets/Apps/Mac/V2boxForMac";
import ClashForMac from "./Componets/Apps/Mac/ClashForMac";
import ClashForLinux from "./Componets/Apps/Linux/ClashForLinux";
import NekorayForLinux from "./Componets/Apps/Linux/NekorayForLinux";
import StreisandForIos from "./Componets/Apps/Ios/StreisandForIos";
import StreisandForMac from "./Componets/Apps/Mac/StreisandForMac";
import ScrollFromTop from "./Componets/Main/ScrollFromTop";
import BasicTraining from "./Componets/BasisTraining /BasicTraining";
import LinkChanging from "./Componets/BasisTraining /LinkChanging";
import ConnectToRobot from "./Componets/BasisTraining /ConnectToRobot";
import TestSubscription from "./Componets/BasisTraining /TestSubscription";
import FAQs from "./Componets/Apps/FAQs/FAQs";
import NekoboxForAndroid from "./Componets/Apps/Android/NekoboxForAndroid";

import Tutorial from "./Componets/otherPages/Learn/Tutorial";
import ShadowRocketMac from "./Componets/Apps/Mac/ShadowRocketMac";

function App() {
 return(
  <>
<BrowserRouter>
    <ScrollFromTop>
<Routes>
<Route path="/" element={<MenuMain/>}>
<Route index element={<Main/>}/>
<Route path="Tutorial" element={<Tutorial/>}/>
<Route path="Subscription" element={<Subscription/>}/>
    <Route path="ClashForAndroid" element={<ClashForAndroid/>}/>
    <Route path="HiddifyForAndroid" element={<HiddifyForAndroid/>}/>
    <Route path="V2rayForAndroid" element={<V2rayForAndroid/>}/>
    <Route path="NekoboxForAndroid" element={<NekoboxForAndroid/>}/>
    <Route path="ShadowForIos" element={<ShadowForIos/>}/>
    <Route path="FoxrayForIos" element={<FoxrayForIos/>}/>
    <Route path="V2boxForIos" element={<V2boxForIos/>}/>
    <Route path="V2rayForWindows" element={<V2rayForWindows/>}/>
    <Route path="ClashMetaForWindows" element={<ClashMetaForWindows/>}/>
    <Route path="NekorayForWindows" element={<NekorayForWindows/>}/>
    <Route path="HiddifyForWindows" element={<HiddifyForWindows/>}/>
    <Route path="V2boxForMac" element={<V2boxForMac/>}/>
    <Route path="ClashForMac" element={<ClashForMac/>}/>
    <Route path="ClashForLinux" element={<ClashForLinux/>}/>
    <Route path="NekorayForLinux" element={<NekorayForLinux/>}/>
    <Route path="StreisandForIos" element={<StreisandForIos/>}/>
    <Route path="StreisandForMac" element={<StreisandForMac/>}/>
    <Route path="BasicTraining" element={<BasicTraining/>}/>
    <Route path="LinkChanging" element={<LinkChanging/>}/>
    <Route path="ConnectToRobot" element={<ConnectToRobot/>}/>
    <Route path="TestSubscription" element={<TestSubscription/>}/>
    <Route path="FAQs" element={<FAQs/>}/>
    <Route path="ShadowRocketMac" element={<ShadowRocketMac/>}/>
</Route>
</Routes>
    </ScrollFromTop>
</BrowserRouter>
  </>
 );
}

export default App;
