import React, { useState } from 'react';
import { loginTask } from '../api/base.api';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state
        try {
            const response = await loginTask(username, password);
            console.log('Login successful:', response.data);
            // Aquí puedes guardar el token en el estado global, en el contexto o en el local storage
            localStorage.setItem('token', response.data.token);
            // Redireccionar al usuario o actualizar el estado de la aplicación
            navigate('/home')
        } catch (error) {
            console.error('Login error:', error);
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;