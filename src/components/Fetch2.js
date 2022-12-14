import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users/1";

const Fetch = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(url);
            const userData = await response.json();
            setUser(userData);
        };
        fetchUser();
    }, []);

    return (
        <div>
            {user.name}
        </div>
    );
};

export default Fetch;
