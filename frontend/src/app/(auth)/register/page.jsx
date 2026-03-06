"use client";
import { axiosClient } from '@/utils/AxiosClient';
import React, { useState } from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify';
import CustomAuthButton from '@/components/reuseable/CustomAuthButton';
import Link from 'next/link';
import { useMainContext } from '@/context/MainContext';
import { useRouter } from 'next/navigation';
import Image from "next/image";

const RegisterPage = () => {

  const [loading, setLoading] = useState(false)
  const { fetchUserProfile } = useMainContext()
  const router = useRouter()

  const initialValues = {
    name: '',
    email: '',
    password: '',
    ac_type: ''
  }

  const validationSchema = yup.object({
    name: yup.string().required("Name is Required"),
    email: yup.string().email("Email must be a valid Email").required("Email is Required"),
    password: yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    ac_type: yup.string()
      .oneOf(["saving", "current"], "Account should be Saving or Current")
      .required("Account Type is Required")
  })

  const onSubmitHandler = async (values, helpers) => {
    try {
      setLoading(true)

      const response = await axiosClient.post('/auth/register', values)
      const data = response.data

      toast.success(data?.msg || "Registered Successfully")

      localStorage.setItem("token", data.token)

      await fetchUserProfile()
      router.push("/")
      helpers.resetForm()

    } catch (error) {
      toast.error(error?.response?.data?.msg || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-gray-100 px-4">

      <div className="w-full max-w-5xl flex flex-col lg:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden">

        {/* Left Image Section */}
        <div className="hidden lg:block relative w-1/2 min-h-[500px]">
          <Image
            src="/kono-register.png"
            alt="Kono Bank Register"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 px-8 py-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmitHandler}
          >
            <Form>

              <h2 className="text-3xl font-bold text-center text-gray-800">
                Create Your Account
              </h2>

              <p className="text-center text-gray-500 mb-8 text-sm">
                Join Kono Bank & start smart banking
              </p>

              <div className="mb-4">
                <Field
                  type="text"
                  name="name"
                  className="w-full py-3 px-4 rounded-lg border outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter Your Name"
                />
                <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <Field
                  type="email"
                  name="email"
                  className="w-full py-3 px-4 rounded-lg border outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter Your Email"
                />
                <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <Field
                  type="password"
                  name="password"
                  className="w-full py-3 px-4 rounded-lg border outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter Your Password"
                />
                <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-5">
                <Field
                  as="select"
                  name="ac_type"
                  className="w-full py-3 px-4 rounded-lg border outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select Account Type</option>
                  <option value="saving">Saving</option>
                  <option value="current">Current</option>
                </Field>
                <ErrorMessage name="ac_type" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-6">
                <CustomAuthButton
                  isLoading={loading}
                  text="Register"
                  type="submit"
                />
              </div>

              {/* Centered Login Text */}
              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?
                <Link
                  href="/login"
                  className="text-purple-600 font-semibold ml-2 hover:underline"
                >
                  Login
                </Link>
              </p>

            </Form>
          </Formik>
        </div>

      </div>
    </div>
  )
}

export default RegisterPage;