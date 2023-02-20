const Create = () => {
    

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                />
                <label>Content</label>
                <textarea
                required
                ></textarea>
                <label>Author</label>
                <select>
                    <option value="marlin">Marlin</option>
                    <option value="gianttrevally">Giant Trevally</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;