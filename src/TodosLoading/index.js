import "./loading.css";

function TodosLoading() {
    return (
        <div
            id="loading"
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
        >
            <div className="loader"></div>
        </div>
    );
}

export { TodosLoading };
