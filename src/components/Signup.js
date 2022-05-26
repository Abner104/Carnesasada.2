import React from 'react'

const Signup = () => {
  return (
    <div>
        <button
        type="button"
        class="btn btn-outline-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
       <span className="fa fa-user-plus me-1"></span> Registrar
      </button>

      <div
        class="modal fade"
        id="signupModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
             Registro
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
                    <span className="fa fa-google me-2"></span>Registrate con Google
                </button>
                <button className="btn btn-primary w-100 mb-4">
                    <span className="fa fa-facebook me-2"></span>Registrate con Facebook
                </button>
              <form>
                <div class="mb-3">
                  <label htmlfor="exampleInput" class="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label htmlfor="exampleInputEmail" class="form-label">
                    Correo electronico
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput"
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
                
                <button type="submit" class="btn btn-outline-primary w-100 mt-5">
                  Registrar
                </button>
              </form>
            </div>
            <div class="modal-footer">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup