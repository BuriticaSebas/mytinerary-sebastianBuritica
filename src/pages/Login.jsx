import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { loginUser } from '../redux/actions/Auth';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';



export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();


  const {login} = useSelector((state)=> state.auth)
  const dispatch = useDispatch()

  const onSubmit = async (data) => {
    
    const resultAction = await dispatch(loginUser(data)) ;

      if (loginUser.fulfilled.match(resultAction)){
       
          navigate("/")
      }else{
        toast.error('Hubo un error', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
  };

  return (
    <>
        <ToastContainer></ToastContainer>
    <div className="min-h-screen p-3 flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-black text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
          <input
            type="email"
            placeholder="Correo electrónico"
            {...register('email', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: 'Ingresa un correo electrónico válido'
              }
            })}
            className="w-full p-2 border rounded-md border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Contraseña"
            {...register('password', {
              required: 'Este campo es obligatorio',
              minLength: {
                value: 8,
                message: 'La contraseña debe tener al menos 8 caracteres'
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                message: 'La contraseña debe tener al menos una mayúscula, una minúscula y un número'
              }
            })}
            className="w-full p-2 border rounded-md border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <button
            type="submit"
            className="w-1/2 m-auto bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition"
          >
          Submit
           </button>
        </form>

        <div className="text-center mt-4">
          <p className="font-bold text-gray-600">¿No tienes una cuenta?</p>
          <p className="text-gray-300 hover:text-gray-400"><Link to = "/register">Registrate</Link></p>
        </div>
      </div>
    </div>
    </>

  );
}

