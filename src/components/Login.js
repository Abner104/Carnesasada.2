import React from "react";

const Login = () => {
  return (
    <>
      <button
        type="button"
        class="btn btn-outline-primary ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
       <span className="fa fa-sign-in me-1"></span> Login
      </button>

      <div
        class="modal fade"
        id="loginModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
             Login
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
                <button className="btn btn-primary w-100 mb-4">
                    <span className="fa fa-google me-2"></span>Ingresa con Google
                </button>
                <button className="btn btn-primary w-100 mb-4">
                    <span className="fa fa-facebook me-2"></span>Ingresa con Facebook
                </button>
              <form>
                <div class="mb-3">
                  <label htmlfor="exampleInputEmail1" class="form-label">
                    Correo electronico
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    example@
                  </div>
                </div>
                <div class="mb-3">
                  <label htmlfor="exampleInputPassword1" class="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-1 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" htmlfor="exampleCheck1">
                    Recordar
                  </label>
                </div>
                <button type="submit" class="btn btn-outline-primary w-100 mt-5">
                  Entrar
                </button>
              </form>
            </div>
            <div class="modal-footer">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
