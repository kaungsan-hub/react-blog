import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Horror', body: 'blah blah blah', author: 'kaungsan', id: 1},
        {title: 'Romance', body: 'asdf asfd asdf asdf', author: 'ks', id: 2},
        {title: 'Politic', body: 'kljkjjklj jkl k kljlk kljj dsd', author: 'ksan', id: 3},
        {title: 'Funny', body: 'blah blah blah', author: 'kaungsan', id: 4},
    ]);
    
    const handleDelete=(id)=>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All list" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog)=> blog.author === 'kaungsan')} title="My list" />
        </div>
     );
}
 
export default Home;