import React from "react";
import ResetPassword from "../../views/ResetPassword";
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        type="button"
        className="btn_reinitialiser"
        onClick={() => setShowModal(true)}
      >
        Réinitialiser
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto  my-12 mx-auto ">
              <div className="">
                <button className="x" onClick={() => setShowModal(false)}>
                  <span className="">×</span>
                </button>
                <div className="bobyModal ">
                  <ResetPassword />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
