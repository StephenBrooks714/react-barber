export default function Card(){
    return (
        <>
            <section className={"container my-4 py-3"}>
                <div className={"row text-center"}>
                    <div className={"col-md-4 p-3"}>
                        <article className={"card"}>
                            <div className={"card-body"}>
                                <img src={"https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"}
                                    alt={"male hair cuts"}
                                    className={"img-fluid mb-2"}
                                />
                                <h5 className={"fw-bold"}>
                                    Male Haircuts
                                </h5>
                            </div>
                        </article>
                    </div>
                    <div className={"col-md-4 p-3"}>
                        <article className={"card"}>
                            <div className={"card-body"}>
                                <img src={"https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"}
                                    alt={"male hair cuts"}
                                    className={"img-fluid mb-2"}
                                />
                                <h5 className={"fw-bold"}>
                                    Women Haircuts
                                </h5>
                            </div>
                        </article>
                    </div>
                    <div className={"col-md-4 p-3"}>
                        <article className={"card"}>
                            <div className={"card-body"}>
                                <img src={"https://wtop.com/wp-content/uploads/2018/01/ThinkstockPhotos-680907176.jpg"}
                                    alt={"male hair cuts"}
                                    className={"img-fluid mb-2"}
                                />
                                <h5 className={"fw-bold"}>
                                    Children Haircuts
                                </h5>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}