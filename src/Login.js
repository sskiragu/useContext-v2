import { Button } from '@mui/material';
import { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import Dashboard from './Dashboard';

function Login() {
const { isAuthenticated,login, logout } = useContext(AuthContext);


return (
<div>
    <Button onClick={() => login()}>Login</Button>
    <Button onClick={() => logout()}>Logout</Button>
    {console.log(isAuthenticated)}
    {isAuthenticated ? <Dashboard />: <p>Login to proceed.</p>}
</div>
);
}

export default Login;