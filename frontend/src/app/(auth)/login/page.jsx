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

const LoginPage = () => {

  const [loading, setLoading] = useState(false)
  const { fetchUserProfile } = useMainContext()
  const router = useRouter()

  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = yup.object({
    email: yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
    password: yup.string()
      .required("Password is required"),
  })

  const onSubmitHandler = async (values, helpers) => {
    try {
      setLoading(true)

      const response = await axiosClient.post('/auth/login', values)
      const data = response.data

      toast.success(data?.msg || "Login Successful")

      localStorage.setItem("token", data.token)

      await fetchUserProfile()
      router.push("/")
      helpers.resetForm()

    } catch (error) {
      toast.error(error?.response?.data?.msg || "Login Failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4">

      <div className="w-full max-w-6xl flex flex-col lg:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">

        {/* Left Image Section */}
        <div className="hidden lg:block relative w-1/2 min-h-[550px]">
          <Image
            src="/kono-register.png"
            alt="Kono Bank Login"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-10 py-14">

          <div className="w-full max-w-md">

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmitHandler}
            >
              <Form>

                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Welcome Back 👋
                  </h2>

                  <p className="text-gray-500 mt-2 text-sm">
                    Sign in to your Kono Bank account
                  </p>
                </div>

                {/* Email */}
                <div className="mb-5">
                  <Field
                    type="email"
                    name="email"
                    className="w-full py-3 px-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Password */}
                <div className="mb-6">
                  <Field
                    type="password"
                    name="password"
                    className="w-full py-3 px-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Button */}
                <div className="mb-6">
                  <CustomAuthButton
                    isLoading={loading}
                    text="Sign In"
                    type="submit"
                  />
                </div>

                {/* Register Link */}
                <p className="text-center text-sm text-gray-600">
                  Don’t have an account?
                  <Link
                    href="/register"
                    className="text-indigo-600 ml-1 font-medium hover:underline"
                  >
                    Create Account
                  </Link>
                </p>

              </Form>
            </Formik>

          </div>

        </div>

      </div>
    </div>
  )
}

export default LoginPage;