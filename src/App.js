import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";

export default function App() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Headers />
      <input
        {...register("firstName", { required: true }, { pattern: /[A-Za-z]/ })}
        placeholder="First name"
      />
      <input
        {...register("middlename", { required: false })}
        placeholder="Middle name"
      />
      <input
        {...register("lastName", { required: true })}
        placeholder="Last name"
      />
      <input
        {...register("age", { required: true, min: 1, max: 25 })}
        placeholder="Age"
      />
      <input
        {...register("dob.year", { min: 1996, max: 2020 })}
        placeholder="Year"
      />
      <input {...register("dob.month")} placeholder="Month" />
      <input {...register("dob.day")} placeholder="Date" />
      <input {...register("address[0]")} placeholder="Address Line 1" />
      <input {...register("address[1]")} placeholder="Address Line 2" />
      <input {...register("matrix[0][0]")} placeholder="Enter a number 1" />
      <input {...register("matrix[0][1]")} placeholder="Enter a number 2" />
      <input {...register("matrix[1][0]")} placeholder="Enter a number 3" />
      <input {...register("matrix[1][1]")} placeholder="Enter a number 4" />

      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>
      <select {...register("gender")}>
        <option value="">Select your gender...</option>
        <option value="f">Female</option>
        <option value="m">Male</option>
        <option value="o">Other</option>
      </select>

      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
