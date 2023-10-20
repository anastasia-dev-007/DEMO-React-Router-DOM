import { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import { getPosts } from "./posts.api";

function Posts() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const items = await getPosts();
            setItems(items);
        }

        fetchPosts();
    }, []);
    
    return (
        <section>
             {
        items.length === 0 
        ? <p>Loading...</p> 
        : items.map(item => (<Post
            key={item.id}
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
            image={item.image}
            footerDescription={item.footerDescription} />))
    }

        </section>
    );
}

export default Posts;