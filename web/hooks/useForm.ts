import { type z } from "zod";
import {
  useForm as useReactHookForm,
  type UseFormProps,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const useForm = <S extends z.ZodTypeAny, TContext = any>(
  schema: S,
  props: UseFormProps<z.infer<S>, TContext>
) => {
  const formProps = useReactHookForm<z.infer<S>>({
    resolver: zodResolver(schema),
    ...props,
  });
  return formProps;
};

export default useForm;
