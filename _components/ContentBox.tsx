import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export function ContentBox({
  placeHolder,
  defaultValue,
}: {
  placeHolder: string;
  defaultValue?: string;
}) {
  return (
    <FieldSet className="w-75 md:w-xl xl:w-2xl text-white">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="content" className="text-md md:text-lg lg:text-xl">
            Content
          </FieldLabel>
          <Textarea
            id="content"
            placeholder={placeHolder}
            className="text-md md:text-lg lg:text-xl h-40 md:h-70 lg:h-80 p-2 lg:p-4"
            defaultValue={defaultValue}
            name="content"
          />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}
