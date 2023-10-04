export default function Announcement(){
    return (
        <>
            <section className={"row my-5 py-4"}>
                <div className={"col-md-6 mb-3"}>
                    <h3 className={"display-4 mb-3"}>Summary Title</h3>
                    <p className={"text-muted"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className={"col-md-6 mb-3"}>
                    <img src={"https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"} 
                        className={"img-fluid w-100 shadow-lg rounded"} 
                        alt={"summary title"} 
                    />
                </div>
            </section>
        </>
    )
}