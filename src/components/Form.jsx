import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({ setCard, setToggle, edit, setEdit, card }) => {
  const input = useForm({
    defaultValues: edit,
    mode: "onChange,",
  });
  // console.log(input);
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = input;
  let submit = (data) => {
    if (edit) {
      // it handles the update logic
      setCard((prev) => {
        let ar = prev.map((val) => {
          return val.id === edit.id ? { ...val, ...data } : val;
        });
        localStorage.setItem("user", JSON.stringify(ar));
        return ar;
      });
      setEdit(null);
    } else {
      // it add new card in the array
      let array = [...card, { ...data, id: nanoid() }];
      setCard(array);
      localStorage.setItem("user", JSON.stringify(array));
    }

    reset(edit);
    setToggle((prev) => !prev);
  };
  return (
    <div className="flex flex-col justify-center items-center text-white px-3 py-4 gap-3">
      <form
        onSubmit={handleSubmit(submit)}
        action=""
        className="flex flex-col gap-3 bg-[#30302e] w-full sm:w-[90%] md:w-[70%] lg:w-[45%] xl:w-[35%] p-4 rounded-xl"
      >
        <h1 className="text-center text-xl font-bold">Add Member</h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-sm font-semibold text-[#faf9f5]" htmlFor="">
              First
            </label>

            <input
              {...register("fname", { required: "Please fill this field" })}
              className="border border-[#484844] p-2 border rounded w-full"
              type="text"
              placeholder="first Name"
            />
            {errors.fname && (
              <p className="text-sm font-semibold text-red-700">
                {errors.fname.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 w-full">
            <label className="text-sm font-semibold text-[#faf9f5]" htmlFor="">
              Last Name
            </label>
            <input
              {...register("lname", { required: "Please fill this field" })}
              className="border border-[#484844] p-2 border rounded w-full"
              type="text"
              placeholder="last Name"
            />
            {errors.fname && (
              <p className="text-sm font-semibold text-red-700">
                {errors.fname.message}
              </p>
            )}{" "}
          </div>
        </div>

        <label className="text-sm font-semibold text-[#faf9f5]" htmlFor="">
          Email
        </label>
        <input
          {...register("mail", { required: "please fill this filed" })}
          className="border border-[#484844] p-2 border rounded w-full"
          type="text"
          placeholder="email"
        />
        {errors.fname && (
          <p className="text-sm font-semibold text-red-700">
            {errors.fname.message}
          </p>
        )}
        <label className="text-sm font-semibold text-[#faf9f5]" htmlFor="">
          Role
        </label>
        <select
          {...register("role", { required: "please fill this field" })}
          className="border border-[#484844] p-2 border rounded w-full"
          id="role"
        >
          <option className="bg-[#30302e] text-white" value="Designer">
            Desinger
          </option>
          <option className="bg-[#30302e] text-white" value="Developer">
            Developer
          </option>
          <option className="bg-[#30302e] text-white" value="Tester">
            Tester
          </option>
          <option className="bg-[#30302e] text-white" value="Devops">
            Devops
          </option>
        </select>
        {errors.fname && (
          <p className="text-sm font-semibold text-red-700">
            {errors.fname.message}
          </p>
        )}
        <label className="text-sm font-semibold text-[#faf9f5]" htmlFor="">
          Skills
        </label>
        <input
          {...register("skills", { required: "please fill this filed" })}
          className="border border-[#484844] p-2 border rounded w-full"
          type="text"
          placeholder="Skills"
        />
        {errors.fname && (
          <p className="text-sm font-semibold text-red-700">
            {errors.fname.message}
          </p>
        )}
        <button className="border border-[#484844] p-2 rounded">
          Add Member
        </button>
      </form>
    </div>
  );
};

export default Form;
