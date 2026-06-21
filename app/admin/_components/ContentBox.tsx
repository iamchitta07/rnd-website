import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export function ContentBox({
  placeHolder,
  value,
  onChange,
}: {
  placeHolder: string;
  value?: string;
  onChange?: () => void;
}) {
  return (
    <FieldSet className="w-75 md:w-sm text-white">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="content">Content</FieldLabel>
          <Textarea
            id="content"
            placeholder={placeHolder}
            rows={6}
            value={value}
            onChange={onChange}
          />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}
