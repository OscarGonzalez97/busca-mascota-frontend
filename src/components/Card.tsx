import { Link } from "react-router-dom"
import { ResultAdopciones } from "../helper/types"
import { APP_ROUTES } from "../helper/utility"
import { useEffect } from "react"


const Card = ({ adopcion }: { adopcion: ResultAdopciones }) => {

    return (
        <>

            <div className="col d-flex align-items-stretch mb-3">
                <div className="card rounded-4 w-100 shadow">
                    <div className="card-image">
                        <img src={adopcion.picture} className="object-fit-cover w-100 h-100 rounded-top-4" alt={adopcion.name} />
                    </div>
                    <div className="card-body">
                        <h5 className="text-center">
                            <Link className="text-dark fw-bold" to={APP_ROUTES.DETALLE_ADOPCION + adopcion.id}>{adopcion.specie.toUpperCase() == 'OTRO' ? 'ANIMAL' : adopcion.specie.toUpperCase()} EN ADOPCIÓN</Link>
                        </h5>
                        <div >
                            {/* Edad y sexo */}
                            {(adopcion.name || adopcion.age) &&
                            <p>
                                <i className="fa fa-paw me-2"></i>
                                {adopcion.name && adopcion.name} {adopcion.age && ' tiene aprox. : ' + adopcion.age + '.'}
                            </p>}

                            {/* Sexo */}
                            <p>
                                <i className="bi bi-gender-ambiguous me-2"></i>
                                Sexo: {adopcion.sex}
                            </p>

                            {/* Descripcion */}
                            {adopcion.description &&
                                <p>
                                    <i className="fa fa-paw me-2"></i>
                                    {adopcion.description}
                                </p>}

                            {/* Contacto */}
                            {(adopcion.phone) &&
                                <p>
                                    <i className="bi bi-telephone-outbound-fill me-2"></i>
                                    Contactar al {adopcion.phone}
                                </p>}

                        </div>

                    </div>
                    <div className="card-footer d-grid">
                        <Link className="btn btn-sm btn-warning amarillo" to={APP_ROUTES.DETALLE_ADOPCION + adopcion.id}>
                            Ver reporte completo
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card