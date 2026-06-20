import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export function ContentBox({ placeHolder, value }: { placeHolder: string; value?: string }) {
  return (
    <FieldSet className="w-75 md:w-sm text-white">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="content">Content</FieldLabel>
          <Textarea id="content" placeholder={placeHolder} rows={6} value={value} />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}
