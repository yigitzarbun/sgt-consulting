import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./styles.module.scss";
import emailjs from "emailjs-com";

emailjs.init("vR-TZXFb4CC3SnQKa");

type FormValues = {
  fname: string;
  lname: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (formData: FormValues) => {
    const templateParams = {
      from_name: formData.fname + " " + formData.lname,
      message: formData.message,
      to_email: "yigitzarbun@hotmail.com",
    };
    try {
      emailjs.send("service_7bsr1er", "template_mn0e4ld", templateParams).then(
        (response) => {
          console.log("Email sent successfully!", response);
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles["form-container"]}
    >
      <div className={styles["input-outer-container"]}>
        <div className={styles["input-container"]}>
          <label>First Name</label>
          <input {...register("fname", { required: true })} type="text" />
          {errors.fname && (
            <span className={styles["error-field"]}>
              First Name is required
            </span>
          )}
        </div>
        <div className={styles["input-container"]}>
          <label>Last Name</label>
          <input {...register("lname", { required: true })} type="text" />
          {errors.lname && (
            <span className={styles["error-field"]}>Last name is required</span>
          )}
        </div>
      </div>
      <div className={styles["input-outer-container"]}>
        <div className={styles["input-container"]}>
          <label>Email</label>
          <input {...register("email", { required: true })} type="email" />
          {errors.email && (
            <span className={styles["error-field"]}>Email is required</span>
          )}
        </div>
        <div className={styles["input-container"]}>
          <label>Subject</label>
          <input {...register("subject", { required: true })} type="text" />
          {errors.subject && (
            <span className={styles["error-field"]}>Subject is required</span>
          )}
        </div>
      </div>
      <div className={styles["message-container"]}>
        <label>Leave us a message..</label>
        <textarea {...register("message", { required: true })} />
        {errors.message && (
          <span className={styles["error-field"]}>Message is required</span>
        )}
      </div>
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};
export default ContactForm;
