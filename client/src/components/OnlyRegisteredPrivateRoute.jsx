import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"

export default function OnlyRegisteredPrivateRoute() {
    const {currentUser } = useSelector((state) => state.user);
  return currentUser && currentUser.isRegistered ? (
    <Outlet/> 
   ) : ( 
     <Navigate to='/sign-in'/>
   );
}
