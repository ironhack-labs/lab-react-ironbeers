import { Form } from "../components"
import './NewBeer.styles.css'
import { createBeer } from "../services/postData"

export const NewBeer = () => {

  const submitForm = async(data) => {
    try {
      delete data.formValues
      const body = {
        ...data
      }
      body.atenuation_level = Number(body.atenuation_level)
      await createBeer(body)
    }catch(e) {
      console.log(e)
    }
  }

  return(
    <main>
      <Form submitForm={submitForm} />

    </main>
  )
}