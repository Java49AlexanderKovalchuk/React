import { authActions } from "../../redux/auth-slice";
import {useDispatch} from 'react-redux'
import { Button } from "@mui/material";
export const Logout: React.FC = ()=>{
    const dispatch = useDispatch<any>();
    return <Button onClick={() => dispatch(authActions.logout())}>Logout</Button>
}
