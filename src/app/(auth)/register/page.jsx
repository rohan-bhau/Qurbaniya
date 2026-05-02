"use client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  Separator,
  Spinner,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { playfair, poppins } from "@/fonts/font";
import { FcGoogle } from "react-icons/fc";
import { BsPersonFillAdd } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-clinet";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false)
  const router = useRouter()
    const { register, handleSubmit } = useForm();


  const onSubmit = async (data) => {
    setLoading(true)
    console.log(data)
    const {name, email, image, password}=data


    const { data:res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: image,
      // callbackURL: "/",
    });

    console.log(res, error)

    if (error) {
      toast.error(`${error.message}`);
      setLoading(false)
    }
    if (res) {
      toast.info("SignUp Successfull!")
      //  setTimeout(() => {
         router.push("/");
      //  }, 1500);
    }
  };
  return (
    <div className=" flex justify-center items-center min-h-screen px-5 py-5">
      <div className="bg-[#fdfdfd]  px-5 py-12 rounded-lg border w-full max-w-[450px]">
        <div className="flex justify-center items-center mb-2 p-4 rounded-full w-fit mx-auto bg-[#ecf4ef]">
          <BsPersonFillAdd className="text-7xl text-[#036832]" />
        </div>
        <h2
          className={`${playfair.className} font-bold text-center text-2xl mb-3`}
        >
          Create An Account
        </h2>{" "}
        <Form
          className="flex w-full flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label className="text-md">Name</Label>
            <Input {...register("name")} className={"rounded-md"} placeholder="John Doe" />
            <FieldError />
          </TextField>

          {/* email */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-md">Email Address</Label>
            <Input
              {...register("email")}
              className={"rounded-md"}
              placeholder="john@example.com"
            />
            <FieldError />
          </TextField>

          {/* image url */}
          <TextField name="image" className="w-full">
            <Label>Photo URL</Label>
            <Input {...register("image")} className={"rounded-md"} placeholder="https://example.com" />
          </TextField>

          {/* password */}
          <TextField
            className="w-full"
            name="password"
            isRequired
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-md">Password</Label>
            <InputGroup>
              <InputGroup.Input
                className="w-full rounded-md"
                {...register("password")}
                type={isVisible ? "text" : "password"}
                placeholder="Enter Your Password"
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          {/*  button */}
          <Button
  type="submit"
  disabled={loading}
  className="w-full py-4 text-lg rounded-lg bg-[#036832] hover:bg-[#03582b] flex items-center justify-center gap-2"
>
  {loading && <Spinner size="sm" color="white" />}
  {loading ? "Creating..." : "Register"}
</Button>

          <div className="grid grid-cols-4 gap-3 mb-3">
            <Separator
              className="my-2"
              render={(props) => <div {...props} data-custom="foo" />}
            />
            <p className="text-xs col-span-2 text-center">or continue with</p>
            <Separator
              className="my-2"
              render={(props) => <div {...props} data-custom="foo" />}
            />
          </div>

          <Button
            variant="outline"
            className="border w-full  py-3 flex items-center justify-center hover:bg-[#036832] hover:text-[#ffffff] cursor-pointer rounded-lg font-semibold transition gap-3 mb-3"
          >
            <FcGoogle className="text-2xl" />
            <p>Continue with Google</p>
          </Button>

          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link href={"/signin"} className="font-semibold text-[#036832]">
              LogIn
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
