import React from "react";


export default function LoadingScreen(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="vh-100 d-flex justify-content-center align-items-center">
                    <div className="spinner-border spinner-border-xl text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </>
    );
}