import React, {useState} from "react";
import { createNewUser } from "../db/users";

export default function NewUserCreationModal(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleOnGetStarted = () => {
        createNewUser(props.user.accessToken, props.user.uid, firstName, lastName)
        .then((res) => {
            console.log(res.data);
            window.location.reload();
        }).catch(e => {
            console.error(e);
        });
        setFirstName("");
        setLastName("");
    };

    return (
        <>
            <div className="setupAccountModal modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Setup your account to get started</h5>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="form-label">First Name</div>
                                <input
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Zakwan"
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                />
                            </div>
                            <div>
                                <div className="form-label mt-3">Last Name</div>
                                <input
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Ashfaq"
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={handleOnGetStarted} className="btn btn-primary">Get started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}