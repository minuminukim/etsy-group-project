import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
    const { userId } = useParams()
    const [products, setProducts] = useState([])
    const [purchases, setPurchases] = useState([])

    async function fetchUserData() {
        const response = await fetch(`/api/users/${userId}`);
        // waits until the request completes...
        const data = await response.json();
        console.log(data)
        setProducts(data["products"])
      }

    //   fetchUserData()

    useEffect(() => {
        fetchUserData()
    }, [])
    console.log(products)

    return (
        <>
            <h1>user profile</h1>

            <div>
                {products.map(review => (
                    <>
                    <div>{review.title}</div>
                    <div>{review.price}</div>
                    </>
                ))}
            </div>
            <div>
            {purchases.map(review => (
                    <>
                    <div>{review.title}</div>
                    <div>{review.price}</div>
                    </>
                ))}
            </div>
        </>
    )
}

export default UserProfile;
