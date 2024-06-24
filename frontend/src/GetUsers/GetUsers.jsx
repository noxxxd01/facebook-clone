import axios from "axios";
import { useEffect, useState } from "react";

const GetUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://facebook-clone-96xo.onrender.com/users/fetch-users');
                console.log(response)
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, []);
  return (
    <table>
        <thead>
            <tr>
                <td>Email</td>
                <td>Password</td>
                <td>CreatedAt</td>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <tr key={user._id}>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{new Date(user.createdAt).toLocaleString()}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default GetUsers