
import './App.css'
import { useForm } from 'react-hook-form'
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm()
 

  async function onSubmit(data) {
     await new Promise((resolve)=>setTimeout(resolve,5000));
     console.log("Form is Submitting", data);
     
  }
  
  return (
    <> 
     <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input{...register('firstName',
          {required:true,
         minLength:{value:3,message:"Min length alleast 3"},
          maxLength:{value:8,message:"Max length atmost 8"}})}
        />
        {errors.firstName && <p style={{color:"red"}}>{errors.firstName.message}</p>}

      </div>
      <br/>
      <div>
        <label>Middle Name:</label>
        <input {...register('middleName')}/>
      </div>
      <br/>
      <div>
        <label>Last Name:</label>
        <input {...register('lastName',{
          pattern:{
            value: /^[A-Za-z]+$/i ,
            message:"Last  Name is not as per the rules"
          }
        })}
        
        />
        {errors.lastName && <p style={{color:"red"}}>{errors.lastName.message}</p>}
      </div>
      <br/>
      <input type='submit' disabled={isSubmitting}
      value={isSubmitting ? "Submitting":"Submit"}
      />
     </form>
    </>
  )
}

export default App
