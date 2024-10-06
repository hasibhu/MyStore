

const Loading = () => {
    return (
        <div>
            <h4 className="h-screen flex justify-center items-center">
                {/* <span className="loading loading-ring loading-lg text-5xl font-bold text-red-600"></span> */}
                <span className="loading loading-spinner loading-lg text-red-600"></span>
            </h4>
        </div>
    );
};

export default Loading;