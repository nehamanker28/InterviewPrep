import { useEffect, useState } from "react";
import NetInfo from '@react-native-community/netinfo';


function useOnlineStatus() {
    const [isOnline,setIsOnline] = useState(true)

    useEffect(() => { 
        const unsubscribe = 
       
        NetInfo.addEventListener(state => {
            //console.log('NetInfo state:', state);
            setIsOnline(state.isConnected ?? true)});
        //attaching a event lister and return a function called unsubscribe 
        //,whose work is to clear the listener event when component unmount
        return () => unsubscribe();
    },[isOnline])//empty array means useeffect will run only once when component mounts.
    return isOnline;
}
export default useOnlineStatus;