import { FormikProvider, useFormik } from 'formik'
import React, { useState } from 'react'
import TextInput from '../TextInput'
import { PredictService } from "../../service/predict.service"
import { useMutation } from 'react-query'
import Modal from '../Modal'

const HeartCheckerForm = () => {
  const [step, setStep] = useState(1)
  const [response, setResponse] = useState("1")
  const [show, setShow] = useState(false)


  const form = useFormik(
    {
      initialValues: {
        age: 0,
        sex: 0,
        cp: 0,
        trestbps: 0,
        chol: 0,
        fbs: 0,
        restecg: 0,
        thalach: 0,
        exang: 0,
        oldpeak: 0,
        slope: 0,
        ca: 0,
        thal: 0
      },
      onSubmit: (val) => {
        handlePredict.mutate(val)
      }
    }
  )

  const handlePredict = useMutation(
    async (values) => {


      return await PredictService.predict(values);
    },
    {
      onSuccess: (response) => {
        console.log(response);
        form.setSubmitting(false)
        setShow(true)


      },
      onError: (err) => {
        form.setSubmitting(false)
      },
    }
  );

  const handleSubmit = () => {
    if (step === 3) {
      form.handleSubmit()
    } else {
      setStep((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (step <= 1) {
      return
    }
    else {
      setStep((prev) => prev - 1)
    }
  }

  return (
    <div className='lg:w-[450px] lg:h-[655px] w-full h-screen rounded bg-white px-6 py-5 '>
      <Modal onClick={() => {
        setResponse("")
        setShow(false)
      }} open={show}>
        <div className='w-[450px] h-[250px] text-center text-sm bg-white rounded px-6 flex items-center justify-center'>
          {
            response == "0" ?
              <div>
                <span className='text-4xl'>🎉</span>
                <h3>Congratulations! According to the analysis, there doesn't seem to be any indication of heart disease. However, it's still essential to maintain a healthy lifestyle and regular check-ups with your healthcare provider. </h3>
              </div>
              : <div>
                <span className='text-4xl'>🚑</span>
                <h3>Based on the data provided, it seems there may be a risk of heart disease. It's important to consult with a doctor for further evaluation and guidance. </h3>
              </div>
          }
        </div>
      </Modal>
      <div className='flex mt-12 lg:mt-0 items-center justify-between'>
        <div>
          <h3 className='text-2xl font-semibold'>Heart Disease Checker</h3>
          <h4 className='text-sm text-gray-500 mt-3'>Fill in your health score</h4>
        </div>
        <span className='text-sm text-gray-500'>{step} of 3</span>


      </div>
      <FormikProvider value={form}>
        <form onSubmit={form.handleSubmit}>
          {
            step === 1 && (
              <div>

                <TextInput {...form.getFieldProps("age")} type="number" label={"Age"} placeholder="Enter your Age" />
                <div className='flex flex-col my-3'>
                  <label

                    className='text-sm mb-1 font-normal font-satoshiRegular capitalize'
                  >
                    Sex
                  </label>
                  <select {...form.getFieldProps("sex")} className='w-full text-xs h-[44px] px-3 py-2.5 focus:outline-none rounded-lg bg-white border '>
                    <option >Select your Sex</option>
                    <option value={1}>Male</option>
                    <option value={0}>Female</option>
                  </select>
                </div>
                <TextInput {...form.getFieldProps("cp")} type="number" max={4} label={"chest pain type"} placeholder="Enter your chest pain type" />
                <TextInput {...form.getFieldProps("trestbps")} type="number" label={"resting blood pressure"} placeholder="Enter your resting blood pressure" />
              </div>
            )
          }

          {
            step === 2 && (
              <div>

                <TextInput {...form.getFieldProps("chol")} type="number" label={"serum cholestoral in mg/dl "} placeholder="Enter your serum cholestoral" />
                <TextInput {...form.getFieldProps("fbs")} type="number" label={"fasting blood sugar im mm Hg "} placeholder="Enter your fasting blood sugar" />
                <TextInput {...form.getFieldProps("restecg")} type="number" max={3} label={"resting electrocardiographic results"} placeholder="Enter your resting electrocardiographic results" />
                <TextInput {...form.getFieldProps("thalach")} type="number" label={"maximum heart rate achieved "} placeholder="Enter your maximum heart rate achieved " />
              </div>
            )
          }
          {
            step === 3 && (
              <div>

                <TextInput {...form.getFieldProps("exang")} type="number" label={"exercise induced angina "} placeholder="Enter your exercise induced angina" />
                <TextInput {...form.getFieldProps("oldpeak")} type="number" label={"oldpeak (ST depression induced by exercise relative to rest)"} placeholder="Enter your Oldpeak" />
                <TextInput {...form.getFieldProps("slope")} type="number" label={"slope of the peak exercise ST segment "} placeholder="Enter your slope of the peak exercise ST segment" />
                <TextInput {...form.getFieldProps("ca")} type="number" max={3} label={"number of major vessels (0-3) colored by flourosopy "} placeholder="Enter your number of major vessels" />
                <TextInput {...form.getFieldProps("thal")} type="number" label={"thal: 1 = normal; 2 = fixed defect; 3 = reversable defect"} placeholder="Enter your thal" />
              </div>
            )
          }


          <button type='button' onClick={handleSubmit} className=' w-full border my-3 bg-purple-600 text-white rounded px-3 text-sm  py-2 h-[48px]'>{step == 3 ? "Submit" : "Next"}</button>
          <button type='button' onClick={handlePrevious} disabled={step === 1} className=' w-full border bg-white rounded px-3 text-sm  py-2 h-[48px]'>Previous</button>

        </form>

      </FormikProvider>

    </div>
  )
}



export default HeartCheckerForm