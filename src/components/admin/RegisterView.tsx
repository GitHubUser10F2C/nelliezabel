import React from 'react'

const RegisterView = ({ submitHandler }:any) => {
    return (
        <div>
            <div className=" flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto   lg:max-w-xl">
                <div className=' card-bordered border-neutral px-10 py-20 rounded-3xl border-2 '>
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-cyan-500">
                        Agregar Usuario
                        </h2>
                    </div>	

                    <div className='card-body'> 
                        <form onSubmit={submitHandler}>
                            <div className="-space-y-px rounded-md shadow-sm">
                                <label>
                                    Nombre:
                                <input type="text" id="name" required autoComplete="Nombre" className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
                                </label>
                                <br></br>

                                <label>
                                    Rut:
                                <input type="text" id="rut" required autoComplete="Rut" className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
                                </label>
                                <br></br>

                                <label>
                                    Correo electrónico:
                                <input type="email" id="email" required autoComplete="Correo Electronico" className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
                                </label>
                                <br></br>

                                
                                <select id="rol" className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Rol del Usuario</option>
                                    <option value="Administrador">Administrador</option>
                                    <option value="Consultor">Consultor</option>
                                </select>

                                <div className='flex flex-col items-center'>
                                    <button type="submit" className="btn btn-wide">Registrar</button>

                                </div>  
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RegisterView