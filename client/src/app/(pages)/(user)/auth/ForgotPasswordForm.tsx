import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Loader2 } from "lucide-react";
import InputField from "./InputField";
import axios from "axios";
import { ForgotPasswordFormProps } from "@/type";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ForgotPasswordForm({
  handleLoading,
  setAuthMode,
}: ForgotPasswordFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const onSubmit: SubmitHandler<{ email: string }> = async (data) => {
    setIsSubmitting(true);
    handleLoading(true);
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/forgot-password`,
        data
      );
      if (result.status === 200) {
        toast.success(
          "Password reset instructions have been sent to your email."
        );
        setAuthMode("login");
      } else {
        toast.error(
          result.data.message ||
          "Failed to process your request. Please try again."
        );
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
      handleLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <InputField
        id="forgot-password-email"
        type="email"
        label="Email"
        placeholder="Enter your email..."
        icon={<Mail className="h-4 w-4 text-gray-500" />}
        register={register}
        name="email"
        errors={errors}
        validationRules={{
          required: "Email is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please enter a valid email address",
          },
        }}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
      >
        {isSubmitting ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="h-4 w-4" />
          </motion.div>
        ) : (
          "Send Reset Instructions"
        )}
      </Button>
    </motion.form>
  );
}