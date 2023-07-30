
import { ReactDOM,React } from "react";
import "./App.css";
import Main from "./Componets/Main/Main";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import MenuMain from "./Componets/Menu/MenuMain";
import Subscription from "./Componets/otherPages/Sub/Subscription";
import Learning from "./Componets/otherPages/Learn/Learning";
import ClashForAndroid from "./Componets/Apps/Android/ClashForAndroid";
import HiddifyForAndroid from "./Componets/Apps/Android/HiddifyForAndroid";
import V2rayForAndroid from "./Componets/Apps/Android/V2rayForAndroid";
import MatsuriForAndroid from "./Componets/Apps/Android/MatsuriForAndroid";
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

function App() {
 return(
  <>
<BrowserRouter>
<Routes>
<Route path="/" element={<MenuMain/>}>
<Route index element={<Main/>}/>
<Route path="Learning" element={<Learning/>}/>
<Route path="Subscription" element={<Subscription/>}/>
    <Route path="ClashForAndroid" element={<ClashForAndroid/>}/>
    <Route path="HiddifyForAndroid" element={<HiddifyForAndroid/>}/>
    <Route path="V2rayForAndroid" element={<V2rayForAndroid/>}/>
    <Route path="MatsuriForAndroid" element={<MatsuriForAndroid/>}/>
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
</Route>
</Routes>
</BrowserRouter>
  </>
 );
}

export default App;
