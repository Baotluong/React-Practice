import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users/1";

const Fetch = () => {
    const [user, setUser] = useState({});
    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {user.name}
        </div>
    );
};

export default Fetch;
